import type {
  CriaUserComValidacaoPasswordDto,
  LoginDto,
  PapeisDto,
  RefreshTokenDto,
  UserCriadoDto,
  UserDto,
} from '@repo/types';
import { hash, verify } from 'argon2';

import PrismaSingleton from '@services/prisma';
import { PrismaClientKnownRequestError } from '@services/prisma/generated/envios/runtime/library';
import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';
import { geraTokens, verifyToken } from '@utils/jwt-handler';

export class AuthRepository {
  static async createUser(
    payload: CriaUserComValidacaoPasswordDto,
  ): Promise<ApiResponseBody<UserCriadoDto>> {
    const resBody = new ApiResponseBody<UserCriadoDto>();
    const prisma = PrismaSingleton.getAuthPrisma();
    try {
      const pHashed = await hash(payload.password);

      const userRecebido = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            nomeUser: payload.nomeUser,
            pHashed,
            nome: payload.nome,
            apelido: payload.apelido,
            email: payload.email,
            updatedAt: new Date(),
          },
        });

        const papeisAInserir = payload.papeis.map((papel) => ({
          idPapel: papel,
          nomeUser: payload.nomeUser,
        }));

        await tx.userPapeis.createMany({
          data: papeisAInserir,
        });
        return user;
      });

      resBody.data = {
        nomeUser: userRecebido.nomeUser,
        nome: userRecebido.nome,
        apelido: userRecebido.apelido,
        email: userRecebido.email,
      };
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (
          err.code === 'P2002' &&
          err.meta?.target &&
          typeof err.meta?.target === 'string' &&
          err.meta.target.includes('User')
        ) {
          resBody.error = {
            code: HttpStatusCode.CONFLICT,
            message: 'User already exists',
          };
        }
      } else {
        resBody.error = {
          code: HttpStatusCode.INTERNAL_SERVER_ERROR,
          message: String(err),
        };
      }
    }

    return resBody;
  }

  static async loginUser(payload: LoginDto): Promise<ApiResponseBody<UserDto>> {
    const resBody = new ApiResponseBody<UserDto>();
    try {
      // Fetch user with related roles
      const user = await PrismaSingleton.getAuthPrisma().user.findUnique({
        where: { nomeUser: payload.nomeUser },
        include: {
          UserPapeis: {
            select: {
              idPapel: true,
              Papeis: {
                select: { descPapel: true },
              },
            },
          },
        },
      });

      // If user not found, return unauthorized response
      if (!user) {
        return ResponseHandler.Unauthorized('Credentials Error');
      }

      // Verify the provided password
      const isValidPassword = await verify(user.pHashed, payload.password);

      if (!isValidPassword) {
        return ResponseHandler.Unauthorized('Credentials Error');
      }

      const papeis = user.UserPapeis.map((papel) => papel.Papeis.descPapel);

      // Generate tokens
      const { accessToken, refreshToken } = await geraTokens(
        payload.nomeUser,
        papeis,
      );

      // Hash and store the refresh token
      const hashedRefreshToken = await hash(refreshToken);
      await PrismaSingleton.getAuthPrisma().user.update({
        where: { nomeUser: user.nomeUser },
        data: { hashedRefreshToken },
      });

      // Prepare the response data
      const responseData: UserDto = {
        id: payload.nomeUser,
        name: user.nome,
        apelido: user.apelido,
        email: user.email,
        accessToken,
        refreshToken,
        papeis: papeis,
      };

      // Assign data to response body
      resBody.data = responseData;
      return resBody;
    } catch (err) {
      // Handle errors and set error response
      resBody.error = {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: err instanceof Error ? err.message : String(err),
      };
      return resBody;
    }
  }

  static async refreshToken(
    refreshToken: RefreshTokenDto,
  ): Promise<ApiResponseBody<UserDto>> {
    const resBody = new ApiResponseBody<UserDto>();
    const { refresh } = refreshToken;

    try {
      //decript the token
      const decripted = await verifyToken(refresh, 'refresh');

      const sub =
        decripted.valid && !decripted.expired && decripted.decoded?.sub
          ? decripted.decoded.sub
          : null;

      //console.log('refresh token o sub:', sub);

      if (!sub) {
        return ResponseHandler.Unauthorized('Token error.');
      }

      const normalizedSub: string = typeof sub === 'function' ? sub() : sub;

      const user = await PrismaSingleton.getAuthPrisma().user.findUnique({
        where: { nomeUser: normalizedSub },
        include: {
          UserPapeis: {
            select: {
              idPapel: true,
              Papeis: {
                select: {
                  descPapel: true,
                },
              },
            },
          },
        },
      });

      if (!user) {
        return ResponseHandler.Unauthorized('User not found or invalid token.');
      }

      // Verify the refresh token
      const isRefreshTokenValid = await verify(
        user.hashedRefreshToken ?? '',
        refresh,
      );
      if (!isRefreshTokenValid) {
        return ResponseHandler.Unauthorized('Invalid refresh token provided.');
      }

      const papeis = user.UserPapeis.map((papel) => papel.Papeis.descPapel);

      // Generate new tokens
      const { accessToken, refreshToken: newRefreshToken } = await geraTokens(
        normalizedSub,
        papeis,
      );

      // Hash and update the new refresh token
      const hashedRefreshToken = await hash(newRefreshToken);
      await PrismaSingleton.getAuthPrisma().user.update({
        where: { nomeUser: normalizedSub },
        data: { hashedRefreshToken },
      });

      // Populate response data
      resBody.data = {
        id: user.nomeUser,
        name: user.nome,
        apelido: user.apelido,
        email: user.email,
        accessToken,
        refreshToken: newRefreshToken,
        papeis: user.UserPapeis.map((papel) => papel.Papeis.descPapel),
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      resBody.error = {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message: 'An error occurred while refreshing the token.',
      };
    }

    return resBody;
  }

  static async getPapeis(): Promise<ApiResponseBody<PapeisDto>> {
    const resBody = new ApiResponseBody<PapeisDto>();
    try {
      const papeisRecebido =
        await PrismaSingleton.getAuthPrisma().userPapeis.findMany({
          include: { Papeis: { select: { descPapel: true } } },
        });
      resBody.data = {
        papeis: papeisRecebido.map((papel) => ({
          idPapel: papel.idPapel,
          descricao: papel.Papeis.descPapel,
        })),
      };
      return resBody;
    } catch (error) {
      resBody.error = {
        code: HttpStatusCode.INTERNAL_SERVER_ERROR,
        message:
          error instanceof Error
            ? error.message
            : 'Unexpected error occurred while updating container order.',
      };
    }
    return resBody;
  }
}
