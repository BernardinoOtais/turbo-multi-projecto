
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.3.1
 * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
 */
Prisma.prismaVersion = {
  client: "6.3.1",
  engine: "acc0b9dd43eb689cbd20c9470515d719db10d0b0"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.BmScalarFieldEnum = {
  idBm: 'idBm',
  composicao: 'composicao',
  fechado: 'fechado',
  CreatedAt: 'CreatedAt'
};

exports.Prisma.BmFioComposicaoScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  refOrigem: 'refOrigem',
  idComposicao: 'idComposicao',
  qtt: 'qtt'
};

exports.Prisma.BmIdBmComposicaoScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  idComposicao: 'idComposicao',
  qtt: 'qtt'
};

exports.Prisma.BmMalhasScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  malha: 'malha',
  grupo: 'grupo',
  subGrupo: 'subGrupo',
  qtdePedida: 'qtdePedida',
  qtdeEntrada: 'qtdeEntrada',
  qtdeEntradaSeUnidade: 'qtdeEntradaSeUnidade',
  defeitosStock: 'defeitosStock',
  sobras: 'sobras',
  unidade: 'unidade',
  lote: 'lote'
};

exports.Prisma.BmMalhasFioScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  refOrigem: 'refOrigem',
  fio: 'fio',
  grupo: 'grupo',
  subGrupo: 'subGrupo',
  qtdePedida: 'qtdePedida',
  qtdeEntrada: 'qtdeEntrada',
  defeitosStock: 'defeitosStock',
  sobras: 'sobras',
  unidade: 'unidade',
  lote: 'lote'
};

exports.Prisma.BmMalhasFioMovimentosScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  refOrigem: 'refOrigem',
  op: 'op',
  idBmMovimentosLote: 'idBmMovimentosLote',
  idMovimento: 'idMovimento',
  nMovimento: 'nMovimento',
  nome: 'nome',
  idTipo: 'idTipo',
  tipo: 'tipo',
  qtt: 'qtt',
  unidade: 'unidade',
  lote: 'lote'
};

exports.Prisma.BmMateriaisScalarFieldEnum = {
  grupo: 'grupo',
  subGrupo: 'subGrupo'
};

exports.Prisma.BmMateriaisComposicaoScalarFieldEnum = {
  idComposicao: 'idComposicao',
  composicao: 'composicao',
  composicaoAbreviatura: 'composicaoAbreviatura',
  ordem: 'ordem',
  inactivo: 'inactivo'
};

exports.Prisma.BmMateriaisFioScalarFieldEnum = {
  grupo: 'grupo',
  subGrupo: 'subGrupo'
};

exports.Prisma.BmMaterialGrupoScalarFieldEnum = {
  grupo: 'grupo',
  grupoDescricao: 'grupoDescricao'
};

exports.Prisma.BmMaterialGrupoFioScalarFieldEnum = {
  grupo: 'grupo',
  grupoDescricao: 'grupoDescricao'
};

exports.Prisma.BmMaterialSubGrupoScalarFieldEnum = {
  subGrupo: 'subGrupo',
  subGrupoDescricao: 'subGrupoDescricao'
};

exports.Prisma.BmMaterialSubGrupoFioScalarFieldEnum = {
  subGrupo: 'subGrupo',
  subGrupoDescricao: 'subGrupoDescricao'
};

exports.Prisma.BmMovimentosLotesScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  op: 'op',
  idBmMovimentosLote: 'idBmMovimentosLote',
  idMovimento: 'idMovimento',
  nMovimento: 'nMovimento',
  nome: 'nome',
  idTipo: 'idTipo',
  tipo: 'tipo',
  qtt: 'qtt',
  unidade: 'unidade',
  lote: 'lote'
};

exports.Prisma.BmOpScalarFieldEnum = {
  idBm: 'idBm',
  op: 'op',
  CreatedAt: 'CreatedAt',
  foto: 'foto'
};

exports.Prisma.BmOpFaturadoScalarFieldEnum = {
  idBm: 'idBm',
  op: 'op',
  nFatutura: 'nFatutura',
  fData: 'fData',
  dataFatura: 'dataFatura',
  refModelo: 'refModelo',
  pedido: 'pedido',
  qtt: 'qtt',
  pesoLiquido: 'pesoLiquido',
  pesoBruto: 'pesoBruto',
  cmr: 'cmr',
  local: 'local',
  obs: 'obs'
};

exports.Prisma.BmOpsPorMalhaScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  op: 'op'
};

exports.Prisma.BmOpsPorMalhaFioScalarFieldEnum = {
  idBm: 'idBm',
  ref: 'ref',
  refOrigem: 'refOrigem',
  op: 'op'
};

exports.Prisma.BmTcScalarFieldEnum = {
  idBm: 'idBm',
  nomeTc: 'nomeTc'
};

