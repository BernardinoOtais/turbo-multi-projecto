
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
  Descricao: 'Descricao'
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
  nomeDestino: 'nomeDestino'
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
  Unidades: 'Unidades'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/otais/Developer/turborepo/next-express/apps/api/src/services/prisma/generated/envios",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/otais/Developer/turborepo/next-express/apps/api/prisma/schema.envios.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../../../.env"
  },
  "relativePath": "../../../../../prisma",
  "clientVersion": "6.2.1",
  "engineVersion": "4123509d24aa4dede1e864b46351bf2790323b69",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "ENVIOS_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/services/prisma/generated/envios\"\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"ENVIOS_URL\")\n}\n\nmodel Papeis {\n  idPapel    String       @id(map: \"PK_Papeis\") @default(dbgenerated(\"newid()\"), map: \"DF_Papeis_idPapeis\") @db.UniqueIdentifier\n  descPapel  String       @unique(map: \"UQ_Papeis_descPapel\") @db.NVarChar(100)\n  UserPapeis UserPapeis[]\n}\n\nmodel sysdiagrams {\n  name         String @db.NVarChar(128)\n  principal_id Int\n  diagram_id   Int    @id(map: \"PK__sysdiagr__C2B05B61A3E2AEFC\") @default(autoincrement())\n  version      Int?\n  definition   Bytes?\n\n  @@unique([principal_id, name], map: \"UK_principal_name\")\n}\n\nmodel User {\n  nomeUser           String       @id(map: \"PK_User\") @unique @db.NVarChar(100)\n  pHashed            String\n  hashedRefreshToken String?      @db.NVarChar(4000)\n  nome               String\n  apelido            String\n  email              String       @unique\n  createdAt          DateTime     @default(now())\n  updatedAt          DateTime\n  UserPapeis         UserPapeis[]\n}\n\nmodel UserPapeis {\n  idPapel  String @db.UniqueIdentifier\n  nomeUser String @db.NVarChar(100)\n  Papeis   Papeis @relation(fields: [idPapel], references: [idPapel], onUpdate: NoAction, map: \"FK_UserPapeis_Papeis\")\n  User     User   @relation(fields: [nomeUser], references: [nomeUser], onUpdate: NoAction, map: \"FK_UserPapeis_User\")\n\n  @@id([idPapel, nomeUser], map: \"PK_UserPapeis\")\n}\n\nmodel Container {\n  idContainer     Int           @id(map: \"PK_Container\") @default(autoincrement())\n  idContainerPai  Int?\n  idEnvio         Int\n  idTipoContainer Int\n  ordem           Int\n  nContainer      Int\n  altura          Float         @default(0, map: \"DF_Container_altura\")\n  Container       Container?    @relation(\"ContainerToContainer\", fields: [idContainerPai], references: [idContainer], onDelete: NoAction, onUpdate: NoAction, map: \"FK_Container_Container\")\n  other_Container Container[]   @relation(\"ContainerToContainer\")\n  Envio           Envio         @relation(fields: [idEnvio], references: [idEnvio], onUpdate: NoAction, map: \"FK_Container_Envio\")\n  TipoContainer   TipoContainer @relation(fields: [idTipoContainer], references: [idTipoContainer], onUpdate: NoAction, map: \"FK_Container_TipoContainer\")\n  ContainerOp     ContainerOp[]\n  Conteudo        Conteudo[]\n}\n\nmodel Conteudo {\n  idConteudo  Int         @unique(map: \"UQ_Conteudo_idConteudo\") @default(autoincrement())\n  idContainer Int\n  idItem      Int\n  op          Int\n  tam         String      @db.NVarChar(25)\n  qtt         Float\n  idUnidades  Int\n  peso        Float\n  Container   Container   @relation(fields: [idContainer], references: [idContainer], onUpdate: NoAction, map: \"FK_Conteudo_Container\")\n  ContainerOp ContainerOp @relation(fields: [idContainer, op], references: [idContainer, op], onUpdate: NoAction, map: \"FK_Conteudo_ContainerOp\")\n  Item        Item        @relation(fields: [idItem], references: [idItem], onUpdate: NoAction, map: \"FK_Conteudo_Item\")\n  Op          Op          @relation(fields: [op], references: [op], onUpdate: NoAction, map: \"FK_Conteudo_Op\")\n  OpTamanho   OpTamanho   @relation(fields: [op, tam], references: [op, tam], onUpdate: NoAction, map: \"FK_Conteudo_OpTamanho\")\n  Unidades    Unidades    @relation(fields: [idUnidades], references: [idUnidades], onUpdate: NoAction, map: \"FK_Conteudo_Unidades\")\n\n  @@id([idConteudo, idContainer, op, tam], map: \"PK_Conteudo\")\n}\n\nmodel Envio {\n  idEnvio   Int         @id(map: \"PK_Envio\") @default(autoincrement())\n  nomeEnvio String      @db.NVarChar(50)\n  idDestino Int\n  fechado   Boolean     @default(false, map: \"DF_Envio_fechado\")\n  createdAt DateTime    @default(dbgenerated(\"sysdatetime()\"), map: \"DF__Envio__createdAt__1940BAED\")\n  endDate   DateTime?\n  obs       String?     @db.Text\n  nomeUser  String      @db.NVarChar(100)\n  Container Container[]\n  Destinos  Destinos    @relation(fields: [idDestino], references: [idDestino], onUpdate: NoAction, map: \"FK_Envio_Destinos\")\n}\n\nmodel Idiomas {\n  idIdioma      Int             @id(map: \"PK_Idiomas_1\") @default(autoincrement())\n  nomeIdioma    String          @db.NChar(50)\n  Destinos      Destinos[]\n  ItemTraduzido ItemTraduzido[]\n}\n\nmodel Item {\n  idItem        Int             @id(map: \"PK_Item\") @default(autoincrement())\n  Descricao     String          @db.NVarChar(100)\n  Conteudo      Conteudo[]\n  ItemTraduzido ItemTraduzido[]\n  TipoContainer TipoContainer?\n  Unidades      Unidades?\n}\n\nmodel ItemTraduzido {\n  idIdioma Int\n  idItem   Int\n  descItem String  @db.NChar(100)\n  Idiomas  Idiomas @relation(fields: [idIdioma], references: [idIdioma], onUpdate: NoAction, map: \"FK_ItemTraduzido_Idiomas\")\n  Item     Item    @relation(fields: [idItem], references: [idItem], onUpdate: NoAction, map: \"FK_ItemTraduzido_Item\")\n\n  @@id([idIdioma, idItem], map: \"PK_ItemTraduzido\")\n}\n\nmodel TipoContainer {\n  idTipoContainer     Int         @id(map: \"PK_TipoContainer\") @default(autoincrement())\n  idItem              Int         @unique(map: \"UQ_TipoContainer_idItem\")\n  permiteSubContainer Boolean     @default(false, map: \"DF_TipoContainer_permiteSubContainer\")\n  Container           Container[]\n  Item                Item        @relation(fields: [idItem], references: [idItem], onUpdate: NoAction, map: \"FK_TipoContainer_Item\")\n}\n\nmodel Destinos {\n  idDestino   Int     @id(map: \"PK_Destinos\") @default(autoincrement())\n  idIdioma    Int\n  nomeDestino String  @db.NVarChar(60)\n  Idiomas     Idiomas @relation(fields: [idIdioma], references: [idIdioma], onUpdate: NoAction, map: \"FK_Destinos_Idiomas\")\n  Envio       Envio[]\n}\n\nmodel ContainerOp {\n  idContainer Int\n  op          Int\n  Container   Container  @relation(fields: [idContainer], references: [idContainer], onUpdate: NoAction, map: \"FK_ContainerOp_Container\")\n  Op          Op         @relation(fields: [op], references: [op], onUpdate: NoAction, map: \"FK_ContainerOp_Op\")\n  Conteudo    Conteudo[]\n\n  @@id([idContainer, op], map: \"PK_ContainerOp\")\n}\n\nmodel Op {\n  op          Int           @id(map: \"PK_Op_1\")\n  ref         String        @db.Char(18)\n  modeloDesc  String        @db.NVarChar(60)\n  modelo      String        @db.NVarChar(50)\n  cor         String        @db.NVarChar(50)\n  pedido      String        @db.NVarChar(50)\n  norma       String        @db.NVarChar(100)\n  ContainerOp ContainerOp[]\n  Conteudo    Conteudo[]\n  OpTamanho   OpTamanho[]\n}\n\nmodel OpTamanho {\n  op       Int\n  tam      String     @db.NVarChar(25)\n  ordem    Int\n  qtt      Int\n  Conteudo Conteudo[]\n  Op       Op         @relation(fields: [op], references: [op], onUpdate: NoAction, map: \"FK_OpTamanho_Op\")\n\n  @@id([op, tam], map: \"PK_OpTamanho\")\n}\n\nmodel Unidades {\n  idUnidades       Int        @id(map: \"PK_Unidades\") @default(autoincrement())\n  idItem           Int        @unique(map: \"UQ_Unidades_Iditem\")\n  descricaoUnidade String     @db.NVarChar(100)\n  Conteudo         Conteudo[]\n  Item             Item       @relation(fields: [idItem], references: [idItem], onUpdate: NoAction, map: \"FK_Unidades_Item\")\n}\n",
  "inlineSchemaHash": "1e5fbc675ab1a265fef7a894fe85ca69235faf9260a5cf1fe9efa2b0308daf6d",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "src/services/prisma/generated/envios",
    "services/prisma/generated/envios",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Papeis\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idPapel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"UniqueIdentifier\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"newid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descPapel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserPapeis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserPapeis\",\"nativeType\":null,\"relationName\":\"PapeisToUserPapeis\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"sysdiagrams\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"128\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"principal_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"diagram_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"definition\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"principal_id\",\"name\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"principal_id\",\"name\"]}],\"isGenerated\":false},\"User\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"nomeUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pHashed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashedRefreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"4000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"apelido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserPapeis\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserPapeis\",\"nativeType\":null,\"relationName\":\"UserToUserPapeis\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UserPapeis\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idPapel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"UniqueIdentifier\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Papeis\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Papeis\",\"nativeType\":null,\"relationName\":\"PapeisToUserPapeis\",\"relationFromFields\":[\"idPapel\"],\"relationToFields\":[\"idPapel\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToUserPapeis\",\"relationFromFields\":[\"nomeUser\"],\"relationToFields\":[\"nomeUser\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idPapel\",\"nomeUser\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Container\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idContainerPai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idTipoContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"altura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Container\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToContainer\",\"relationFromFields\":[\"idContainerPai\"],\"relationToFields\":[\"idContainer\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_Container\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToContainer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Envio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Envio\",\"nativeType\":null,\"relationName\":\"ContainerToEnvio\",\"relationFromFields\":[\"idEnvio\"],\"relationToFields\":[\"idEnvio\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoContainer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoContainer\",\"nativeType\":null,\"relationName\":\"ContainerToTipoContainer\",\"relationFromFields\":[\"idTipoContainer\"],\"relationToFields\":[\"idTipoContainer\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContainerOp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContainerOp\",\"nativeType\":null,\"relationName\":\"ContainerToContainerOp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ContainerToConteudo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Conteudo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idConteudo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"op\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qtt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idUnidades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"peso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Container\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToConteudo\",\"relationFromFields\":[\"idContainer\"],\"relationToFields\":[\"idContainer\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContainerOp\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContainerOp\",\"nativeType\":null,\"relationName\":\"ContainerOpToConteudo\",\"relationFromFields\":[\"idContainer\",\"op\"],\"relationToFields\":[\"idContainer\",\"op\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ConteudoToItem\",\"relationFromFields\":[\"idItem\"],\"relationToFields\":[\"idItem\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Op\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Op\",\"nativeType\":null,\"relationName\":\"ConteudoToOp\",\"relationFromFields\":[\"op\"],\"relationToFields\":[\"op\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OpTamanho\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OpTamanho\",\"nativeType\":null,\"relationName\":\"ConteudoToOpTamanho\",\"relationFromFields\":[\"op\",\"tam\"],\"relationToFields\":[\"op\",\"tam\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Unidades\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unidades\",\"nativeType\":null,\"relationName\":\"ConteudoToUnidades\",\"relationFromFields\":[\"idUnidades\"],\"relationToFields\":[\"idUnidades\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idConteudo\",\"idContainer\",\"op\",\"tam\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Envio\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeEnvio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idDestino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fechado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"dbgenerated\",\"args\":[\"sysdatetime()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"obs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeUser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Container\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToEnvio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Destinos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Destinos\",\"nativeType\":null,\"relationName\":\"DestinosToEnvio\",\"relationFromFields\":[\"idDestino\"],\"relationToFields\":[\"idDestino\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Idiomas\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idIdioma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeIdioma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Destinos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Destinos\",\"nativeType\":null,\"relationName\":\"DestinosToIdiomas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemTraduzido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemTraduzido\",\"nativeType\":null,\"relationName\":\"IdiomasToItemTraduzido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Item\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descricao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ConteudoToItem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ItemTraduzido\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ItemTraduzido\",\"nativeType\":null,\"relationName\":\"ItemToItemTraduzido\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TipoContainer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoContainer\",\"nativeType\":null,\"relationName\":\"ItemToTipoContainer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Unidades\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Unidades\",\"nativeType\":null,\"relationName\":\"ItemToUnidades\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ItemTraduzido\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idIdioma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Idiomas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Idiomas\",\"nativeType\":null,\"relationName\":\"IdiomasToItemTraduzido\",\"relationFromFields\":[\"idIdioma\"],\"relationToFields\":[\"idIdioma\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToItemTraduzido\",\"relationFromFields\":[\"idItem\"],\"relationToFields\":[\"idItem\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idIdioma\",\"idItem\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TipoContainer\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idTipoContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permiteSubContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Container\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToTipoContainer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToTipoContainer\",\"relationFromFields\":[\"idItem\"],\"relationToFields\":[\"idItem\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Destinos\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idDestino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idIdioma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nomeDestino\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Idiomas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Idiomas\",\"nativeType\":null,\"relationName\":\"DestinosToIdiomas\",\"relationFromFields\":[\"idIdioma\"],\"relationToFields\":[\"idIdioma\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Envio\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Envio\",\"nativeType\":null,\"relationName\":\"DestinosToEnvio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ContainerOp\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idContainer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"op\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Container\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Container\",\"nativeType\":null,\"relationName\":\"ContainerToContainerOp\",\"relationFromFields\":[\"idContainer\"],\"relationToFields\":[\"idContainer\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Op\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Op\",\"nativeType\":null,\"relationName\":\"ContainerOpToOp\",\"relationFromFields\":[\"op\"],\"relationToFields\":[\"op\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ContainerOpToConteudo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"idContainer\",\"op\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Op\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"op\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ref\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Char\",[\"18\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modeloDesc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"60\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modelo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pedido\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"norma\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ContainerOp\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ContainerOp\",\"nativeType\":null,\"relationName\":\"ContainerOpToOp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ConteudoToOp\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OpTamanho\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"OpTamanho\",\"nativeType\":null,\"relationName\":\"OpToOpTamanho\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"OpTamanho\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"op\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tam\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"25\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ordem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"qtt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ConteudoToOpTamanho\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Op\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Op\",\"nativeType\":null,\"relationName\":\"OpToOpTamanho\",\"relationFromFields\":[\"op\"],\"relationToFields\":[\"op\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"op\",\"tam\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Unidades\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"idUnidades\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"idItem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"descricaoUnidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"NVarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Conteudo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Conteudo\",\"nativeType\":null,\"relationName\":\"ConteudoToUnidades\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Item\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Item\",\"nativeType\":null,\"relationName\":\"ItemToUnidades\",\"relationFromFields\":[\"idItem\"],\"relationToFields\":[\"idItem\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "src/services/prisma/generated/envios/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/services/prisma/generated/envios/schema.prisma")
