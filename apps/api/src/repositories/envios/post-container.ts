import type { ContainerSchemaDto, PostContainerSchemaDto } from '@repo/types';

import { ApiResponseBody, ResponseHandler } from '@utils/api-response-body';
import HttpStatusCode from '@utils/http-status-code';
import { permiteSubcontainer } from '@utils/utils';

import { AuxEnvios } from './aux';

export async function postContainer(container: PostContainerSchemaDto) {
  const resBody = new ApiResponseBody<ContainerSchemaDto>();
  const { idContainerPai, idTipoContainer } = container;

  try {
    if (!idContainerPai) {
      const munmeroMinimoParacontainerInicial = 3;
      if (idTipoContainer <= munmeroMinimoParacontainerInicial) {
        const containerPrincipalJaExiste =
          await AuxEnvios.exitisEsteContainerPrincipal(container);
        if (containerPrincipalJaExiste.length > 0) {
          return ResponseHandler.BadRequest(
            `Já existe este container Principal`,
          );
        }
        const ordem =
          await AuxEnvios.numeroOrdemContainerSeSubContainer(container);
        const containerSeguinte = ordem + 1;
        const containerInserido = await AuxEnvios.insereContainer(
          container,
          containerSeguinte,
          1, //vai ser sempre número 1
        );
        resBody.data = containerInserido;
        return resBody;
      }
      return ResponseHandler.BadRequest(`Não pode inserir este container`);
    }

    const containerPai = await AuxEnvios.devolveContainerPorId(idContainerPai);
    const idTipoContainerPai =
      containerPai?.idTipoContainer as keyof typeof permiteSubcontainer;

    const listaDeSubContainersDisponiveis =
      idContainerPai && permiteSubcontainer[idTipoContainerPai];

    if (!listaDeSubContainersDisponiveis) {
      return ResponseHandler.BadRequest(`Não há sub-containers diponiveis... `);
    }

    const idTipoContainerDisponivel = listaDeSubContainersDisponiveis.find(
      (tipo) => tipo === idTipoContainer,
    );

    if (!idTipoContainerDisponivel) {
      return ResponseHandler.BadRequest(
        `Este tipo de container não pode ser sub-container`,
      );
    }

    const nContainer =
      await AuxEnvios.numeroOrdemContainerSeSubContainerTipo(container);
    const ordem = await AuxEnvios.numeroOrdemContainerSeSubContainer(container);

    const containerSeguinte = ordem + 1;
    const nContainerSeguinte = nContainer + 1;

    const containerInserido = await AuxEnvios.insereContainer(
      container,
      containerSeguinte,
      nContainerSeguinte,
    );

    resBody.data = containerInserido;
    return resBody;
  } catch (error) {
    // Handle errors and set error response
    resBody.error = {
      code: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error instanceof Error ? error.message : String(error),
    };
    return resBody;
  }
}
