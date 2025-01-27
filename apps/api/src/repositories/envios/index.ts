import { apagoOpContainer } from './apago-op-container';
import { containerApagar } from './container-apagar';
import { getEnvioById } from './get-envio-by-id';
import { getEnvios } from './get-envios';
import { insiroAlturaContainer } from './insiro-altura-container';
import { insiroOpContainer } from './insiro-op-container';
import { ordenaContainer } from './ordena-container';
import { postContainer } from './post-container';

export class EnviosRepository {
  static getEnvios = getEnvios;

  static getEnvioById = getEnvioById;
  static postContainer = postContainer;

  static containerApagar = containerApagar;

  static ordenaContainer = ordenaContainer;
  static insiroAlturaContainer = insiroAlturaContainer;

  static insiroOpContainer = insiroOpContainer;

  static apagoOpContainer = apagoOpContainer;
}