exports.Prisma.DataCamiaoScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  IdCamiao: 'IdCamiao',
  nomeUser: 'nomeUser',
  dataCamiao: 'dataCamiao',
  quantidade: 'quantidade',
  percentagem: 'percentagem',
  obs: 'obs'
};

exports.Prisma.DataEnvioScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idEnvio: 'idEnvio',
  nomeUser: 'nomeUser',
  dataEnvio: 'dataEnvio',
  quantidade: 'quantidade',
  percentagem: 'percentagem',
  obs: 'obs'
};

exports.Prisma.FornecedorScalarFieldEnum = {
  idFornecedor: 'idFornecedor',
  nomeFornecedor: 'nomeFornecedor'
};

exports.Prisma.LivreScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idLivre: 'idLivre',
  nomeUser: 'nomeUser',
  Op: 'Op',
  nOp: 'nOp',
  orcamentoStamp: 'orcamentoStamp',
  nOrcamento: 'nOrcamento',
  anoOrcamento: 'anoOrcamento',
  desenho: 'desenho',
  modelo: 'modelo',
  cor: 'cor',
  pedidoCliente: 'pedidoCliente',
  imagem: 'imagem',
  cortaPt: 'cortaPt'
};

exports.Prisma.OpScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  Op: 'Op',
  nomeUser: 'nomeUser',
  nOp: 'nOp',
  modelo: 'modelo',
  cor: 'cor',
  pedidoCliente: 'pedidoCliente',
  imagem: 'imagem',
  cortaPt: 'cortaPt'
};

exports.Prisma.OrcamentoLivreScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idLivre: 'idLivre',
  orcamentoStamp: 'orcamentoStamp',
  orcamentoNumero: 'orcamentoNumero',
  ano: 'ano'
};

exports.Prisma.OrcamentoLivreLinhasScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idLivre: 'idLivre',
  orcamentoStamp: 'orcamentoStamp',
  orcamentoLinhasStamp: 'orcamentoLinhasStamp',
  orcamentoLinhasStampRecebido: 'orcamentoLinhasStampRecebido',
  ordem: 'ordem',
  design: 'design',
  custoPeca: 'custoPeca',
  edebito: 'edebito',
  qtt: 'qtt',
  unidade: 'unidade'
};

exports.Prisma.OrcamentoOpScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  Op: 'Op',
  orcamentoStamp: 'orcamentoStamp',
  orcamentoNumero: 'orcamentoNumero',
  ano: 'ano'
};

exports.Prisma.OrcamentoOpLinhasScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  Op: 'Op',
  orcamentoStamp: 'orcamentoStamp',
  orcamentoLinhasStamp: 'orcamentoLinhasStamp',
  orcamentoLinhasStampRecebido: 'orcamentoLinhasStampRecebido',
  ordem: 'ordem',
  design: 'design',
  custoPeca: 'custoPeca',
  edebito: 'edebito',
  qtt: 'qtt',
  unidade: 'unidade'
};

exports.Prisma.PapeisScalarFieldEnum = {
  idPapeis: 'idPapeis',
  descPapel: 'descPapel'
};

exports.Prisma.PlaneamentoScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  nomeUser: 'nomeUser',
  pais: 'pais',
  idFornecedor: 'idFornecedor',
  numeroPecas: 'numeroPecas',
  modelo: 'modelo',
  obs: 'obs',
  cliente: 'cliente',
  dataPrimeiroCamiao: 'dataPrimeiroCamiao',
  dataPrimeiroEnvio: 'dataPrimeiroEnvio',
  dataCriacao: 'dataCriacao',
  dataUltimaAlteracao: 'dataUltimaAlteracao',
  envioEnviado: 'envioEnviado'
};

exports.Prisma.ServicosEscolhidosLivreScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idLivre: 'idLivre',
  idServicoEscolhido: 'idServicoEscolhido',
  nome: 'nome',
  qtt: 'qtt',
  preco: 'preco',
  valor: 'valor',
  unidade: 'unidade',
  obs: 'obs'
};

exports.Prisma.ServicosEscolhidosLivreOrigemScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  idLivre: 'idLivre',
  idServicoEscolhido: 'idServicoEscolhido',
  orcamentoLinhasStamp: 'orcamentoLinhasStamp'
};

exports.Prisma.ServicosEscolhidosOpScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  Op: 'Op',
  idServicoEscolhido: 'idServicoEscolhido',
  nome: 'nome',
  qtt: 'qtt',
  preco: 'preco',
  valor: 'valor',
  unidade: 'unidade',
  obs: 'obs'
};

