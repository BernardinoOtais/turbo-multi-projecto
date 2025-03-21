
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

exports.Prisma.PapeisScalarFieldEnum = {
  idPapel: 'idPapel',
  descPapel: 'descPapel'
};

exports.Prisma.SysdiagramsScalarFieldEnum = {
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
};

exports.Prisma.UserScalarFieldEnum = {
  nomeUser: 'nomeUser',
  pHashed: 'pHashed',
  hashedRefreshToken: 'hashedRefreshToken',
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

exports.Prisma.ContainerScalarFieldEnum = {
  idContainer: 'idContainer',
  idContainerPai: 'idContainerPai',
  idEnvio: 'idEnvio',
  idTipoContainer: 'idTipoContainer',
  ordem: 'ordem',
  nContainer: 'nContainer',
  altura: 'altura'
};

exports.Prisma.ConteudoScalarFieldEnum = {
  idConteudo: 'idConteudo',
  idContainer: 'idContainer',
  idItem: 'idItem',
  op: 'op',
  tam: 'tam',
  qtt: 'qtt',
  idUnidades: 'idUnidades',
  peso: 'peso'
};

exports.Prisma.EnvioScalarFieldEnum = {
  idEnvio: 'idEnvio',
  nomeEnvio: 'nomeEnvio',
  idDestino: 'idDestino',
  fechado: 'fechado',
  createdAt: 'createdAt',
  endDate: 'endDate',
  obs: 'obs',
  nomeUser: 'nomeUser'
};

exports.Prisma.IdiomasScalarFieldEnum = {
  idIdioma: 'idIdioma',
  nomeIdioma: 'nomeIdioma'
};

exports.Prisma.ItemScalarFieldEnum = {
  idItem: 'idItem',
  Descricao: 'Descricao',
  inativo: 'inativo'
};

exports.Prisma.ItemTraduzidoScalarFieldEnum = {
  idIdioma: 'idIdioma',
  idItem: 'idItem',
  descItem: 'descItem'
};

exports.Prisma.TipoContainerScalarFieldEnum = {
  idTipoContainer: 'idTipoContainer',
  idItem: 'idItem',
  permiteSubContainer: 'permiteSubContainer'
};

exports.Prisma.DestinosScalarFieldEnum = {
  idDestino: 'idDestino',
  idIdioma: 'idIdioma',
  nomeDestino: 'nomeDestino',
  morada: 'morada',
  localMorada: 'localMorada',
  codigoPostal: 'codigoPostal',
  nacionalidade: 'nacionalidade'
};

exports.Prisma.ContainerOpScalarFieldEnum = {
  idContainer: 'idContainer',
  op: 'op'
};

exports.Prisma.OpScalarFieldEnum = {
  op: 'op',
  ref: 'ref',
  modeloDesc: 'modeloDesc',
  modelo: 'modelo',
  cor: 'cor',
  pedido: 'pedido',
  norma: 'norma'
};

exports.Prisma.OpTamanhoScalarFieldEnum = {
  op: 'op',
  tam: 'tam',
  ordem: 'ordem',
  qtt: 'qtt'
};

exports.Prisma.UnidadesScalarFieldEnum = {
  idUnidades: 'idUnidades',
  idItem: 'idItem',
  descricaoUnidade: 'descricaoUnidade'
};

exports.Prisma.LigacaoAndroidScalarFieldEnum = {
  idItem: 'idItem',
  idParte: 'idParte'
};

exports.Prisma.AcessoriosScalarFieldEnum = {
  idItem: 'idItem',
  Descricao: 'Descricao'
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
  Papeis: 'Papeis',
  sysdiagrams: 'sysdiagrams',
  User: 'User',
  UserPapeis: 'UserPapeis',
  Container: 'Container',
  Conteudo: 'Conteudo',
  Envio: 'Envio',
  Idiomas: 'Idiomas',
  Item: 'Item',
  ItemTraduzido: 'ItemTraduzido',
  TipoContainer: 'TipoContainer',
  Destinos: 'Destinos',
  ContainerOp: 'ContainerOp',
  Op: 'Op',
  OpTamanho: 'OpTamanho',
  Unidades: 'Unidades',
  ligacaoAndroid: 'ligacaoAndroid',
  Acessorios: 'Acessorios'
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
