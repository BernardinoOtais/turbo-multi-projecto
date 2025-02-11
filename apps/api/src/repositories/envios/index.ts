import { apagaConteudos } from './apaga-conteudos';
import { apagoEnvio } from './apaga-envio';
import { apagoOpContainer } from './apago-op-container';
import { containerApagar } from './container-apagar';
import { getDestinos } from './get-destinos';
import { getEnvioById } from './get-envio-by-id';
import { getEnvios } from './get-envios';
import { insiroAlturaContainer } from './insiro-altura-container';
import { insiroConteudo } from './insiro-conteudo';
import { insiroOpContainer } from './insiro-op-container';
import { novoEnvioOUPatch } from './novo-envio';
import { ordenaContainer } from './ordena-container';
import { patchFornecedor } from './patch-fornecedor';
import { patchNomeEnvio } from './patch-nome-envio';
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

  static apagaConteudos = apagaConteudos;

  static insiroConteudo = insiroConteudo;

  static patchFornecedor = patchFornecedor;

  static apagoEnvio = apagoEnvio;

  static patchNomeEnvio = patchNomeEnvio;

  static novoEnvioOUPatch = novoEnvioOUPatch;

  static getDestinos = getDestinos;
}