exports.Prisma.ServicosEscolhidosOpOrigemScalarFieldEnum = {
  idPlaneamento: 'idPlaneamento',
  Op: 'Op',
  idServicoEscolhido: 'idServicoEscolhido',
  orcamentoLinhasStamp: 'orcamentoLinhasStamp'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.TcScalarFieldEnum = {
  idTc: 'idTc',
  fechado: 'fechado',
  createdAt: 'createdAt'
};

exports.Prisma.TcCompraConteudoScalarFieldEnum = {
  idCompra: 'idCompra',
  idConteudoCompraPhc: 'idConteudoCompraPhc',
  refTipo: 'refTipo',
  ref: 'ref',
  design: 'design',
  qtt: 'qtt',
  cor: 'cor',
  tam: 'tam',
  unidade: 'unidade',
  largura: 'largura',
  gramagem: 'gramagem',
  op: 'op'
};

exports.Prisma.TcCompraConteudoEntradaScalarFieldEnum = {
  idConteudoEntradaPhc: 'idConteudoEntradaPhc',
  idConteudoCompraPhc: 'idConteudoCompraPhc',
  nEntrada: 'nEntrada',
  Nguia: 'Nguia',
  dataEntrada: 'dataEntrada',
  dataEntradaString: 'dataEntradaString',
  qtt: 'qtt',
  cor: 'cor',
  tam: 'tam',
  unidade: 'unidade',
  largura: 'largura',
  gramagem: 'gramagem',
  lote: 'lote',
  op: 'op'
};

exports.Prisma.TcCompraConteudoEntradaFaturadaScalarFieldEnum = {
  idFaturaPhc: 'idFaturaPhc',
  idConteudoEntradaPhc: 'idConteudoEntradaPhc',
  nGuiaPhc: 'nGuiaPhc',
  nFatura: 'nFatura',
  dataFatura: 'dataFatura',
  dataFaturaString: 'dataFaturaString',
  qtt: 'qtt',
  unidade: 'unidade',
  lote: 'lote',
  op: 'op'
};

exports.Prisma.TcOpScalarFieldEnum = {
  idTc: 'idTc',
  op: 'op',
  foto: 'foto',
  createdAt: 'createdAt'
};

exports.Prisma.TcOpCompraScalarFieldEnum = {
  idCompra: 'idCompra',
  idCompraPhc: 'idCompraPhc',
  nCompra: 'nCompra',
  nome: 'nome',
  dataCompra: 'dataCompra',
  dataCompraString: 'dataCompraString',
  op: 'op'
};

exports.Prisma.UserScalarFieldEnum = {
  nomeUser: 'nomeUser',
  pHashed: 'pHashed',
  nome: 'nome',
  apelido: 'apelido',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserPapeisScalarFieldEnum = {
  idPapel: 'idPapel',
  nomeUser: 'nomeUser'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Bm: 'Bm',
  BmFioComposicao: 'BmFioComposicao',
  BmIdBmComposicao: 'BmIdBmComposicao',
  BmMalhas: 'BmMalhas',
  BmMalhasFio: 'BmMalhasFio',
  BmMalhasFioMovimentos: 'BmMalhasFioMovimentos',
  BmMateriais: 'BmMateriais',
  BmMateriaisComposicao: 'BmMateriaisComposicao',
  BmMateriaisFio: 'BmMateriaisFio',
  BmMaterialGrupo: 'BmMaterialGrupo',
  BmMaterialGrupoFio: 'BmMaterialGrupoFio',
  BmMaterialSubGrupo: 'BmMaterialSubGrupo',
  BmMaterialSubGrupoFio: 'BmMaterialSubGrupoFio',
  BmMovimentosLotes: 'BmMovimentosLotes',
  BmOp: 'BmOp',
  BmOpFaturado: 'BmOpFaturado',
  BmOpsPorMalha: 'BmOpsPorMalha',
  BmOpsPorMalhaFio: 'BmOpsPorMalhaFio',
  BmTc: 'BmTc',
  DataCamiao: 'DataCamiao',
  DataEnvio: 'DataEnvio',
  Fornecedor: 'Fornecedor',
  Livre: 'Livre',
  Op: 'Op',
  OrcamentoLivre: 'OrcamentoLivre',
  OrcamentoLivreLinhas: 'OrcamentoLivreLinhas',
  OrcamentoOp: 'OrcamentoOp',
  OrcamentoOpLinhas: 'OrcamentoOpLinhas',
  Papeis: 'Papeis',
  Planeamento: 'Planeamento',
  ServicosEscolhidosLivre: 'ServicosEscolhidosLivre',
  ServicosEscolhidosLivreOrigem: 'ServicosEscolhidosLivreOrigem',
  ServicosEscolhidosOp: 'ServicosEscolhidosOp',
  ServicosEscolhidosOpOrigem: 'ServicosEscolhidosOpOrigem',
  sysdiagrams: 'sysdiagrams',
  Tc: 'Tc',
  TcCompraConteudo: 'TcCompraConteudo',
  TcCompraConteudoEntrada: 'TcCompraConteudoEntrada',
  TcCompraConteudoEntradaFaturada: 'TcCompraConteudoEntradaFaturada',
  TcOp: 'TcOp',
  TcOpCompra: 'TcOpCompra',
  User: 'User',
  UserPapeis: 'UserPapeis'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
