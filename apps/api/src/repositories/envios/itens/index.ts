import { getIntensAcessorios } from './get-itens-acessorios';
import { patchEstadoItem } from './patch-estado-item';
import { patchNomeItem } from './patch-nome-item';
import { refreshPartesAndroid } from './refresh-partes-android';

export class EnviosItensRepository {
  static refreshPartesAndroid = refreshPartesAndroid;
  static getIntensAcessorios = getIntensAcessorios;
  static patchEstadoItem = patchEstadoItem;
  static patchNomeItem = patchNomeItem;
}
