import jwt from 'jsonwebtoken';

import { server } from '@config/config';

export const geraTokens = async (nomeUser: string, papeis: string[]) => {
  const payload = { sub: nomeUser, papeis };

  const [accessToken, refreshToken] = await Promise.all([
    jwt.sign(payload, server.JWT_SECRET as string, {
      expiresIn: server.JWT_EXPIRES_IN,
    }),
    jwt.sign(payload, server.REFRESH_JWT_SECRET as string, {
      expiresIn: server.REFRESH_JWT_EXPIRES_IN,
    }),
  ]);
  return {
    accessToken,
    refreshToken,
  };
};

export const verifyToken = async (
  token: string,
  type: 'access' | 'refresh',
) => {
  try {
    const secret =
      type === 'access' ? server.JWT_SECRET : server.REFRESH_JWT_SECRET;

    // Verify and decode the token
    const decoded = jwt.verify(token, secret as string);

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (error) {
    // Handle errors like token expiration or invalid tokens
    const err = error as jwt.JsonWebTokenError;

    return {
      valid: false,
      expired: err instanceof jwt.TokenExpiredError,
      message: err.message,
    };
  }
};
