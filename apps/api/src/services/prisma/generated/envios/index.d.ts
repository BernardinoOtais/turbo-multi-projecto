
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Papeis
 * 
 */
export type Papeis = $Result.DefaultSelection<Prisma.$PapeisPayload>
/**
 * Model sysdiagrams
 * 
 */
export type sysdiagrams = $Result.DefaultSelection<Prisma.$sysdiagramsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPapeis
 * 
 */
export type UserPapeis = $Result.DefaultSelection<Prisma.$UserPapeisPayload>
/**
 * Model Container
 * 
 */
export type Container = $Result.DefaultSelection<Prisma.$ContainerPayload>
/**
 * Model Conteudo
 * 
 */
export type Conteudo = $Result.DefaultSelection<Prisma.$ConteudoPayload>
/**
 * Model Envio
 * 
 */
export type Envio = $Result.DefaultSelection<Prisma.$EnvioPayload>
/**
 * Model Idiomas
 * 
 */
export type Idiomas = $Result.DefaultSelection<Prisma.$IdiomasPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemTraduzido
 * 
 */
export type ItemTraduzido = $Result.DefaultSelection<Prisma.$ItemTraduzidoPayload>
/**
 * Model TipoContainer
 * 
 */
export type TipoContainer = $Result.DefaultSelection<Prisma.$TipoContainerPayload>
/**
 * Model Destinos
 * 
 */
export type Destinos = $Result.DefaultSelection<Prisma.$DestinosPayload>
/**
 * Model ContainerOp
 * 
 */
export type ContainerOp = $Result.DefaultSelection<Prisma.$ContainerOpPayload>
/**
 * Model ContainerOpTam
 * 
 */
export type ContainerOpTam = $Result.DefaultSelection<Prisma.$ContainerOpTamPayload>
/**
 * Model Op
 * 
 */
export type Op = $Result.DefaultSelection<Prisma.$OpPayload>
/**
 * Model OpTamanho
 * 
 */
export type OpTamanho = $Result.DefaultSelection<Prisma.$OpTamanhoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Papeis
 * const papeis = await prisma.papeis.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Papeis
   * const papeis = await prisma.papeis.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.papeis`: Exposes CRUD operations for the **Papeis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Papeis
    * const papeis = await prisma.papeis.findMany()
    * ```
    */
  get papeis(): Prisma.PapeisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sysdiagrams`: Exposes CRUD operations for the **sysdiagrams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sysdiagrams
    * const sysdiagrams = await prisma.sysdiagrams.findMany()
    * ```
    */
  get sysdiagrams(): Prisma.sysdiagramsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPapeis`: Exposes CRUD operations for the **UserPapeis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPapeis
    * const userPapeis = await prisma.userPapeis.findMany()
    * ```
    */
  get userPapeis(): Prisma.UserPapeisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.container`: Exposes CRUD operations for the **Container** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Containers
    * const containers = await prisma.container.findMany()
    * ```
    */
  get container(): Prisma.ContainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conteudo`: Exposes CRUD operations for the **Conteudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conteudos
    * const conteudos = await prisma.conteudo.findMany()
    * ```
    */
  get conteudo(): Prisma.ConteudoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.envio`: Exposes CRUD operations for the **Envio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Envios
    * const envios = await prisma.envio.findMany()
    * ```
    */
  get envio(): Prisma.EnvioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idiomas`: Exposes CRUD operations for the **Idiomas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Idiomas
    * const idiomas = await prisma.idiomas.findMany()
    * ```
    */
  get idiomas(): Prisma.IdiomasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemTraduzido`: Exposes CRUD operations for the **ItemTraduzido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemTraduzidos
    * const itemTraduzidos = await prisma.itemTraduzido.findMany()
    * ```
    */
  get itemTraduzido(): Prisma.ItemTraduzidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoContainer`: Exposes CRUD operations for the **TipoContainer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoContainers
    * const tipoContainers = await prisma.tipoContainer.findMany()
    * ```
    */
  get tipoContainer(): Prisma.TipoContainerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destinos`: Exposes CRUD operations for the **Destinos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinos
    * const destinos = await prisma.destinos.findMany()
    * ```
    */
  get destinos(): Prisma.DestinosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.containerOp`: Exposes CRUD operations for the **ContainerOp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContainerOps
    * const containerOps = await prisma.containerOp.findMany()
    * ```
    */
  get containerOp(): Prisma.ContainerOpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.containerOpTam`: Exposes CRUD operations for the **ContainerOpTam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContainerOpTams
    * const containerOpTams = await prisma.containerOpTam.findMany()
    * ```
    */
  get containerOpTam(): Prisma.ContainerOpTamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.op`: Exposes CRUD operations for the **Op** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ops
    * const ops = await prisma.op.findMany()
    * ```
    */
  get op(): Prisma.OpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opTamanho`: Exposes CRUD operations for the **OpTamanho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OpTamanhos
    * const opTamanhos = await prisma.opTamanho.findMany()
    * ```
    */
  get opTamanho(): Prisma.OpTamanhoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
    ContainerOpTam: 'ContainerOpTam',
    Op: 'Op',
    OpTamanho: 'OpTamanho'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "papeis" | "sysdiagrams" | "user" | "userPapeis" | "container" | "conteudo" | "envio" | "idiomas" | "item" | "itemTraduzido" | "tipoContainer" | "destinos" | "containerOp" | "containerOpTam" | "op" | "opTamanho"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Papeis: {
        payload: Prisma.$PapeisPayload<ExtArgs>
        fields: Prisma.PapeisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PapeisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PapeisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          findFirst: {
            args: Prisma.PapeisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PapeisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          findMany: {
            args: Prisma.PapeisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>[]
          }
          create: {
            args: Prisma.PapeisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          createMany: {
            args: Prisma.PapeisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PapeisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          update: {
            args: Prisma.PapeisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          deleteMany: {
            args: Prisma.PapeisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PapeisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PapeisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PapeisPayload>
          }
          aggregate: {
            args: Prisma.PapeisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePapeis>
          }
          groupBy: {
            args: Prisma.PapeisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PapeisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PapeisCountArgs<ExtArgs>
            result: $Utils.Optional<PapeisCountAggregateOutputType> | number
          }
        }
      }
      sysdiagrams: {
        payload: Prisma.$sysdiagramsPayload<ExtArgs>
        fields: Prisma.sysdiagramsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysdiagramsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysdiagramsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findFirst: {
            args: Prisma.sysdiagramsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysdiagramsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          findMany: {
            args: Prisma.sysdiagramsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>[]
          }
          create: {
            args: Prisma.sysdiagramsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          createMany: {
            args: Prisma.sysdiagramsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysdiagramsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          update: {
            args: Prisma.sysdiagramsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          deleteMany: {
            args: Prisma.sysdiagramsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysdiagramsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysdiagramsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysdiagramsPayload>
          }
          aggregate: {
            args: Prisma.SysdiagramsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysdiagrams>
          }
          groupBy: {
            args: Prisma.sysdiagramsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysdiagramsCountArgs<ExtArgs>
            result: $Utils.Optional<SysdiagramsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPapeis: {
        payload: Prisma.$UserPapeisPayload<ExtArgs>
        fields: Prisma.UserPapeisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPapeisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPapeisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          findFirst: {
            args: Prisma.UserPapeisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPapeisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          findMany: {
            args: Prisma.UserPapeisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>[]
          }
          create: {
            args: Prisma.UserPapeisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          createMany: {
            args: Prisma.UserPapeisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPapeisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          update: {
            args: Prisma.UserPapeisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          deleteMany: {
            args: Prisma.UserPapeisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPapeisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPapeisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPapeisPayload>
          }
          aggregate: {
            args: Prisma.UserPapeisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPapeis>
          }
          groupBy: {
            args: Prisma.UserPapeisGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPapeisGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPapeisCountArgs<ExtArgs>
            result: $Utils.Optional<UserPapeisCountAggregateOutputType> | number
          }
        }
      }
      Container: {
        payload: Prisma.$ContainerPayload<ExtArgs>
        fields: Prisma.ContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findFirst: {
            args: Prisma.ContainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          findMany: {
            args: Prisma.ContainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>[]
          }
          create: {
            args: Prisma.ContainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          createMany: {
            args: Prisma.ContainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          update: {
            args: Prisma.ContainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          deleteMany: {
            args: Prisma.ContainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerPayload>
          }
          aggregate: {
            args: Prisma.ContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainer>
          }
          groupBy: {
            args: Prisma.ContainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerCountAggregateOutputType> | number
          }
        }
      }
      Conteudo: {
        payload: Prisma.$ConteudoPayload<ExtArgs>
        fields: Prisma.ConteudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConteudoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConteudoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          findFirst: {
            args: Prisma.ConteudoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConteudoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          findMany: {
            args: Prisma.ConteudoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>[]
          }
          create: {
            args: Prisma.ConteudoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          createMany: {
            args: Prisma.ConteudoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConteudoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          update: {
            args: Prisma.ConteudoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          deleteMany: {
            args: Prisma.ConteudoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConteudoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConteudoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConteudoPayload>
          }
          aggregate: {
            args: Prisma.ConteudoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConteudo>
          }
          groupBy: {
            args: Prisma.ConteudoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConteudoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConteudoCountArgs<ExtArgs>
            result: $Utils.Optional<ConteudoCountAggregateOutputType> | number
          }
        }
      }
      Envio: {
        payload: Prisma.$EnvioPayload<ExtArgs>
        fields: Prisma.EnvioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          findFirst: {
            args: Prisma.EnvioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          findMany: {
            args: Prisma.EnvioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>[]
          }
          create: {
            args: Prisma.EnvioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          createMany: {
            args: Prisma.EnvioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EnvioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          update: {
            args: Prisma.EnvioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          deleteMany: {
            args: Prisma.EnvioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnvioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvioPayload>
          }
          aggregate: {
            args: Prisma.EnvioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvio>
          }
          groupBy: {
            args: Prisma.EnvioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvioCountArgs<ExtArgs>
            result: $Utils.Optional<EnvioCountAggregateOutputType> | number
          }
        }
      }
      Idiomas: {
        payload: Prisma.$IdiomasPayload<ExtArgs>
        fields: Prisma.IdiomasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdiomasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdiomasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          findFirst: {
            args: Prisma.IdiomasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdiomasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          findMany: {
            args: Prisma.IdiomasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>[]
          }
          create: {
            args: Prisma.IdiomasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          createMany: {
            args: Prisma.IdiomasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IdiomasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          update: {
            args: Prisma.IdiomasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          deleteMany: {
            args: Prisma.IdiomasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdiomasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IdiomasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdiomasPayload>
          }
          aggregate: {
            args: Prisma.IdiomasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdiomas>
          }
          groupBy: {
            args: Prisma.IdiomasGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdiomasGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdiomasCountArgs<ExtArgs>
            result: $Utils.Optional<IdiomasCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemTraduzido: {
        payload: Prisma.$ItemTraduzidoPayload<ExtArgs>
        fields: Prisma.ItemTraduzidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemTraduzidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemTraduzidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          findFirst: {
            args: Prisma.ItemTraduzidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemTraduzidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          findMany: {
            args: Prisma.ItemTraduzidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>[]
          }
          create: {
            args: Prisma.ItemTraduzidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          createMany: {
            args: Prisma.ItemTraduzidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ItemTraduzidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          update: {
            args: Prisma.ItemTraduzidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          deleteMany: {
            args: Prisma.ItemTraduzidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemTraduzidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemTraduzidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemTraduzidoPayload>
          }
          aggregate: {
            args: Prisma.ItemTraduzidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemTraduzido>
          }
          groupBy: {
            args: Prisma.ItemTraduzidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemTraduzidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemTraduzidoCountArgs<ExtArgs>
            result: $Utils.Optional<ItemTraduzidoCountAggregateOutputType> | number
          }
        }
      }
      TipoContainer: {
        payload: Prisma.$TipoContainerPayload<ExtArgs>
        fields: Prisma.TipoContainerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoContainerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoContainerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          findFirst: {
            args: Prisma.TipoContainerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoContainerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          findMany: {
            args: Prisma.TipoContainerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>[]
          }
          create: {
            args: Prisma.TipoContainerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          createMany: {
            args: Prisma.TipoContainerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoContainerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          update: {
            args: Prisma.TipoContainerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          deleteMany: {
            args: Prisma.TipoContainerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoContainerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoContainerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoContainerPayload>
          }
          aggregate: {
            args: Prisma.TipoContainerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoContainer>
          }
          groupBy: {
            args: Prisma.TipoContainerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoContainerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoContainerCountArgs<ExtArgs>
            result: $Utils.Optional<TipoContainerCountAggregateOutputType> | number
          }
        }
      }
      Destinos: {
        payload: Prisma.$DestinosPayload<ExtArgs>
        fields: Prisma.DestinosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          findFirst: {
            args: Prisma.DestinosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          findMany: {
            args: Prisma.DestinosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>[]
          }
          create: {
            args: Prisma.DestinosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          createMany: {
            args: Prisma.DestinosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DestinosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          update: {
            args: Prisma.DestinosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          deleteMany: {
            args: Prisma.DestinosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DestinosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinosPayload>
          }
          aggregate: {
            args: Prisma.DestinosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestinos>
          }
          groupBy: {
            args: Prisma.DestinosGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinosGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinosCountArgs<ExtArgs>
            result: $Utils.Optional<DestinosCountAggregateOutputType> | number
          }
        }
      }
      ContainerOp: {
        payload: Prisma.$ContainerOpPayload<ExtArgs>
        fields: Prisma.ContainerOpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerOpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerOpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          findFirst: {
            args: Prisma.ContainerOpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerOpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          findMany: {
            args: Prisma.ContainerOpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>[]
          }
          create: {
            args: Prisma.ContainerOpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          createMany: {
            args: Prisma.ContainerOpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContainerOpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          update: {
            args: Prisma.ContainerOpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          deleteMany: {
            args: Prisma.ContainerOpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerOpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContainerOpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpPayload>
          }
          aggregate: {
            args: Prisma.ContainerOpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainerOp>
          }
          groupBy: {
            args: Prisma.ContainerOpGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerOpGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerOpCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerOpCountAggregateOutputType> | number
          }
        }
      }
      ContainerOpTam: {
        payload: Prisma.$ContainerOpTamPayload<ExtArgs>
        fields: Prisma.ContainerOpTamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContainerOpTamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContainerOpTamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          findFirst: {
            args: Prisma.ContainerOpTamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContainerOpTamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          findMany: {
            args: Prisma.ContainerOpTamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>[]
          }
          create: {
            args: Prisma.ContainerOpTamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          createMany: {
            args: Prisma.ContainerOpTamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContainerOpTamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          update: {
            args: Prisma.ContainerOpTamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          deleteMany: {
            args: Prisma.ContainerOpTamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContainerOpTamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContainerOpTamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContainerOpTamPayload>
          }
          aggregate: {
            args: Prisma.ContainerOpTamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContainerOpTam>
          }
          groupBy: {
            args: Prisma.ContainerOpTamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContainerOpTamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContainerOpTamCountArgs<ExtArgs>
            result: $Utils.Optional<ContainerOpTamCountAggregateOutputType> | number
          }
        }
      }
      Op: {
        payload: Prisma.$OpPayload<ExtArgs>
        fields: Prisma.OpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          findFirst: {
            args: Prisma.OpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          findMany: {
            args: Prisma.OpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>[]
          }
          create: {
            args: Prisma.OpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          createMany: {
            args: Prisma.OpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          update: {
            args: Prisma.OpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          deleteMany: {
            args: Prisma.OpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpPayload>
          }
          aggregate: {
            args: Prisma.OpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOp>
          }
          groupBy: {
            args: Prisma.OpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpCountArgs<ExtArgs>
            result: $Utils.Optional<OpCountAggregateOutputType> | number
          }
        }
      }
      OpTamanho: {
        payload: Prisma.$OpTamanhoPayload<ExtArgs>
        fields: Prisma.OpTamanhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpTamanhoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpTamanhoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          findFirst: {
            args: Prisma.OpTamanhoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpTamanhoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          findMany: {
            args: Prisma.OpTamanhoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>[]
          }
          create: {
            args: Prisma.OpTamanhoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          createMany: {
            args: Prisma.OpTamanhoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OpTamanhoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          update: {
            args: Prisma.OpTamanhoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          deleteMany: {
            args: Prisma.OpTamanhoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpTamanhoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OpTamanhoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpTamanhoPayload>
          }
          aggregate: {
            args: Prisma.OpTamanhoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpTamanho>
          }
          groupBy: {
            args: Prisma.OpTamanhoGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpTamanhoGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpTamanhoCountArgs<ExtArgs>
            result: $Utils.Optional<OpTamanhoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    papeis?: PapeisOmit
    sysdiagrams?: sysdiagramsOmit
    user?: UserOmit
    userPapeis?: UserPapeisOmit
    container?: ContainerOmit
    conteudo?: ConteudoOmit
    envio?: EnvioOmit
    idiomas?: IdiomasOmit
    item?: ItemOmit
    itemTraduzido?: ItemTraduzidoOmit
    tipoContainer?: TipoContainerOmit
    destinos?: DestinosOmit
    containerOp?: ContainerOpOmit
    containerOpTam?: ContainerOpTamOmit
    op?: OpOmit
    opTamanho?: OpTamanhoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PapeisCountOutputType
   */

  export type PapeisCountOutputType = {
    UserPapeis: number
  }

  export type PapeisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPapeis?: boolean | PapeisCountOutputTypeCountUserPapeisArgs
  }

  // Custom InputTypes
  /**
   * PapeisCountOutputType without action
   */
  export type PapeisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PapeisCountOutputType
     */
    select?: PapeisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PapeisCountOutputType without action
   */
  export type PapeisCountOutputTypeCountUserPapeisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPapeisWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserPapeis: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPapeis?: boolean | UserCountOutputTypeCountUserPapeisArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPapeisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPapeisWhereInput
  }


  /**
   * Count Type ContainerCountOutputType
   */

  export type ContainerCountOutputType = {
    other_Container: number
    ContainerOp: number
    Conteudo: number
  }

  export type ContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_Container?: boolean | ContainerCountOutputTypeCountOther_ContainerArgs
    ContainerOp?: boolean | ContainerCountOutputTypeCountContainerOpArgs
    Conteudo?: boolean | ContainerCountOutputTypeCountConteudoArgs
  }

  // Custom InputTypes
  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerCountOutputType
     */
    select?: ContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountOther_ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountContainerOpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpWhereInput
  }

  /**
   * ContainerCountOutputType without action
   */
  export type ContainerCountOutputTypeCountConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
  }


  /**
   * Count Type EnvioCountOutputType
   */

  export type EnvioCountOutputType = {
    Container: number
  }

  export type EnvioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | EnvioCountOutputTypeCountContainerArgs
  }

  // Custom InputTypes
  /**
   * EnvioCountOutputType without action
   */
  export type EnvioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvioCountOutputType
     */
    select?: EnvioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnvioCountOutputType without action
   */
  export type EnvioCountOutputTypeCountContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
  }


  /**
   * Count Type IdiomasCountOutputType
   */

  export type IdiomasCountOutputType = {
    Destinos: number
    ItemTraduzido: number
  }

  export type IdiomasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Destinos?: boolean | IdiomasCountOutputTypeCountDestinosArgs
    ItemTraduzido?: boolean | IdiomasCountOutputTypeCountItemTraduzidoArgs
  }

  // Custom InputTypes
  /**
   * IdiomasCountOutputType without action
   */
  export type IdiomasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdiomasCountOutputType
     */
    select?: IdiomasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdiomasCountOutputType without action
   */
  export type IdiomasCountOutputTypeCountDestinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinosWhereInput
  }

  /**
   * IdiomasCountOutputType without action
   */
  export type IdiomasCountOutputTypeCountItemTraduzidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTraduzidoWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    Conteudo: number
    ItemTraduzido: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Conteudo?: boolean | ItemCountOutputTypeCountConteudoArgs
    ItemTraduzido?: boolean | ItemCountOutputTypeCountItemTraduzidoArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItemTraduzidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTraduzidoWhereInput
  }


  /**
   * Count Type TipoContainerCountOutputType
   */

  export type TipoContainerCountOutputType = {
    Container: number
  }

  export type TipoContainerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | TipoContainerCountOutputTypeCountContainerArgs
  }

  // Custom InputTypes
  /**
   * TipoContainerCountOutputType without action
   */
  export type TipoContainerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainerCountOutputType
     */
    select?: TipoContainerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoContainerCountOutputType without action
   */
  export type TipoContainerCountOutputTypeCountContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
  }


  /**
   * Count Type DestinosCountOutputType
   */

  export type DestinosCountOutputType = {
    Envio: number
  }

  export type DestinosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Envio?: boolean | DestinosCountOutputTypeCountEnvioArgs
  }

  // Custom InputTypes
  /**
   * DestinosCountOutputType without action
   */
  export type DestinosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinosCountOutputType
     */
    select?: DestinosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinosCountOutputType without action
   */
  export type DestinosCountOutputTypeCountEnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
  }


  /**
   * Count Type ContainerOpCountOutputType
   */

  export type ContainerOpCountOutputType = {
    ContainerOpTam: number
    Conteudo: number
  }

  export type ContainerOpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOpTam?: boolean | ContainerOpCountOutputTypeCountContainerOpTamArgs
    Conteudo?: boolean | ContainerOpCountOutputTypeCountConteudoArgs
  }

  // Custom InputTypes
  /**
   * ContainerOpCountOutputType without action
   */
  export type ContainerOpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpCountOutputType
     */
    select?: ContainerOpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerOpCountOutputType without action
   */
  export type ContainerOpCountOutputTypeCountContainerOpTamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpTamWhereInput
  }

  /**
   * ContainerOpCountOutputType without action
   */
  export type ContainerOpCountOutputTypeCountConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
  }


  /**
   * Count Type ContainerOpTamCountOutputType
   */

  export type ContainerOpTamCountOutputType = {
    Conteudo: number
  }

  export type ContainerOpTamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Conteudo?: boolean | ContainerOpTamCountOutputTypeCountConteudoArgs
  }

  // Custom InputTypes
  /**
   * ContainerOpTamCountOutputType without action
   */
  export type ContainerOpTamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTamCountOutputType
     */
    select?: ContainerOpTamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContainerOpTamCountOutputType without action
   */
  export type ContainerOpTamCountOutputTypeCountConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
  }


  /**
   * Count Type OpCountOutputType
   */

  export type OpCountOutputType = {
    ContainerOp: number
    OpTamanho: number
  }

  export type OpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOp?: boolean | OpCountOutputTypeCountContainerOpArgs
    OpTamanho?: boolean | OpCountOutputTypeCountOpTamanhoArgs
  }

  // Custom InputTypes
  /**
   * OpCountOutputType without action
   */
  export type OpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpCountOutputType
     */
    select?: OpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpCountOutputType without action
   */
  export type OpCountOutputTypeCountContainerOpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpWhereInput
  }

  /**
   * OpCountOutputType without action
   */
  export type OpCountOutputTypeCountOpTamanhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpTamanhoWhereInput
  }


  /**
   * Count Type OpTamanhoCountOutputType
   */

  export type OpTamanhoCountOutputType = {
    ContainerOpTam: number
  }

  export type OpTamanhoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOpTam?: boolean | OpTamanhoCountOutputTypeCountContainerOpTamArgs
  }

  // Custom InputTypes
  /**
   * OpTamanhoCountOutputType without action
   */
  export type OpTamanhoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanhoCountOutputType
     */
    select?: OpTamanhoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpTamanhoCountOutputType without action
   */
  export type OpTamanhoCountOutputTypeCountContainerOpTamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpTamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Papeis
   */

  export type AggregatePapeis = {
    _count: PapeisCountAggregateOutputType | null
    _min: PapeisMinAggregateOutputType | null
    _max: PapeisMaxAggregateOutputType | null
  }

  export type PapeisMinAggregateOutputType = {
    idPapel: string | null
    descPapel: string | null
  }

  export type PapeisMaxAggregateOutputType = {
    idPapel: string | null
    descPapel: string | null
  }

  export type PapeisCountAggregateOutputType = {
    idPapel: number
    descPapel: number
    _all: number
  }


  export type PapeisMinAggregateInputType = {
    idPapel?: true
    descPapel?: true
  }

  export type PapeisMaxAggregateInputType = {
    idPapel?: true
    descPapel?: true
  }

  export type PapeisCountAggregateInputType = {
    idPapel?: true
    descPapel?: true
    _all?: true
  }

  export type PapeisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Papeis to aggregate.
     */
    where?: PapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Papeis to fetch.
     */
    orderBy?: PapeisOrderByWithRelationInput | PapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Papeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Papeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Papeis
    **/
    _count?: true | PapeisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PapeisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PapeisMaxAggregateInputType
  }

  export type GetPapeisAggregateType<T extends PapeisAggregateArgs> = {
        [P in keyof T & keyof AggregatePapeis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePapeis[P]>
      : GetScalarType<T[P], AggregatePapeis[P]>
  }




  export type PapeisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PapeisWhereInput
    orderBy?: PapeisOrderByWithAggregationInput | PapeisOrderByWithAggregationInput[]
    by: PapeisScalarFieldEnum[] | PapeisScalarFieldEnum
    having?: PapeisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PapeisCountAggregateInputType | true
    _min?: PapeisMinAggregateInputType
    _max?: PapeisMaxAggregateInputType
  }

  export type PapeisGroupByOutputType = {
    idPapel: string
    descPapel: string
    _count: PapeisCountAggregateOutputType | null
    _min: PapeisMinAggregateOutputType | null
    _max: PapeisMaxAggregateOutputType | null
  }

  type GetPapeisGroupByPayload<T extends PapeisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PapeisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PapeisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PapeisGroupByOutputType[P]>
            : GetScalarType<T[P], PapeisGroupByOutputType[P]>
        }
      >
    >


  export type PapeisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPapel?: boolean
    descPapel?: boolean
    UserPapeis?: boolean | Papeis$UserPapeisArgs<ExtArgs>
    _count?: boolean | PapeisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["papeis"]>



  export type PapeisSelectScalar = {
    idPapel?: boolean
    descPapel?: boolean
  }

  export type PapeisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPapel" | "descPapel", ExtArgs["result"]["papeis"]>
  export type PapeisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPapeis?: boolean | Papeis$UserPapeisArgs<ExtArgs>
    _count?: boolean | PapeisCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PapeisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Papeis"
    objects: {
      UserPapeis: Prisma.$UserPapeisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idPapel: string
      descPapel: string
    }, ExtArgs["result"]["papeis"]>
    composites: {}
  }

  type PapeisGetPayload<S extends boolean | null | undefined | PapeisDefaultArgs> = $Result.GetResult<Prisma.$PapeisPayload, S>

  type PapeisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PapeisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PapeisCountAggregateInputType | true
    }

  export interface PapeisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Papeis'], meta: { name: 'Papeis' } }
    /**
     * Find zero or one Papeis that matches the filter.
     * @param {PapeisFindUniqueArgs} args - Arguments to find a Papeis
     * @example
     * // Get one Papeis
     * const papeis = await prisma.papeis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PapeisFindUniqueArgs>(args: SelectSubset<T, PapeisFindUniqueArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Papeis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PapeisFindUniqueOrThrowArgs} args - Arguments to find a Papeis
     * @example
     * // Get one Papeis
     * const papeis = await prisma.papeis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PapeisFindUniqueOrThrowArgs>(args: SelectSubset<T, PapeisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Papeis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisFindFirstArgs} args - Arguments to find a Papeis
     * @example
     * // Get one Papeis
     * const papeis = await prisma.papeis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PapeisFindFirstArgs>(args?: SelectSubset<T, PapeisFindFirstArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Papeis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisFindFirstOrThrowArgs} args - Arguments to find a Papeis
     * @example
     * // Get one Papeis
     * const papeis = await prisma.papeis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PapeisFindFirstOrThrowArgs>(args?: SelectSubset<T, PapeisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Papeis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Papeis
     * const papeis = await prisma.papeis.findMany()
     * 
     * // Get first 10 Papeis
     * const papeis = await prisma.papeis.findMany({ take: 10 })
     * 
     * // Only select the `idPapel`
     * const papeisWithIdPapelOnly = await prisma.papeis.findMany({ select: { idPapel: true } })
     * 
     */
    findMany<T extends PapeisFindManyArgs>(args?: SelectSubset<T, PapeisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Papeis.
     * @param {PapeisCreateArgs} args - Arguments to create a Papeis.
     * @example
     * // Create one Papeis
     * const Papeis = await prisma.papeis.create({
     *   data: {
     *     // ... data to create a Papeis
     *   }
     * })
     * 
     */
    create<T extends PapeisCreateArgs>(args: SelectSubset<T, PapeisCreateArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Papeis.
     * @param {PapeisCreateManyArgs} args - Arguments to create many Papeis.
     * @example
     * // Create many Papeis
     * const papeis = await prisma.papeis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PapeisCreateManyArgs>(args?: SelectSubset<T, PapeisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Papeis.
     * @param {PapeisDeleteArgs} args - Arguments to delete one Papeis.
     * @example
     * // Delete one Papeis
     * const Papeis = await prisma.papeis.delete({
     *   where: {
     *     // ... filter to delete one Papeis
     *   }
     * })
     * 
     */
    delete<T extends PapeisDeleteArgs>(args: SelectSubset<T, PapeisDeleteArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Papeis.
     * @param {PapeisUpdateArgs} args - Arguments to update one Papeis.
     * @example
     * // Update one Papeis
     * const papeis = await prisma.papeis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PapeisUpdateArgs>(args: SelectSubset<T, PapeisUpdateArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Papeis.
     * @param {PapeisDeleteManyArgs} args - Arguments to filter Papeis to delete.
     * @example
     * // Delete a few Papeis
     * const { count } = await prisma.papeis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PapeisDeleteManyArgs>(args?: SelectSubset<T, PapeisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Papeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Papeis
     * const papeis = await prisma.papeis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PapeisUpdateManyArgs>(args: SelectSubset<T, PapeisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Papeis.
     * @param {PapeisUpsertArgs} args - Arguments to update or create a Papeis.
     * @example
     * // Update or create a Papeis
     * const papeis = await prisma.papeis.upsert({
     *   create: {
     *     // ... data to create a Papeis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Papeis we want to update
     *   }
     * })
     */
    upsert<T extends PapeisUpsertArgs>(args: SelectSubset<T, PapeisUpsertArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Papeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisCountArgs} args - Arguments to filter Papeis to count.
     * @example
     * // Count the number of Papeis
     * const count = await prisma.papeis.count({
     *   where: {
     *     // ... the filter for the Papeis we want to count
     *   }
     * })
    **/
    count<T extends PapeisCountArgs>(
      args?: Subset<T, PapeisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PapeisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Papeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PapeisAggregateArgs>(args: Subset<T, PapeisAggregateArgs>): Prisma.PrismaPromise<GetPapeisAggregateType<T>>

    /**
     * Group by Papeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PapeisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PapeisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PapeisGroupByArgs['orderBy'] }
        : { orderBy?: PapeisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PapeisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPapeisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Papeis model
   */
  readonly fields: PapeisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Papeis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PapeisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPapeis<T extends Papeis$UserPapeisArgs<ExtArgs> = {}>(args?: Subset<T, Papeis$UserPapeisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Papeis model
   */ 
  interface PapeisFieldRefs {
    readonly idPapel: FieldRef<"Papeis", 'String'>
    readonly descPapel: FieldRef<"Papeis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Papeis findUnique
   */
  export type PapeisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter, which Papeis to fetch.
     */
    where: PapeisWhereUniqueInput
  }

  /**
   * Papeis findUniqueOrThrow
   */
  export type PapeisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter, which Papeis to fetch.
     */
    where: PapeisWhereUniqueInput
  }

  /**
   * Papeis findFirst
   */
  export type PapeisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter, which Papeis to fetch.
     */
    where?: PapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Papeis to fetch.
     */
    orderBy?: PapeisOrderByWithRelationInput | PapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Papeis.
     */
    cursor?: PapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Papeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Papeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Papeis.
     */
    distinct?: PapeisScalarFieldEnum | PapeisScalarFieldEnum[]
  }

  /**
   * Papeis findFirstOrThrow
   */
  export type PapeisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter, which Papeis to fetch.
     */
    where?: PapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Papeis to fetch.
     */
    orderBy?: PapeisOrderByWithRelationInput | PapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Papeis.
     */
    cursor?: PapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Papeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Papeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Papeis.
     */
    distinct?: PapeisScalarFieldEnum | PapeisScalarFieldEnum[]
  }

  /**
   * Papeis findMany
   */
  export type PapeisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter, which Papeis to fetch.
     */
    where?: PapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Papeis to fetch.
     */
    orderBy?: PapeisOrderByWithRelationInput | PapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Papeis.
     */
    cursor?: PapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Papeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Papeis.
     */
    skip?: number
    distinct?: PapeisScalarFieldEnum | PapeisScalarFieldEnum[]
  }

  /**
   * Papeis create
   */
  export type PapeisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * The data needed to create a Papeis.
     */
    data: XOR<PapeisCreateInput, PapeisUncheckedCreateInput>
  }

  /**
   * Papeis createMany
   */
  export type PapeisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Papeis.
     */
    data: PapeisCreateManyInput | PapeisCreateManyInput[]
  }

  /**
   * Papeis update
   */
  export type PapeisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * The data needed to update a Papeis.
     */
    data: XOR<PapeisUpdateInput, PapeisUncheckedUpdateInput>
    /**
     * Choose, which Papeis to update.
     */
    where: PapeisWhereUniqueInput
  }

  /**
   * Papeis updateMany
   */
  export type PapeisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Papeis.
     */
    data: XOR<PapeisUpdateManyMutationInput, PapeisUncheckedUpdateManyInput>
    /**
     * Filter which Papeis to update
     */
    where?: PapeisWhereInput
  }

  /**
   * Papeis upsert
   */
  export type PapeisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * The filter to search for the Papeis to update in case it exists.
     */
    where: PapeisWhereUniqueInput
    /**
     * In case the Papeis found by the `where` argument doesn't exist, create a new Papeis with this data.
     */
    create: XOR<PapeisCreateInput, PapeisUncheckedCreateInput>
    /**
     * In case the Papeis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PapeisUpdateInput, PapeisUncheckedUpdateInput>
  }

  /**
   * Papeis delete
   */
  export type PapeisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
    /**
     * Filter which Papeis to delete.
     */
    where: PapeisWhereUniqueInput
  }

  /**
   * Papeis deleteMany
   */
  export type PapeisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Papeis to delete
     */
    where?: PapeisWhereInput
  }

  /**
   * Papeis.UserPapeis
   */
  export type Papeis$UserPapeisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    where?: UserPapeisWhereInput
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    cursor?: UserPapeisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPapeisScalarFieldEnum | UserPapeisScalarFieldEnum[]
  }

  /**
   * Papeis without action
   */
  export type PapeisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Papeis
     */
    select?: PapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Papeis
     */
    omit?: PapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PapeisInclude<ExtArgs> | null
  }


  /**
   * Model sysdiagrams
   */

  export type AggregateSysdiagrams = {
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  export type SysdiagramsAvgAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsSumAggregateOutputType = {
    principal_id: number | null
    diagram_id: number | null
    version: number | null
  }

  export type SysdiagramsMinAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsMaxAggregateOutputType = {
    name: string | null
    principal_id: number | null
    diagram_id: number | null
    version: number | null
    definition: Uint8Array | null
  }

  export type SysdiagramsCountAggregateOutputType = {
    name: number
    principal_id: number
    diagram_id: number
    version: number
    definition: number
    _all: number
  }


  export type SysdiagramsAvgAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsSumAggregateInputType = {
    principal_id?: true
    diagram_id?: true
    version?: true
  }

  export type SysdiagramsMinAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsMaxAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
  }

  export type SysdiagramsCountAggregateInputType = {
    name?: true
    principal_id?: true
    diagram_id?: true
    version?: true
    definition?: true
    _all?: true
  }

  export type SysdiagramsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to aggregate.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysdiagrams
    **/
    _count?: true | SysdiagramsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysdiagramsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysdiagramsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysdiagramsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type GetSysdiagramsAggregateType<T extends SysdiagramsAggregateArgs> = {
        [P in keyof T & keyof AggregateSysdiagrams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysdiagrams[P]>
      : GetScalarType<T[P], AggregateSysdiagrams[P]>
  }




  export type sysdiagramsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysdiagramsWhereInput
    orderBy?: sysdiagramsOrderByWithAggregationInput | sysdiagramsOrderByWithAggregationInput[]
    by: SysdiagramsScalarFieldEnum[] | SysdiagramsScalarFieldEnum
    having?: sysdiagramsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysdiagramsCountAggregateInputType | true
    _avg?: SysdiagramsAvgAggregateInputType
    _sum?: SysdiagramsSumAggregateInputType
    _min?: SysdiagramsMinAggregateInputType
    _max?: SysdiagramsMaxAggregateInputType
  }

  export type SysdiagramsGroupByOutputType = {
    name: string
    principal_id: number
    diagram_id: number
    version: number | null
    definition: Uint8Array | null
    _count: SysdiagramsCountAggregateOutputType | null
    _avg: SysdiagramsAvgAggregateOutputType | null
    _sum: SysdiagramsSumAggregateOutputType | null
    _min: SysdiagramsMinAggregateOutputType | null
    _max: SysdiagramsMaxAggregateOutputType | null
  }

  type GetSysdiagramsGroupByPayload<T extends sysdiagramsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysdiagramsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysdiagramsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
            : GetScalarType<T[P], SysdiagramsGroupByOutputType[P]>
        }
      >
    >


  export type sysdiagramsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }, ExtArgs["result"]["sysdiagrams"]>



  export type sysdiagramsSelectScalar = {
    name?: boolean
    principal_id?: boolean
    diagram_id?: boolean
    version?: boolean
    definition?: boolean
  }

  export type sysdiagramsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "principal_id" | "diagram_id" | "version" | "definition", ExtArgs["result"]["sysdiagrams"]>

  export type $sysdiagramsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysdiagrams"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      principal_id: number
      diagram_id: number
      version: number | null
      definition: Uint8Array | null
    }, ExtArgs["result"]["sysdiagrams"]>
    composites: {}
  }

  type sysdiagramsGetPayload<S extends boolean | null | undefined | sysdiagramsDefaultArgs> = $Result.GetResult<Prisma.$sysdiagramsPayload, S>

  type sysdiagramsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sysdiagramsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SysdiagramsCountAggregateInputType | true
    }

  export interface sysdiagramsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysdiagrams'], meta: { name: 'sysdiagrams' } }
    /**
     * Find zero or one Sysdiagrams that matches the filter.
     * @param {sysdiagramsFindUniqueArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysdiagramsFindUniqueArgs>(args: SelectSubset<T, sysdiagramsFindUniqueArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sysdiagrams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sysdiagramsFindUniqueOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysdiagramsFindUniqueOrThrowArgs>(args: SelectSubset<T, sysdiagramsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysdiagramsFindFirstArgs>(args?: SelectSubset<T, sysdiagramsFindFirstArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sysdiagrams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindFirstOrThrowArgs} args - Arguments to find a Sysdiagrams
     * @example
     * // Get one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysdiagramsFindFirstOrThrowArgs>(args?: SelectSubset<T, sysdiagramsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sysdiagrams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany()
     * 
     * // Get first 10 Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sysdiagramsWithNameOnly = await prisma.sysdiagrams.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends sysdiagramsFindManyArgs>(args?: SelectSubset<T, sysdiagramsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sysdiagrams.
     * @param {sysdiagramsCreateArgs} args - Arguments to create a Sysdiagrams.
     * @example
     * // Create one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.create({
     *   data: {
     *     // ... data to create a Sysdiagrams
     *   }
     * })
     * 
     */
    create<T extends sysdiagramsCreateArgs>(args: SelectSubset<T, sysdiagramsCreateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sysdiagrams.
     * @param {sysdiagramsCreateManyArgs} args - Arguments to create many Sysdiagrams.
     * @example
     * // Create many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysdiagramsCreateManyArgs>(args?: SelectSubset<T, sysdiagramsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sysdiagrams.
     * @param {sysdiagramsDeleteArgs} args - Arguments to delete one Sysdiagrams.
     * @example
     * // Delete one Sysdiagrams
     * const Sysdiagrams = await prisma.sysdiagrams.delete({
     *   where: {
     *     // ... filter to delete one Sysdiagrams
     *   }
     * })
     * 
     */
    delete<T extends sysdiagramsDeleteArgs>(args: SelectSubset<T, sysdiagramsDeleteArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sysdiagrams.
     * @param {sysdiagramsUpdateArgs} args - Arguments to update one Sysdiagrams.
     * @example
     * // Update one Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysdiagramsUpdateArgs>(args: SelectSubset<T, sysdiagramsUpdateArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sysdiagrams.
     * @param {sysdiagramsDeleteManyArgs} args - Arguments to filter Sysdiagrams to delete.
     * @example
     * // Delete a few Sysdiagrams
     * const { count } = await prisma.sysdiagrams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysdiagramsDeleteManyArgs>(args?: SelectSubset<T, sysdiagramsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysdiagramsUpdateManyArgs>(args: SelectSubset<T, sysdiagramsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sysdiagrams.
     * @param {sysdiagramsUpsertArgs} args - Arguments to update or create a Sysdiagrams.
     * @example
     * // Update or create a Sysdiagrams
     * const sysdiagrams = await prisma.sysdiagrams.upsert({
     *   create: {
     *     // ... data to create a Sysdiagrams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to update
     *   }
     * })
     */
    upsert<T extends sysdiagramsUpsertArgs>(args: SelectSubset<T, sysdiagramsUpsertArgs<ExtArgs>>): Prisma__sysdiagramsClient<$Result.GetResult<Prisma.$sysdiagramsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsCountArgs} args - Arguments to filter Sysdiagrams to count.
     * @example
     * // Count the number of Sysdiagrams
     * const count = await prisma.sysdiagrams.count({
     *   where: {
     *     // ... the filter for the Sysdiagrams we want to count
     *   }
     * })
    **/
    count<T extends sysdiagramsCountArgs>(
      args?: Subset<T, sysdiagramsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysdiagramsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysdiagramsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SysdiagramsAggregateArgs>(args: Subset<T, SysdiagramsAggregateArgs>): Prisma.PrismaPromise<GetSysdiagramsAggregateType<T>>

    /**
     * Group by Sysdiagrams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysdiagramsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sysdiagramsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysdiagramsGroupByArgs['orderBy'] }
        : { orderBy?: sysdiagramsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sysdiagramsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysdiagramsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysdiagrams model
   */
  readonly fields: sysdiagramsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysdiagrams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysdiagramsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sysdiagrams model
   */ 
  interface sysdiagramsFieldRefs {
    readonly name: FieldRef<"sysdiagrams", 'String'>
    readonly principal_id: FieldRef<"sysdiagrams", 'Int'>
    readonly diagram_id: FieldRef<"sysdiagrams", 'Int'>
    readonly version: FieldRef<"sysdiagrams", 'Int'>
    readonly definition: FieldRef<"sysdiagrams", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * sysdiagrams findUnique
   */
  export type sysdiagramsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findUniqueOrThrow
   */
  export type sysdiagramsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams findFirst
   */
  export type sysdiagramsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findFirstOrThrow
   */
  export type sysdiagramsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysdiagrams.
     */
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams findMany
   */
  export type sysdiagramsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter, which sysdiagrams to fetch.
     */
    where?: sysdiagramsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysdiagrams to fetch.
     */
    orderBy?: sysdiagramsOrderByWithRelationInput | sysdiagramsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysdiagrams.
     */
    cursor?: sysdiagramsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysdiagrams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysdiagrams.
     */
    skip?: number
    distinct?: SysdiagramsScalarFieldEnum | SysdiagramsScalarFieldEnum[]
  }

  /**
   * sysdiagrams create
   */
  export type sysdiagramsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to create a sysdiagrams.
     */
    data: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
  }

  /**
   * sysdiagrams createMany
   */
  export type sysdiagramsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysdiagrams.
     */
    data: sysdiagramsCreateManyInput | sysdiagramsCreateManyInput[]
  }

  /**
   * sysdiagrams update
   */
  export type sysdiagramsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The data needed to update a sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
    /**
     * Choose, which sysdiagrams to update.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams updateMany
   */
  export type sysdiagramsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysdiagrams.
     */
    data: XOR<sysdiagramsUpdateManyMutationInput, sysdiagramsUncheckedUpdateManyInput>
    /**
     * Filter which sysdiagrams to update
     */
    where?: sysdiagramsWhereInput
  }

  /**
   * sysdiagrams upsert
   */
  export type sysdiagramsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * The filter to search for the sysdiagrams to update in case it exists.
     */
    where: sysdiagramsWhereUniqueInput
    /**
     * In case the sysdiagrams found by the `where` argument doesn't exist, create a new sysdiagrams with this data.
     */
    create: XOR<sysdiagramsCreateInput, sysdiagramsUncheckedCreateInput>
    /**
     * In case the sysdiagrams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysdiagramsUpdateInput, sysdiagramsUncheckedUpdateInput>
  }

  /**
   * sysdiagrams delete
   */
  export type sysdiagramsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
    /**
     * Filter which sysdiagrams to delete.
     */
    where: sysdiagramsWhereUniqueInput
  }

  /**
   * sysdiagrams deleteMany
   */
  export type sysdiagramsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysdiagrams to delete
     */
    where?: sysdiagramsWhereInput
  }

  /**
   * sysdiagrams without action
   */
  export type sysdiagramsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysdiagrams
     */
    select?: sysdiagramsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sysdiagrams
     */
    omit?: sysdiagramsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    nomeUser: string | null
    pHashed: string | null
    hashedRefreshToken: string | null
    nome: string | null
    apelido: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    nomeUser: string | null
    pHashed: string | null
    hashedRefreshToken: string | null
    nome: string | null
    apelido: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    nomeUser: number
    pHashed: number
    hashedRefreshToken: number
    nome: number
    apelido: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    nomeUser?: true
    pHashed?: true
    hashedRefreshToken?: true
    nome?: true
    apelido?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    nomeUser?: true
    pHashed?: true
    hashedRefreshToken?: true
    nome?: true
    apelido?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    nomeUser?: true
    pHashed?: true
    hashedRefreshToken?: true
    nome?: true
    apelido?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken: string | null
    nome: string
    apelido: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    nomeUser?: boolean
    pHashed?: boolean
    hashedRefreshToken?: boolean
    nome?: boolean
    apelido?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserPapeis?: boolean | User$UserPapeisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    nomeUser?: boolean
    pHashed?: boolean
    hashedRefreshToken?: boolean
    nome?: boolean
    apelido?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"nomeUser" | "pHashed" | "hashedRefreshToken" | "nome" | "apelido" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPapeis?: boolean | User$UserPapeisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserPapeis: Prisma.$UserPapeisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      nomeUser: string
      pHashed: string
      hashedRefreshToken: string | null
      nome: string
      apelido: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `nomeUser`
     * const userWithNomeUserOnly = await prisma.user.findMany({ select: { nomeUser: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserPapeis<T extends User$UserPapeisArgs<ExtArgs> = {}>(args?: Subset<T, User$UserPapeisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly nomeUser: FieldRef<"User", 'String'>
    readonly pHashed: FieldRef<"User", 'String'>
    readonly hashedRefreshToken: FieldRef<"User", 'String'>
    readonly nome: FieldRef<"User", 'String'>
    readonly apelido: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.UserPapeis
   */
  export type User$UserPapeisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    where?: UserPapeisWhereInput
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    cursor?: UserPapeisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPapeisScalarFieldEnum | UserPapeisScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPapeis
   */

  export type AggregateUserPapeis = {
    _count: UserPapeisCountAggregateOutputType | null
    _min: UserPapeisMinAggregateOutputType | null
    _max: UserPapeisMaxAggregateOutputType | null
  }

  export type UserPapeisMinAggregateOutputType = {
    idPapel: string | null
    nomeUser: string | null
  }

  export type UserPapeisMaxAggregateOutputType = {
    idPapel: string | null
    nomeUser: string | null
  }

  export type UserPapeisCountAggregateOutputType = {
    idPapel: number
    nomeUser: number
    _all: number
  }


  export type UserPapeisMinAggregateInputType = {
    idPapel?: true
    nomeUser?: true
  }

  export type UserPapeisMaxAggregateInputType = {
    idPapel?: true
    nomeUser?: true
  }

  export type UserPapeisCountAggregateInputType = {
    idPapel?: true
    nomeUser?: true
    _all?: true
  }

  export type UserPapeisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPapeis to aggregate.
     */
    where?: UserPapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPapeis to fetch.
     */
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPapeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPapeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPapeis
    **/
    _count?: true | UserPapeisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPapeisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPapeisMaxAggregateInputType
  }

  export type GetUserPapeisAggregateType<T extends UserPapeisAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPapeis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPapeis[P]>
      : GetScalarType<T[P], AggregateUserPapeis[P]>
  }




  export type UserPapeisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPapeisWhereInput
    orderBy?: UserPapeisOrderByWithAggregationInput | UserPapeisOrderByWithAggregationInput[]
    by: UserPapeisScalarFieldEnum[] | UserPapeisScalarFieldEnum
    having?: UserPapeisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPapeisCountAggregateInputType | true
    _min?: UserPapeisMinAggregateInputType
    _max?: UserPapeisMaxAggregateInputType
  }

  export type UserPapeisGroupByOutputType = {
    idPapel: string
    nomeUser: string
    _count: UserPapeisCountAggregateOutputType | null
    _min: UserPapeisMinAggregateOutputType | null
    _max: UserPapeisMaxAggregateOutputType | null
  }

  type GetUserPapeisGroupByPayload<T extends UserPapeisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPapeisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPapeisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPapeisGroupByOutputType[P]>
            : GetScalarType<T[P], UserPapeisGroupByOutputType[P]>
        }
      >
    >


  export type UserPapeisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idPapel?: boolean
    nomeUser?: boolean
    Papeis?: boolean | PapeisDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPapeis"]>



  export type UserPapeisSelectScalar = {
    idPapel?: boolean
    nomeUser?: boolean
  }

  export type UserPapeisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idPapel" | "nomeUser", ExtArgs["result"]["userPapeis"]>
  export type UserPapeisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Papeis?: boolean | PapeisDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPapeisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPapeis"
    objects: {
      Papeis: Prisma.$PapeisPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idPapel: string
      nomeUser: string
    }, ExtArgs["result"]["userPapeis"]>
    composites: {}
  }

  type UserPapeisGetPayload<S extends boolean | null | undefined | UserPapeisDefaultArgs> = $Result.GetResult<Prisma.$UserPapeisPayload, S>

  type UserPapeisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPapeisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPapeisCountAggregateInputType | true
    }

  export interface UserPapeisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPapeis'], meta: { name: 'UserPapeis' } }
    /**
     * Find zero or one UserPapeis that matches the filter.
     * @param {UserPapeisFindUniqueArgs} args - Arguments to find a UserPapeis
     * @example
     * // Get one UserPapeis
     * const userPapeis = await prisma.userPapeis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPapeisFindUniqueArgs>(args: SelectSubset<T, UserPapeisFindUniqueArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one UserPapeis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPapeisFindUniqueOrThrowArgs} args - Arguments to find a UserPapeis
     * @example
     * // Get one UserPapeis
     * const userPapeis = await prisma.userPapeis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPapeisFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPapeisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first UserPapeis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisFindFirstArgs} args - Arguments to find a UserPapeis
     * @example
     * // Get one UserPapeis
     * const userPapeis = await prisma.userPapeis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPapeisFindFirstArgs>(args?: SelectSubset<T, UserPapeisFindFirstArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first UserPapeis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisFindFirstOrThrowArgs} args - Arguments to find a UserPapeis
     * @example
     * // Get one UserPapeis
     * const userPapeis = await prisma.userPapeis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPapeisFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPapeisFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more UserPapeis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPapeis
     * const userPapeis = await prisma.userPapeis.findMany()
     * 
     * // Get first 10 UserPapeis
     * const userPapeis = await prisma.userPapeis.findMany({ take: 10 })
     * 
     * // Only select the `idPapel`
     * const userPapeisWithIdPapelOnly = await prisma.userPapeis.findMany({ select: { idPapel: true } })
     * 
     */
    findMany<T extends UserPapeisFindManyArgs>(args?: SelectSubset<T, UserPapeisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a UserPapeis.
     * @param {UserPapeisCreateArgs} args - Arguments to create a UserPapeis.
     * @example
     * // Create one UserPapeis
     * const UserPapeis = await prisma.userPapeis.create({
     *   data: {
     *     // ... data to create a UserPapeis
     *   }
     * })
     * 
     */
    create<T extends UserPapeisCreateArgs>(args: SelectSubset<T, UserPapeisCreateArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many UserPapeis.
     * @param {UserPapeisCreateManyArgs} args - Arguments to create many UserPapeis.
     * @example
     * // Create many UserPapeis
     * const userPapeis = await prisma.userPapeis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPapeisCreateManyArgs>(args?: SelectSubset<T, UserPapeisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPapeis.
     * @param {UserPapeisDeleteArgs} args - Arguments to delete one UserPapeis.
     * @example
     * // Delete one UserPapeis
     * const UserPapeis = await prisma.userPapeis.delete({
     *   where: {
     *     // ... filter to delete one UserPapeis
     *   }
     * })
     * 
     */
    delete<T extends UserPapeisDeleteArgs>(args: SelectSubset<T, UserPapeisDeleteArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one UserPapeis.
     * @param {UserPapeisUpdateArgs} args - Arguments to update one UserPapeis.
     * @example
     * // Update one UserPapeis
     * const userPapeis = await prisma.userPapeis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPapeisUpdateArgs>(args: SelectSubset<T, UserPapeisUpdateArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more UserPapeis.
     * @param {UserPapeisDeleteManyArgs} args - Arguments to filter UserPapeis to delete.
     * @example
     * // Delete a few UserPapeis
     * const { count } = await prisma.userPapeis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPapeisDeleteManyArgs>(args?: SelectSubset<T, UserPapeisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPapeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPapeis
     * const userPapeis = await prisma.userPapeis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPapeisUpdateManyArgs>(args: SelectSubset<T, UserPapeisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPapeis.
     * @param {UserPapeisUpsertArgs} args - Arguments to update or create a UserPapeis.
     * @example
     * // Update or create a UserPapeis
     * const userPapeis = await prisma.userPapeis.upsert({
     *   create: {
     *     // ... data to create a UserPapeis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPapeis we want to update
     *   }
     * })
     */
    upsert<T extends UserPapeisUpsertArgs>(args: SelectSubset<T, UserPapeisUpsertArgs<ExtArgs>>): Prisma__UserPapeisClient<$Result.GetResult<Prisma.$UserPapeisPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of UserPapeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisCountArgs} args - Arguments to filter UserPapeis to count.
     * @example
     * // Count the number of UserPapeis
     * const count = await prisma.userPapeis.count({
     *   where: {
     *     // ... the filter for the UserPapeis we want to count
     *   }
     * })
    **/
    count<T extends UserPapeisCountArgs>(
      args?: Subset<T, UserPapeisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPapeisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPapeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPapeisAggregateArgs>(args: Subset<T, UserPapeisAggregateArgs>): Prisma.PrismaPromise<GetUserPapeisAggregateType<T>>

    /**
     * Group by UserPapeis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPapeisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPapeisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPapeisGroupByArgs['orderBy'] }
        : { orderBy?: UserPapeisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPapeisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPapeisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPapeis model
   */
  readonly fields: UserPapeisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPapeis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPapeisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Papeis<T extends PapeisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PapeisDefaultArgs<ExtArgs>>): Prisma__PapeisClient<$Result.GetResult<Prisma.$PapeisPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPapeis model
   */ 
  interface UserPapeisFieldRefs {
    readonly idPapel: FieldRef<"UserPapeis", 'String'>
    readonly nomeUser: FieldRef<"UserPapeis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPapeis findUnique
   */
  export type UserPapeisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter, which UserPapeis to fetch.
     */
    where: UserPapeisWhereUniqueInput
  }

  /**
   * UserPapeis findUniqueOrThrow
   */
  export type UserPapeisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter, which UserPapeis to fetch.
     */
    where: UserPapeisWhereUniqueInput
  }

  /**
   * UserPapeis findFirst
   */
  export type UserPapeisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter, which UserPapeis to fetch.
     */
    where?: UserPapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPapeis to fetch.
     */
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPapeis.
     */
    cursor?: UserPapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPapeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPapeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPapeis.
     */
    distinct?: UserPapeisScalarFieldEnum | UserPapeisScalarFieldEnum[]
  }

  /**
   * UserPapeis findFirstOrThrow
   */
  export type UserPapeisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter, which UserPapeis to fetch.
     */
    where?: UserPapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPapeis to fetch.
     */
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPapeis.
     */
    cursor?: UserPapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPapeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPapeis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPapeis.
     */
    distinct?: UserPapeisScalarFieldEnum | UserPapeisScalarFieldEnum[]
  }

  /**
   * UserPapeis findMany
   */
  export type UserPapeisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter, which UserPapeis to fetch.
     */
    where?: UserPapeisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPapeis to fetch.
     */
    orderBy?: UserPapeisOrderByWithRelationInput | UserPapeisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPapeis.
     */
    cursor?: UserPapeisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPapeis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPapeis.
     */
    skip?: number
    distinct?: UserPapeisScalarFieldEnum | UserPapeisScalarFieldEnum[]
  }

  /**
   * UserPapeis create
   */
  export type UserPapeisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPapeis.
     */
    data: XOR<UserPapeisCreateInput, UserPapeisUncheckedCreateInput>
  }

  /**
   * UserPapeis createMany
   */
  export type UserPapeisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPapeis.
     */
    data: UserPapeisCreateManyInput | UserPapeisCreateManyInput[]
  }

  /**
   * UserPapeis update
   */
  export type UserPapeisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPapeis.
     */
    data: XOR<UserPapeisUpdateInput, UserPapeisUncheckedUpdateInput>
    /**
     * Choose, which UserPapeis to update.
     */
    where: UserPapeisWhereUniqueInput
  }

  /**
   * UserPapeis updateMany
   */
  export type UserPapeisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPapeis.
     */
    data: XOR<UserPapeisUpdateManyMutationInput, UserPapeisUncheckedUpdateManyInput>
    /**
     * Filter which UserPapeis to update
     */
    where?: UserPapeisWhereInput
  }

  /**
   * UserPapeis upsert
   */
  export type UserPapeisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPapeis to update in case it exists.
     */
    where: UserPapeisWhereUniqueInput
    /**
     * In case the UserPapeis found by the `where` argument doesn't exist, create a new UserPapeis with this data.
     */
    create: XOR<UserPapeisCreateInput, UserPapeisUncheckedCreateInput>
    /**
     * In case the UserPapeis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPapeisUpdateInput, UserPapeisUncheckedUpdateInput>
  }

  /**
   * UserPapeis delete
   */
  export type UserPapeisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
    /**
     * Filter which UserPapeis to delete.
     */
    where: UserPapeisWhereUniqueInput
  }

  /**
   * UserPapeis deleteMany
   */
  export type UserPapeisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPapeis to delete
     */
    where?: UserPapeisWhereInput
  }

  /**
   * UserPapeis without action
   */
  export type UserPapeisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPapeis
     */
    select?: UserPapeisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPapeis
     */
    omit?: UserPapeisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPapeisInclude<ExtArgs> | null
  }


  /**
   * Model Container
   */

  export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  export type ContainerAvgAggregateOutputType = {
    idContainer: number | null
    idContainerPai: number | null
    idEnvio: number | null
    idTipoContainer: number | null
    ordem: number | null
    nContainer: number | null
    altura: number | null
  }

  export type ContainerSumAggregateOutputType = {
    idContainer: number | null
    idContainerPai: number | null
    idEnvio: number | null
    idTipoContainer: number | null
    ordem: number | null
    nContainer: number | null
    altura: number | null
  }

  export type ContainerMinAggregateOutputType = {
    idContainer: number | null
    idContainerPai: number | null
    idEnvio: number | null
    idTipoContainer: number | null
    ordem: number | null
    nContainer: number | null
    altura: number | null
  }

  export type ContainerMaxAggregateOutputType = {
    idContainer: number | null
    idContainerPai: number | null
    idEnvio: number | null
    idTipoContainer: number | null
    ordem: number | null
    nContainer: number | null
    altura: number | null
  }

  export type ContainerCountAggregateOutputType = {
    idContainer: number
    idContainerPai: number
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura: number
    _all: number
  }


  export type ContainerAvgAggregateInputType = {
    idContainer?: true
    idContainerPai?: true
    idEnvio?: true
    idTipoContainer?: true
    ordem?: true
    nContainer?: true
    altura?: true
  }

  export type ContainerSumAggregateInputType = {
    idContainer?: true
    idContainerPai?: true
    idEnvio?: true
    idTipoContainer?: true
    ordem?: true
    nContainer?: true
    altura?: true
  }

  export type ContainerMinAggregateInputType = {
    idContainer?: true
    idContainerPai?: true
    idEnvio?: true
    idTipoContainer?: true
    ordem?: true
    nContainer?: true
    altura?: true
  }

  export type ContainerMaxAggregateInputType = {
    idContainer?: true
    idContainerPai?: true
    idEnvio?: true
    idTipoContainer?: true
    ordem?: true
    nContainer?: true
    altura?: true
  }

  export type ContainerCountAggregateInputType = {
    idContainer?: true
    idContainerPai?: true
    idEnvio?: true
    idTipoContainer?: true
    ordem?: true
    nContainer?: true
    altura?: true
    _all?: true
  }

  export type ContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Container to aggregate.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Containers
    **/
    _count?: true | ContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerMaxAggregateInputType
  }

  export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainer[P]>
      : GetScalarType<T[P], AggregateContainer[P]>
  }




  export type ContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithAggregationInput | ContainerOrderByWithAggregationInput[]
    by: ContainerScalarFieldEnum[] | ContainerScalarFieldEnum
    having?: ContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerCountAggregateInputType | true
    _avg?: ContainerAvgAggregateInputType
    _sum?: ContainerSumAggregateInputType
    _min?: ContainerMinAggregateInputType
    _max?: ContainerMaxAggregateInputType
  }

  export type ContainerGroupByOutputType = {
    idContainer: number
    idContainerPai: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura: number
    _count: ContainerCountAggregateOutputType | null
    _avg: ContainerAvgAggregateOutputType | null
    _sum: ContainerSumAggregateOutputType | null
    _min: ContainerMinAggregateOutputType | null
    _max: ContainerMaxAggregateOutputType | null
  }

  type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerGroupByOutputType[P]>
        }
      >
    >


  export type ContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idContainer?: boolean
    idContainerPai?: boolean
    idEnvio?: boolean
    idTipoContainer?: boolean
    ordem?: boolean
    nContainer?: boolean
    altura?: boolean
    Container?: boolean | Container$ContainerArgs<ExtArgs>
    other_Container?: boolean | Container$other_ContainerArgs<ExtArgs>
    Envio?: boolean | EnvioDefaultArgs<ExtArgs>
    TipoContainer?: boolean | TipoContainerDefaultArgs<ExtArgs>
    ContainerOp?: boolean | Container$ContainerOpArgs<ExtArgs>
    Conteudo?: boolean | Container$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["container"]>



  export type ContainerSelectScalar = {
    idContainer?: boolean
    idContainerPai?: boolean
    idEnvio?: boolean
    idTipoContainer?: boolean
    ordem?: boolean
    nContainer?: boolean
    altura?: boolean
  }

  export type ContainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idContainer" | "idContainerPai" | "idEnvio" | "idTipoContainer" | "ordem" | "nContainer" | "altura", ExtArgs["result"]["container"]>
  export type ContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | Container$ContainerArgs<ExtArgs>
    other_Container?: boolean | Container$other_ContainerArgs<ExtArgs>
    Envio?: boolean | EnvioDefaultArgs<ExtArgs>
    TipoContainer?: boolean | TipoContainerDefaultArgs<ExtArgs>
    ContainerOp?: boolean | Container$ContainerOpArgs<ExtArgs>
    Conteudo?: boolean | Container$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Container"
    objects: {
      Container: Prisma.$ContainerPayload<ExtArgs> | null
      other_Container: Prisma.$ContainerPayload<ExtArgs>[]
      Envio: Prisma.$EnvioPayload<ExtArgs>
      TipoContainer: Prisma.$TipoContainerPayload<ExtArgs>
      ContainerOp: Prisma.$ContainerOpPayload<ExtArgs>[]
      Conteudo: Prisma.$ConteudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idContainer: number
      idContainerPai: number | null
      idEnvio: number
      idTipoContainer: number
      ordem: number
      nContainer: number
      altura: number
    }, ExtArgs["result"]["container"]>
    composites: {}
  }

  type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = $Result.GetResult<Prisma.$ContainerPayload, S>

  type ContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerCountAggregateInputType | true
    }

  export interface ContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Container'], meta: { name: 'Container' } }
    /**
     * Find zero or one Container that matches the filter.
     * @param {ContainerFindUniqueArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainerFindUniqueArgs>(args: SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Container that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainerFindUniqueOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Container that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainerFindFirstArgs>(args?: SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Container that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindFirstOrThrowArgs} args - Arguments to find a Container
     * @example
     * // Get one Container
     * const container = await prisma.container.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Containers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Containers
     * const containers = await prisma.container.findMany()
     * 
     * // Get first 10 Containers
     * const containers = await prisma.container.findMany({ take: 10 })
     * 
     * // Only select the `idContainer`
     * const containerWithIdContainerOnly = await prisma.container.findMany({ select: { idContainer: true } })
     * 
     */
    findMany<T extends ContainerFindManyArgs>(args?: SelectSubset<T, ContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Container.
     * @param {ContainerCreateArgs} args - Arguments to create a Container.
     * @example
     * // Create one Container
     * const Container = await prisma.container.create({
     *   data: {
     *     // ... data to create a Container
     *   }
     * })
     * 
     */
    create<T extends ContainerCreateArgs>(args: SelectSubset<T, ContainerCreateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Containers.
     * @param {ContainerCreateManyArgs} args - Arguments to create many Containers.
     * @example
     * // Create many Containers
     * const container = await prisma.container.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainerCreateManyArgs>(args?: SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Container.
     * @param {ContainerDeleteArgs} args - Arguments to delete one Container.
     * @example
     * // Delete one Container
     * const Container = await prisma.container.delete({
     *   where: {
     *     // ... filter to delete one Container
     *   }
     * })
     * 
     */
    delete<T extends ContainerDeleteArgs>(args: SelectSubset<T, ContainerDeleteArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Container.
     * @param {ContainerUpdateArgs} args - Arguments to update one Container.
     * @example
     * // Update one Container
     * const container = await prisma.container.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainerUpdateArgs>(args: SelectSubset<T, ContainerUpdateArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Containers.
     * @param {ContainerDeleteManyArgs} args - Arguments to filter Containers to delete.
     * @example
     * // Delete a few Containers
     * const { count } = await prisma.container.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainerDeleteManyArgs>(args?: SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Containers
     * const container = await prisma.container.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainerUpdateManyArgs>(args: SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Container.
     * @param {ContainerUpsertArgs} args - Arguments to update or create a Container.
     * @example
     * // Update or create a Container
     * const container = await prisma.container.upsert({
     *   create: {
     *     // ... data to create a Container
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Container we want to update
     *   }
     * })
     */
    upsert<T extends ContainerUpsertArgs>(args: SelectSubset<T, ContainerUpsertArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Containers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerCountArgs} args - Arguments to filter Containers to count.
     * @example
     * // Count the number of Containers
     * const count = await prisma.container.count({
     *   where: {
     *     // ... the filter for the Containers we want to count
     *   }
     * })
    **/
    count<T extends ContainerCountArgs>(
      args?: Subset<T, ContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerAggregateArgs>(args: Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>

    /**
     * Group by Container.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerGroupByArgs['orderBy'] }
        : { orderBy?: ContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Container model
   */
  readonly fields: ContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Container.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Container<T extends Container$ContainerArgs<ExtArgs> = {}>(args?: Subset<T, Container$ContainerArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    other_Container<T extends Container$other_ContainerArgs<ExtArgs> = {}>(args?: Subset<T, Container$other_ContainerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Envio<T extends EnvioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnvioDefaultArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    TipoContainer<T extends TipoContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoContainerDefaultArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ContainerOp<T extends Container$ContainerOpArgs<ExtArgs> = {}>(args?: Subset<T, Container$ContainerOpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Conteudo<T extends Container$ConteudoArgs<ExtArgs> = {}>(args?: Subset<T, Container$ConteudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Container model
   */ 
  interface ContainerFieldRefs {
    readonly idContainer: FieldRef<"Container", 'Int'>
    readonly idContainerPai: FieldRef<"Container", 'Int'>
    readonly idEnvio: FieldRef<"Container", 'Int'>
    readonly idTipoContainer: FieldRef<"Container", 'Int'>
    readonly ordem: FieldRef<"Container", 'Int'>
    readonly nContainer: FieldRef<"Container", 'Int'>
    readonly altura: FieldRef<"Container", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Container findUnique
   */
  export type ContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findUniqueOrThrow
   */
  export type ContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container findFirst
   */
  export type ContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findFirstOrThrow
   */
  export type ContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Container to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Containers.
     */
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container findMany
   */
  export type ContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter, which Containers to fetch.
     */
    where?: ContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Containers to fetch.
     */
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Containers.
     */
    cursor?: ContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Containers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Containers.
     */
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container create
   */
  export type ContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a Container.
     */
    data: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
  }

  /**
   * Container createMany
   */
  export type ContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Containers.
     */
    data: ContainerCreateManyInput | ContainerCreateManyInput[]
  }

  /**
   * Container update
   */
  export type ContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a Container.
     */
    data: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
    /**
     * Choose, which Container to update.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container updateMany
   */
  export type ContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Containers.
     */
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyInput>
    /**
     * Filter which Containers to update
     */
    where?: ContainerWhereInput
  }

  /**
   * Container upsert
   */
  export type ContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the Container to update in case it exists.
     */
    where: ContainerWhereUniqueInput
    /**
     * In case the Container found by the `where` argument doesn't exist, create a new Container with this data.
     */
    create: XOR<ContainerCreateInput, ContainerUncheckedCreateInput>
    /**
     * In case the Container was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerUpdateInput, ContainerUncheckedUpdateInput>
  }

  /**
   * Container delete
   */
  export type ContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    /**
     * Filter which Container to delete.
     */
    where: ContainerWhereUniqueInput
  }

  /**
   * Container deleteMany
   */
  export type ContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Containers to delete
     */
    where?: ContainerWhereInput
  }

  /**
   * Container.Container
   */
  export type Container$ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
  }

  /**
   * Container.other_Container
   */
  export type Container$other_ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    cursor?: ContainerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Container.ContainerOp
   */
  export type Container$ContainerOpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    where?: ContainerOpWhereInput
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    cursor?: ContainerOpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerOpScalarFieldEnum | ContainerOpScalarFieldEnum[]
  }

  /**
   * Container.Conteudo
   */
  export type Container$ConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    cursor?: ConteudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Container without action
   */
  export type ContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
  }


  /**
   * Model Conteudo
   */

  export type AggregateConteudo = {
    _count: ConteudoCountAggregateOutputType | null
    _avg: ConteudoAvgAggregateOutputType | null
    _sum: ConteudoSumAggregateOutputType | null
    _min: ConteudoMinAggregateOutputType | null
    _max: ConteudoMaxAggregateOutputType | null
  }

  export type ConteudoAvgAggregateOutputType = {
    idConteudo: number | null
    idContainer: number | null
    idItem: number | null
    op: number | null
    qtt: number | null
    peso: number | null
  }

  export type ConteudoSumAggregateOutputType = {
    idConteudo: number | null
    idContainer: number | null
    idItem: number | null
    op: number | null
    qtt: number | null
    peso: number | null
  }

  export type ConteudoMinAggregateOutputType = {
    idConteudo: number | null
    idContainer: number | null
    idItem: number | null
    op: number | null
    tam: string | null
    qtt: number | null
    peso: number | null
  }

  export type ConteudoMaxAggregateOutputType = {
    idConteudo: number | null
    idContainer: number | null
    idItem: number | null
    op: number | null
    tam: string | null
    qtt: number | null
    peso: number | null
  }

  export type ConteudoCountAggregateOutputType = {
    idConteudo: number
    idContainer: number
    idItem: number
    op: number
    tam: number
    qtt: number
    peso: number
    _all: number
  }


  export type ConteudoAvgAggregateInputType = {
    idConteudo?: true
    idContainer?: true
    idItem?: true
    op?: true
    qtt?: true
    peso?: true
  }

  export type ConteudoSumAggregateInputType = {
    idConteudo?: true
    idContainer?: true
    idItem?: true
    op?: true
    qtt?: true
    peso?: true
  }

  export type ConteudoMinAggregateInputType = {
    idConteudo?: true
    idContainer?: true
    idItem?: true
    op?: true
    tam?: true
    qtt?: true
    peso?: true
  }

  export type ConteudoMaxAggregateInputType = {
    idConteudo?: true
    idContainer?: true
    idItem?: true
    op?: true
    tam?: true
    qtt?: true
    peso?: true
  }

  export type ConteudoCountAggregateInputType = {
    idConteudo?: true
    idContainer?: true
    idItem?: true
    op?: true
    tam?: true
    qtt?: true
    peso?: true
    _all?: true
  }

  export type ConteudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conteudo to aggregate.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conteudos
    **/
    _count?: true | ConteudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConteudoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConteudoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConteudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConteudoMaxAggregateInputType
  }

  export type GetConteudoAggregateType<T extends ConteudoAggregateArgs> = {
        [P in keyof T & keyof AggregateConteudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConteudo[P]>
      : GetScalarType<T[P], AggregateConteudo[P]>
  }




  export type ConteudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithAggregationInput | ConteudoOrderByWithAggregationInput[]
    by: ConteudoScalarFieldEnum[] | ConteudoScalarFieldEnum
    having?: ConteudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConteudoCountAggregateInputType | true
    _avg?: ConteudoAvgAggregateInputType
    _sum?: ConteudoSumAggregateInputType
    _min?: ConteudoMinAggregateInputType
    _max?: ConteudoMaxAggregateInputType
  }

  export type ConteudoGroupByOutputType = {
    idConteudo: number
    idContainer: number
    idItem: number
    op: number
    tam: string
    qtt: number
    peso: number
    _count: ConteudoCountAggregateOutputType | null
    _avg: ConteudoAvgAggregateOutputType | null
    _sum: ConteudoSumAggregateOutputType | null
    _min: ConteudoMinAggregateOutputType | null
    _max: ConteudoMaxAggregateOutputType | null
  }

  type GetConteudoGroupByPayload<T extends ConteudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConteudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConteudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConteudoGroupByOutputType[P]>
            : GetScalarType<T[P], ConteudoGroupByOutputType[P]>
        }
      >
    >


  export type ConteudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idConteudo?: boolean
    idContainer?: boolean
    idItem?: boolean
    op?: boolean
    tam?: boolean
    qtt?: boolean
    peso?: boolean
    Container?: boolean | ContainerDefaultArgs<ExtArgs>
    ContainerOp?: boolean | ContainerOpDefaultArgs<ExtArgs>
    ContainerOpTam?: boolean | ContainerOpTamDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conteudo"]>



  export type ConteudoSelectScalar = {
    idConteudo?: boolean
    idContainer?: boolean
    idItem?: boolean
    op?: boolean
    tam?: boolean
    qtt?: boolean
    peso?: boolean
  }

  export type ConteudoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idConteudo" | "idContainer" | "idItem" | "op" | "tam" | "qtt" | "peso", ExtArgs["result"]["conteudo"]>
  export type ConteudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | ContainerDefaultArgs<ExtArgs>
    ContainerOp?: boolean | ContainerOpDefaultArgs<ExtArgs>
    ContainerOpTam?: boolean | ContainerOpTamDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ConteudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conteudo"
    objects: {
      Container: Prisma.$ContainerPayload<ExtArgs>
      ContainerOp: Prisma.$ContainerOpPayload<ExtArgs>
      ContainerOpTam: Prisma.$ContainerOpTamPayload<ExtArgs>
      Item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idConteudo: number
      idContainer: number
      idItem: number
      op: number
      tam: string
      qtt: number
      peso: number
    }, ExtArgs["result"]["conteudo"]>
    composites: {}
  }

  type ConteudoGetPayload<S extends boolean | null | undefined | ConteudoDefaultArgs> = $Result.GetResult<Prisma.$ConteudoPayload, S>

  type ConteudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConteudoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConteudoCountAggregateInputType | true
    }

  export interface ConteudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conteudo'], meta: { name: 'Conteudo' } }
    /**
     * Find zero or one Conteudo that matches the filter.
     * @param {ConteudoFindUniqueArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConteudoFindUniqueArgs>(args: SelectSubset<T, ConteudoFindUniqueArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Conteudo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConteudoFindUniqueOrThrowArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConteudoFindUniqueOrThrowArgs>(args: SelectSubset<T, ConteudoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Conteudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindFirstArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConteudoFindFirstArgs>(args?: SelectSubset<T, ConteudoFindFirstArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Conteudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindFirstOrThrowArgs} args - Arguments to find a Conteudo
     * @example
     * // Get one Conteudo
     * const conteudo = await prisma.conteudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConteudoFindFirstOrThrowArgs>(args?: SelectSubset<T, ConteudoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Conteudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conteudos
     * const conteudos = await prisma.conteudo.findMany()
     * 
     * // Get first 10 Conteudos
     * const conteudos = await prisma.conteudo.findMany({ take: 10 })
     * 
     * // Only select the `idConteudo`
     * const conteudoWithIdConteudoOnly = await prisma.conteudo.findMany({ select: { idConteudo: true } })
     * 
     */
    findMany<T extends ConteudoFindManyArgs>(args?: SelectSubset<T, ConteudoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Conteudo.
     * @param {ConteudoCreateArgs} args - Arguments to create a Conteudo.
     * @example
     * // Create one Conteudo
     * const Conteudo = await prisma.conteudo.create({
     *   data: {
     *     // ... data to create a Conteudo
     *   }
     * })
     * 
     */
    create<T extends ConteudoCreateArgs>(args: SelectSubset<T, ConteudoCreateArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Conteudos.
     * @param {ConteudoCreateManyArgs} args - Arguments to create many Conteudos.
     * @example
     * // Create many Conteudos
     * const conteudo = await prisma.conteudo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConteudoCreateManyArgs>(args?: SelectSubset<T, ConteudoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conteudo.
     * @param {ConteudoDeleteArgs} args - Arguments to delete one Conteudo.
     * @example
     * // Delete one Conteudo
     * const Conteudo = await prisma.conteudo.delete({
     *   where: {
     *     // ... filter to delete one Conteudo
     *   }
     * })
     * 
     */
    delete<T extends ConteudoDeleteArgs>(args: SelectSubset<T, ConteudoDeleteArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Conteudo.
     * @param {ConteudoUpdateArgs} args - Arguments to update one Conteudo.
     * @example
     * // Update one Conteudo
     * const conteudo = await prisma.conteudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConteudoUpdateArgs>(args: SelectSubset<T, ConteudoUpdateArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Conteudos.
     * @param {ConteudoDeleteManyArgs} args - Arguments to filter Conteudos to delete.
     * @example
     * // Delete a few Conteudos
     * const { count } = await prisma.conteudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConteudoDeleteManyArgs>(args?: SelectSubset<T, ConteudoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conteudos
     * const conteudo = await prisma.conteudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConteudoUpdateManyArgs>(args: SelectSubset<T, ConteudoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conteudo.
     * @param {ConteudoUpsertArgs} args - Arguments to update or create a Conteudo.
     * @example
     * // Update or create a Conteudo
     * const conteudo = await prisma.conteudo.upsert({
     *   create: {
     *     // ... data to create a Conteudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conteudo we want to update
     *   }
     * })
     */
    upsert<T extends ConteudoUpsertArgs>(args: SelectSubset<T, ConteudoUpsertArgs<ExtArgs>>): Prisma__ConteudoClient<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Conteudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoCountArgs} args - Arguments to filter Conteudos to count.
     * @example
     * // Count the number of Conteudos
     * const count = await prisma.conteudo.count({
     *   where: {
     *     // ... the filter for the Conteudos we want to count
     *   }
     * })
    **/
    count<T extends ConteudoCountArgs>(
      args?: Subset<T, ConteudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConteudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConteudoAggregateArgs>(args: Subset<T, ConteudoAggregateArgs>): Prisma.PrismaPromise<GetConteudoAggregateType<T>>

    /**
     * Group by Conteudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConteudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConteudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConteudoGroupByArgs['orderBy'] }
        : { orderBy?: ConteudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConteudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConteudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conteudo model
   */
  readonly fields: ConteudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conteudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConteudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Container<T extends ContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerDefaultArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ContainerOp<T extends ContainerOpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOpDefaultArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ContainerOpTam<T extends ContainerOpTamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOpTamDefaultArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conteudo model
   */ 
  interface ConteudoFieldRefs {
    readonly idConteudo: FieldRef<"Conteudo", 'Int'>
    readonly idContainer: FieldRef<"Conteudo", 'Int'>
    readonly idItem: FieldRef<"Conteudo", 'Int'>
    readonly op: FieldRef<"Conteudo", 'Int'>
    readonly tam: FieldRef<"Conteudo", 'String'>
    readonly qtt: FieldRef<"Conteudo", 'Float'>
    readonly peso: FieldRef<"Conteudo", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Conteudo findUnique
   */
  export type ConteudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo findUniqueOrThrow
   */
  export type ConteudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo findFirst
   */
  export type ConteudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conteudos.
     */
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo findFirstOrThrow
   */
  export type ConteudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudo to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conteudos.
     */
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo findMany
   */
  export type ConteudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter, which Conteudos to fetch.
     */
    where?: ConteudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conteudos to fetch.
     */
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conteudos.
     */
    cursor?: ConteudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conteudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conteudos.
     */
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Conteudo create
   */
  export type ConteudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The data needed to create a Conteudo.
     */
    data: XOR<ConteudoCreateInput, ConteudoUncheckedCreateInput>
  }

  /**
   * Conteudo createMany
   */
  export type ConteudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conteudos.
     */
    data: ConteudoCreateManyInput | ConteudoCreateManyInput[]
  }

  /**
   * Conteudo update
   */
  export type ConteudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The data needed to update a Conteudo.
     */
    data: XOR<ConteudoUpdateInput, ConteudoUncheckedUpdateInput>
    /**
     * Choose, which Conteudo to update.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo updateMany
   */
  export type ConteudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conteudos.
     */
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyInput>
    /**
     * Filter which Conteudos to update
     */
    where?: ConteudoWhereInput
  }

  /**
   * Conteudo upsert
   */
  export type ConteudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * The filter to search for the Conteudo to update in case it exists.
     */
    where: ConteudoWhereUniqueInput
    /**
     * In case the Conteudo found by the `where` argument doesn't exist, create a new Conteudo with this data.
     */
    create: XOR<ConteudoCreateInput, ConteudoUncheckedCreateInput>
    /**
     * In case the Conteudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConteudoUpdateInput, ConteudoUncheckedUpdateInput>
  }

  /**
   * Conteudo delete
   */
  export type ConteudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    /**
     * Filter which Conteudo to delete.
     */
    where: ConteudoWhereUniqueInput
  }

  /**
   * Conteudo deleteMany
   */
  export type ConteudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conteudos to delete
     */
    where?: ConteudoWhereInput
  }

  /**
   * Conteudo without action
   */
  export type ConteudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
  }


  /**
   * Model Envio
   */

  export type AggregateEnvio = {
    _count: EnvioCountAggregateOutputType | null
    _avg: EnvioAvgAggregateOutputType | null
    _sum: EnvioSumAggregateOutputType | null
    _min: EnvioMinAggregateOutputType | null
    _max: EnvioMaxAggregateOutputType | null
  }

  export type EnvioAvgAggregateOutputType = {
    idEnvio: number | null
    idDestino: number | null
  }

  export type EnvioSumAggregateOutputType = {
    idEnvio: number | null
    idDestino: number | null
  }

  export type EnvioMinAggregateOutputType = {
    idEnvio: number | null
    nomeEnvio: string | null
    idDestino: number | null
    fechado: boolean | null
    createdAt: Date | null
    endDate: Date | null
    obs: string | null
    nomeUser: string | null
  }

  export type EnvioMaxAggregateOutputType = {
    idEnvio: number | null
    nomeEnvio: string | null
    idDestino: number | null
    fechado: boolean | null
    createdAt: Date | null
    endDate: Date | null
    obs: string | null
    nomeUser: string | null
  }

  export type EnvioCountAggregateOutputType = {
    idEnvio: number
    nomeEnvio: number
    idDestino: number
    fechado: number
    createdAt: number
    endDate: number
    obs: number
    nomeUser: number
    _all: number
  }


  export type EnvioAvgAggregateInputType = {
    idEnvio?: true
    idDestino?: true
  }

  export type EnvioSumAggregateInputType = {
    idEnvio?: true
    idDestino?: true
  }

  export type EnvioMinAggregateInputType = {
    idEnvio?: true
    nomeEnvio?: true
    idDestino?: true
    fechado?: true
    createdAt?: true
    endDate?: true
    obs?: true
    nomeUser?: true
  }

  export type EnvioMaxAggregateInputType = {
    idEnvio?: true
    nomeEnvio?: true
    idDestino?: true
    fechado?: true
    createdAt?: true
    endDate?: true
    obs?: true
    nomeUser?: true
  }

  export type EnvioCountAggregateInputType = {
    idEnvio?: true
    nomeEnvio?: true
    idDestino?: true
    fechado?: true
    createdAt?: true
    endDate?: true
    obs?: true
    nomeUser?: true
    _all?: true
  }

  export type EnvioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Envio to aggregate.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Envios
    **/
    _count?: true | EnvioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnvioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnvioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvioMaxAggregateInputType
  }

  export type GetEnvioAggregateType<T extends EnvioAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvio[P]>
      : GetScalarType<T[P], AggregateEnvio[P]>
  }




  export type EnvioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithAggregationInput | EnvioOrderByWithAggregationInput[]
    by: EnvioScalarFieldEnum[] | EnvioScalarFieldEnum
    having?: EnvioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvioCountAggregateInputType | true
    _avg?: EnvioAvgAggregateInputType
    _sum?: EnvioSumAggregateInputType
    _min?: EnvioMinAggregateInputType
    _max?: EnvioMaxAggregateInputType
  }

  export type EnvioGroupByOutputType = {
    idEnvio: number
    nomeEnvio: string
    idDestino: number
    fechado: boolean
    createdAt: Date
    endDate: Date | null
    obs: string | null
    nomeUser: string
    _count: EnvioCountAggregateOutputType | null
    _avg: EnvioAvgAggregateOutputType | null
    _sum: EnvioSumAggregateOutputType | null
    _min: EnvioMinAggregateOutputType | null
    _max: EnvioMaxAggregateOutputType | null
  }

  type GetEnvioGroupByPayload<T extends EnvioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvioGroupByOutputType[P]>
            : GetScalarType<T[P], EnvioGroupByOutputType[P]>
        }
      >
    >


  export type EnvioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEnvio?: boolean
    nomeEnvio?: boolean
    idDestino?: boolean
    fechado?: boolean
    createdAt?: boolean
    endDate?: boolean
    obs?: boolean
    nomeUser?: boolean
    Container?: boolean | Envio$ContainerArgs<ExtArgs>
    Destinos?: boolean | DestinosDefaultArgs<ExtArgs>
    _count?: boolean | EnvioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["envio"]>



  export type EnvioSelectScalar = {
    idEnvio?: boolean
    nomeEnvio?: boolean
    idDestino?: boolean
    fechado?: boolean
    createdAt?: boolean
    endDate?: boolean
    obs?: boolean
    nomeUser?: boolean
  }

  export type EnvioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEnvio" | "nomeEnvio" | "idDestino" | "fechado" | "createdAt" | "endDate" | "obs" | "nomeUser", ExtArgs["result"]["envio"]>
  export type EnvioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | Envio$ContainerArgs<ExtArgs>
    Destinos?: boolean | DestinosDefaultArgs<ExtArgs>
    _count?: boolean | EnvioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EnvioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Envio"
    objects: {
      Container: Prisma.$ContainerPayload<ExtArgs>[]
      Destinos: Prisma.$DestinosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idEnvio: number
      nomeEnvio: string
      idDestino: number
      fechado: boolean
      createdAt: Date
      endDate: Date | null
      obs: string | null
      nomeUser: string
    }, ExtArgs["result"]["envio"]>
    composites: {}
  }

  type EnvioGetPayload<S extends boolean | null | undefined | EnvioDefaultArgs> = $Result.GetResult<Prisma.$EnvioPayload, S>

  type EnvioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvioCountAggregateInputType | true
    }

  export interface EnvioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Envio'], meta: { name: 'Envio' } }
    /**
     * Find zero or one Envio that matches the filter.
     * @param {EnvioFindUniqueArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvioFindUniqueArgs>(args: SelectSubset<T, EnvioFindUniqueArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Envio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvioFindUniqueOrThrowArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvioFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Envio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindFirstArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvioFindFirstArgs>(args?: SelectSubset<T, EnvioFindFirstArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Envio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindFirstOrThrowArgs} args - Arguments to find a Envio
     * @example
     * // Get one Envio
     * const envio = await prisma.envio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvioFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Envios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Envios
     * const envios = await prisma.envio.findMany()
     * 
     * // Get first 10 Envios
     * const envios = await prisma.envio.findMany({ take: 10 })
     * 
     * // Only select the `idEnvio`
     * const envioWithIdEnvioOnly = await prisma.envio.findMany({ select: { idEnvio: true } })
     * 
     */
    findMany<T extends EnvioFindManyArgs>(args?: SelectSubset<T, EnvioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Envio.
     * @param {EnvioCreateArgs} args - Arguments to create a Envio.
     * @example
     * // Create one Envio
     * const Envio = await prisma.envio.create({
     *   data: {
     *     // ... data to create a Envio
     *   }
     * })
     * 
     */
    create<T extends EnvioCreateArgs>(args: SelectSubset<T, EnvioCreateArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Envios.
     * @param {EnvioCreateManyArgs} args - Arguments to create many Envios.
     * @example
     * // Create many Envios
     * const envio = await prisma.envio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvioCreateManyArgs>(args?: SelectSubset<T, EnvioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Envio.
     * @param {EnvioDeleteArgs} args - Arguments to delete one Envio.
     * @example
     * // Delete one Envio
     * const Envio = await prisma.envio.delete({
     *   where: {
     *     // ... filter to delete one Envio
     *   }
     * })
     * 
     */
    delete<T extends EnvioDeleteArgs>(args: SelectSubset<T, EnvioDeleteArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Envio.
     * @param {EnvioUpdateArgs} args - Arguments to update one Envio.
     * @example
     * // Update one Envio
     * const envio = await prisma.envio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvioUpdateArgs>(args: SelectSubset<T, EnvioUpdateArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Envios.
     * @param {EnvioDeleteManyArgs} args - Arguments to filter Envios to delete.
     * @example
     * // Delete a few Envios
     * const { count } = await prisma.envio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvioDeleteManyArgs>(args?: SelectSubset<T, EnvioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Envios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Envios
     * const envio = await prisma.envio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvioUpdateManyArgs>(args: SelectSubset<T, EnvioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Envio.
     * @param {EnvioUpsertArgs} args - Arguments to update or create a Envio.
     * @example
     * // Update or create a Envio
     * const envio = await prisma.envio.upsert({
     *   create: {
     *     // ... data to create a Envio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Envio we want to update
     *   }
     * })
     */
    upsert<T extends EnvioUpsertArgs>(args: SelectSubset<T, EnvioUpsertArgs<ExtArgs>>): Prisma__EnvioClient<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Envios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioCountArgs} args - Arguments to filter Envios to count.
     * @example
     * // Count the number of Envios
     * const count = await prisma.envio.count({
     *   where: {
     *     // ... the filter for the Envios we want to count
     *   }
     * })
    **/
    count<T extends EnvioCountArgs>(
      args?: Subset<T, EnvioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Envio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvioAggregateArgs>(args: Subset<T, EnvioAggregateArgs>): Prisma.PrismaPromise<GetEnvioAggregateType<T>>

    /**
     * Group by Envio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvioGroupByArgs['orderBy'] }
        : { orderBy?: EnvioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Envio model
   */
  readonly fields: EnvioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Envio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Container<T extends Envio$ContainerArgs<ExtArgs> = {}>(args?: Subset<T, Envio$ContainerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Destinos<T extends DestinosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinosDefaultArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Envio model
   */ 
  interface EnvioFieldRefs {
    readonly idEnvio: FieldRef<"Envio", 'Int'>
    readonly nomeEnvio: FieldRef<"Envio", 'String'>
    readonly idDestino: FieldRef<"Envio", 'Int'>
    readonly fechado: FieldRef<"Envio", 'Boolean'>
    readonly createdAt: FieldRef<"Envio", 'DateTime'>
    readonly endDate: FieldRef<"Envio", 'DateTime'>
    readonly obs: FieldRef<"Envio", 'String'>
    readonly nomeUser: FieldRef<"Envio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Envio findUnique
   */
  export type EnvioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio findUniqueOrThrow
   */
  export type EnvioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio findFirst
   */
  export type EnvioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Envios.
     */
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio findFirstOrThrow
   */
  export type EnvioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envio to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Envios.
     */
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio findMany
   */
  export type EnvioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter, which Envios to fetch.
     */
    where?: EnvioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Envios to fetch.
     */
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Envios.
     */
    cursor?: EnvioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Envios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Envios.
     */
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Envio create
   */
  export type EnvioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The data needed to create a Envio.
     */
    data: XOR<EnvioCreateInput, EnvioUncheckedCreateInput>
  }

  /**
   * Envio createMany
   */
  export type EnvioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Envios.
     */
    data: EnvioCreateManyInput | EnvioCreateManyInput[]
  }

  /**
   * Envio update
   */
  export type EnvioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The data needed to update a Envio.
     */
    data: XOR<EnvioUpdateInput, EnvioUncheckedUpdateInput>
    /**
     * Choose, which Envio to update.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio updateMany
   */
  export type EnvioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Envios.
     */
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyInput>
    /**
     * Filter which Envios to update
     */
    where?: EnvioWhereInput
  }

  /**
   * Envio upsert
   */
  export type EnvioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * The filter to search for the Envio to update in case it exists.
     */
    where: EnvioWhereUniqueInput
    /**
     * In case the Envio found by the `where` argument doesn't exist, create a new Envio with this data.
     */
    create: XOR<EnvioCreateInput, EnvioUncheckedCreateInput>
    /**
     * In case the Envio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvioUpdateInput, EnvioUncheckedUpdateInput>
  }

  /**
   * Envio delete
   */
  export type EnvioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    /**
     * Filter which Envio to delete.
     */
    where: EnvioWhereUniqueInput
  }

  /**
   * Envio deleteMany
   */
  export type EnvioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Envios to delete
     */
    where?: EnvioWhereInput
  }

  /**
   * Envio.Container
   */
  export type Envio$ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    cursor?: ContainerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * Envio without action
   */
  export type EnvioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
  }


  /**
   * Model Idiomas
   */

  export type AggregateIdiomas = {
    _count: IdiomasCountAggregateOutputType | null
    _avg: IdiomasAvgAggregateOutputType | null
    _sum: IdiomasSumAggregateOutputType | null
    _min: IdiomasMinAggregateOutputType | null
    _max: IdiomasMaxAggregateOutputType | null
  }

  export type IdiomasAvgAggregateOutputType = {
    idIdioma: number | null
  }

  export type IdiomasSumAggregateOutputType = {
    idIdioma: number | null
  }

  export type IdiomasMinAggregateOutputType = {
    idIdioma: number | null
    nomeIdioma: string | null
  }

  export type IdiomasMaxAggregateOutputType = {
    idIdioma: number | null
    nomeIdioma: string | null
  }

  export type IdiomasCountAggregateOutputType = {
    idIdioma: number
    nomeIdioma: number
    _all: number
  }


  export type IdiomasAvgAggregateInputType = {
    idIdioma?: true
  }

  export type IdiomasSumAggregateInputType = {
    idIdioma?: true
  }

  export type IdiomasMinAggregateInputType = {
    idIdioma?: true
    nomeIdioma?: true
  }

  export type IdiomasMaxAggregateInputType = {
    idIdioma?: true
    nomeIdioma?: true
  }

  export type IdiomasCountAggregateInputType = {
    idIdioma?: true
    nomeIdioma?: true
    _all?: true
  }

  export type IdiomasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idiomas to aggregate.
     */
    where?: IdiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomasOrderByWithRelationInput | IdiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Idiomas
    **/
    _count?: true | IdiomasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdiomasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdiomasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdiomasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdiomasMaxAggregateInputType
  }

  export type GetIdiomasAggregateType<T extends IdiomasAggregateArgs> = {
        [P in keyof T & keyof AggregateIdiomas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdiomas[P]>
      : GetScalarType<T[P], AggregateIdiomas[P]>
  }




  export type IdiomasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdiomasWhereInput
    orderBy?: IdiomasOrderByWithAggregationInput | IdiomasOrderByWithAggregationInput[]
    by: IdiomasScalarFieldEnum[] | IdiomasScalarFieldEnum
    having?: IdiomasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdiomasCountAggregateInputType | true
    _avg?: IdiomasAvgAggregateInputType
    _sum?: IdiomasSumAggregateInputType
    _min?: IdiomasMinAggregateInputType
    _max?: IdiomasMaxAggregateInputType
  }

  export type IdiomasGroupByOutputType = {
    idIdioma: number
    nomeIdioma: string
    _count: IdiomasCountAggregateOutputType | null
    _avg: IdiomasAvgAggregateOutputType | null
    _sum: IdiomasSumAggregateOutputType | null
    _min: IdiomasMinAggregateOutputType | null
    _max: IdiomasMaxAggregateOutputType | null
  }

  type GetIdiomasGroupByPayload<T extends IdiomasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdiomasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdiomasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdiomasGroupByOutputType[P]>
            : GetScalarType<T[P], IdiomasGroupByOutputType[P]>
        }
      >
    >


  export type IdiomasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idIdioma?: boolean
    nomeIdioma?: boolean
    Destinos?: boolean | Idiomas$DestinosArgs<ExtArgs>
    ItemTraduzido?: boolean | Idiomas$ItemTraduzidoArgs<ExtArgs>
    _count?: boolean | IdiomasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idiomas"]>



  export type IdiomasSelectScalar = {
    idIdioma?: boolean
    nomeIdioma?: boolean
  }

  export type IdiomasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idIdioma" | "nomeIdioma", ExtArgs["result"]["idiomas"]>
  export type IdiomasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Destinos?: boolean | Idiomas$DestinosArgs<ExtArgs>
    ItemTraduzido?: boolean | Idiomas$ItemTraduzidoArgs<ExtArgs>
    _count?: boolean | IdiomasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IdiomasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Idiomas"
    objects: {
      Destinos: Prisma.$DestinosPayload<ExtArgs>[]
      ItemTraduzido: Prisma.$ItemTraduzidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idIdioma: number
      nomeIdioma: string
    }, ExtArgs["result"]["idiomas"]>
    composites: {}
  }

  type IdiomasGetPayload<S extends boolean | null | undefined | IdiomasDefaultArgs> = $Result.GetResult<Prisma.$IdiomasPayload, S>

  type IdiomasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdiomasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdiomasCountAggregateInputType | true
    }

  export interface IdiomasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Idiomas'], meta: { name: 'Idiomas' } }
    /**
     * Find zero or one Idiomas that matches the filter.
     * @param {IdiomasFindUniqueArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdiomasFindUniqueArgs>(args: SelectSubset<T, IdiomasFindUniqueArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Idiomas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdiomasFindUniqueOrThrowArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdiomasFindUniqueOrThrowArgs>(args: SelectSubset<T, IdiomasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasFindFirstArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdiomasFindFirstArgs>(args?: SelectSubset<T, IdiomasFindFirstArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Idiomas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasFindFirstOrThrowArgs} args - Arguments to find a Idiomas
     * @example
     * // Get one Idiomas
     * const idiomas = await prisma.idiomas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdiomasFindFirstOrThrowArgs>(args?: SelectSubset<T, IdiomasFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Idiomas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Idiomas
     * const idiomas = await prisma.idiomas.findMany()
     * 
     * // Get first 10 Idiomas
     * const idiomas = await prisma.idiomas.findMany({ take: 10 })
     * 
     * // Only select the `idIdioma`
     * const idiomasWithIdIdiomaOnly = await prisma.idiomas.findMany({ select: { idIdioma: true } })
     * 
     */
    findMany<T extends IdiomasFindManyArgs>(args?: SelectSubset<T, IdiomasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Idiomas.
     * @param {IdiomasCreateArgs} args - Arguments to create a Idiomas.
     * @example
     * // Create one Idiomas
     * const Idiomas = await prisma.idiomas.create({
     *   data: {
     *     // ... data to create a Idiomas
     *   }
     * })
     * 
     */
    create<T extends IdiomasCreateArgs>(args: SelectSubset<T, IdiomasCreateArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Idiomas.
     * @param {IdiomasCreateManyArgs} args - Arguments to create many Idiomas.
     * @example
     * // Create many Idiomas
     * const idiomas = await prisma.idiomas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdiomasCreateManyArgs>(args?: SelectSubset<T, IdiomasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Idiomas.
     * @param {IdiomasDeleteArgs} args - Arguments to delete one Idiomas.
     * @example
     * // Delete one Idiomas
     * const Idiomas = await prisma.idiomas.delete({
     *   where: {
     *     // ... filter to delete one Idiomas
     *   }
     * })
     * 
     */
    delete<T extends IdiomasDeleteArgs>(args: SelectSubset<T, IdiomasDeleteArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Idiomas.
     * @param {IdiomasUpdateArgs} args - Arguments to update one Idiomas.
     * @example
     * // Update one Idiomas
     * const idiomas = await prisma.idiomas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdiomasUpdateArgs>(args: SelectSubset<T, IdiomasUpdateArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Idiomas.
     * @param {IdiomasDeleteManyArgs} args - Arguments to filter Idiomas to delete.
     * @example
     * // Delete a few Idiomas
     * const { count } = await prisma.idiomas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdiomasDeleteManyArgs>(args?: SelectSubset<T, IdiomasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Idiomas
     * const idiomas = await prisma.idiomas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdiomasUpdateManyArgs>(args: SelectSubset<T, IdiomasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Idiomas.
     * @param {IdiomasUpsertArgs} args - Arguments to update or create a Idiomas.
     * @example
     * // Update or create a Idiomas
     * const idiomas = await prisma.idiomas.upsert({
     *   create: {
     *     // ... data to create a Idiomas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Idiomas we want to update
     *   }
     * })
     */
    upsert<T extends IdiomasUpsertArgs>(args: SelectSubset<T, IdiomasUpsertArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasCountArgs} args - Arguments to filter Idiomas to count.
     * @example
     * // Count the number of Idiomas
     * const count = await prisma.idiomas.count({
     *   where: {
     *     // ... the filter for the Idiomas we want to count
     *   }
     * })
    **/
    count<T extends IdiomasCountArgs>(
      args?: Subset<T, IdiomasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdiomasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdiomasAggregateArgs>(args: Subset<T, IdiomasAggregateArgs>): Prisma.PrismaPromise<GetIdiomasAggregateType<T>>

    /**
     * Group by Idiomas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdiomasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdiomasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdiomasGroupByArgs['orderBy'] }
        : { orderBy?: IdiomasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdiomasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdiomasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Idiomas model
   */
  readonly fields: IdiomasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Idiomas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdiomasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Destinos<T extends Idiomas$DestinosArgs<ExtArgs> = {}>(args?: Subset<T, Idiomas$DestinosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ItemTraduzido<T extends Idiomas$ItemTraduzidoArgs<ExtArgs> = {}>(args?: Subset<T, Idiomas$ItemTraduzidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Idiomas model
   */ 
  interface IdiomasFieldRefs {
    readonly idIdioma: FieldRef<"Idiomas", 'Int'>
    readonly nomeIdioma: FieldRef<"Idiomas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Idiomas findUnique
   */
  export type IdiomasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where: IdiomasWhereUniqueInput
  }

  /**
   * Idiomas findUniqueOrThrow
   */
  export type IdiomasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where: IdiomasWhereUniqueInput
  }

  /**
   * Idiomas findFirst
   */
  export type IdiomasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where?: IdiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomasOrderByWithRelationInput | IdiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idiomas.
     */
    cursor?: IdiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idiomas.
     */
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * Idiomas findFirstOrThrow
   */
  export type IdiomasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where?: IdiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomasOrderByWithRelationInput | IdiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Idiomas.
     */
    cursor?: IdiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Idiomas.
     */
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * Idiomas findMany
   */
  export type IdiomasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter, which Idiomas to fetch.
     */
    where?: IdiomasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Idiomas to fetch.
     */
    orderBy?: IdiomasOrderByWithRelationInput | IdiomasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Idiomas.
     */
    cursor?: IdiomasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Idiomas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Idiomas.
     */
    skip?: number
    distinct?: IdiomasScalarFieldEnum | IdiomasScalarFieldEnum[]
  }

  /**
   * Idiomas create
   */
  export type IdiomasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * The data needed to create a Idiomas.
     */
    data: XOR<IdiomasCreateInput, IdiomasUncheckedCreateInput>
  }

  /**
   * Idiomas createMany
   */
  export type IdiomasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Idiomas.
     */
    data: IdiomasCreateManyInput | IdiomasCreateManyInput[]
  }

  /**
   * Idiomas update
   */
  export type IdiomasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * The data needed to update a Idiomas.
     */
    data: XOR<IdiomasUpdateInput, IdiomasUncheckedUpdateInput>
    /**
     * Choose, which Idiomas to update.
     */
    where: IdiomasWhereUniqueInput
  }

  /**
   * Idiomas updateMany
   */
  export type IdiomasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Idiomas.
     */
    data: XOR<IdiomasUpdateManyMutationInput, IdiomasUncheckedUpdateManyInput>
    /**
     * Filter which Idiomas to update
     */
    where?: IdiomasWhereInput
  }

  /**
   * Idiomas upsert
   */
  export type IdiomasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * The filter to search for the Idiomas to update in case it exists.
     */
    where: IdiomasWhereUniqueInput
    /**
     * In case the Idiomas found by the `where` argument doesn't exist, create a new Idiomas with this data.
     */
    create: XOR<IdiomasCreateInput, IdiomasUncheckedCreateInput>
    /**
     * In case the Idiomas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdiomasUpdateInput, IdiomasUncheckedUpdateInput>
  }

  /**
   * Idiomas delete
   */
  export type IdiomasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
    /**
     * Filter which Idiomas to delete.
     */
    where: IdiomasWhereUniqueInput
  }

  /**
   * Idiomas deleteMany
   */
  export type IdiomasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Idiomas to delete
     */
    where?: IdiomasWhereInput
  }

  /**
   * Idiomas.Destinos
   */
  export type Idiomas$DestinosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    where?: DestinosWhereInput
    orderBy?: DestinosOrderByWithRelationInput | DestinosOrderByWithRelationInput[]
    cursor?: DestinosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinosScalarFieldEnum | DestinosScalarFieldEnum[]
  }

  /**
   * Idiomas.ItemTraduzido
   */
  export type Idiomas$ItemTraduzidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    where?: ItemTraduzidoWhereInput
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    cursor?: ItemTraduzidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemTraduzidoScalarFieldEnum | ItemTraduzidoScalarFieldEnum[]
  }

  /**
   * Idiomas without action
   */
  export type IdiomasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Idiomas
     */
    select?: IdiomasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Idiomas
     */
    omit?: IdiomasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdiomasInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    idItem: number | null
  }

  export type ItemSumAggregateOutputType = {
    idItem: number | null
  }

  export type ItemMinAggregateOutputType = {
    idItem: number | null
    Descricao: string | null
  }

  export type ItemMaxAggregateOutputType = {
    idItem: number | null
    Descricao: string | null
  }

  export type ItemCountAggregateOutputType = {
    idItem: number
    Descricao: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    idItem?: true
  }

  export type ItemSumAggregateInputType = {
    idItem?: true
  }

  export type ItemMinAggregateInputType = {
    idItem?: true
    Descricao?: true
  }

  export type ItemMaxAggregateInputType = {
    idItem?: true
    Descricao?: true
  }

  export type ItemCountAggregateInputType = {
    idItem?: true
    Descricao?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    idItem: number
    Descricao: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idItem?: boolean
    Descricao?: boolean
    Conteudo?: boolean | Item$ConteudoArgs<ExtArgs>
    ItemTraduzido?: boolean | Item$ItemTraduzidoArgs<ExtArgs>
    TipoContainer?: boolean | Item$TipoContainerArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>



  export type ItemSelectScalar = {
    idItem?: boolean
    Descricao?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idItem" | "Descricao", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Conteudo?: boolean | Item$ConteudoArgs<ExtArgs>
    ItemTraduzido?: boolean | Item$ItemTraduzidoArgs<ExtArgs>
    TipoContainer?: boolean | Item$TipoContainerArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      Conteudo: Prisma.$ConteudoPayload<ExtArgs>[]
      ItemTraduzido: Prisma.$ItemTraduzidoPayload<ExtArgs>[]
      TipoContainer: Prisma.$TipoContainerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idItem: number
      Descricao: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `idItem`
     * const itemWithIdItemOnly = await prisma.item.findMany({ select: { idItem: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Conteudo<T extends Item$ConteudoArgs<ExtArgs> = {}>(args?: Subset<T, Item$ConteudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    ItemTraduzido<T extends Item$ItemTraduzidoArgs<ExtArgs> = {}>(args?: Subset<T, Item$ItemTraduzidoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    TipoContainer<T extends Item$TipoContainerArgs<ExtArgs> = {}>(args?: Subset<T, Item$TipoContainerArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly idItem: FieldRef<"Item", 'Int'>
    readonly Descricao: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item.Conteudo
   */
  export type Item$ConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    cursor?: ConteudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * Item.ItemTraduzido
   */
  export type Item$ItemTraduzidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    where?: ItemTraduzidoWhereInput
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    cursor?: ItemTraduzidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemTraduzidoScalarFieldEnum | ItemTraduzidoScalarFieldEnum[]
  }

  /**
   * Item.TipoContainer
   */
  export type Item$TipoContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    where?: TipoContainerWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemTraduzido
   */

  export type AggregateItemTraduzido = {
    _count: ItemTraduzidoCountAggregateOutputType | null
    _avg: ItemTraduzidoAvgAggregateOutputType | null
    _sum: ItemTraduzidoSumAggregateOutputType | null
    _min: ItemTraduzidoMinAggregateOutputType | null
    _max: ItemTraduzidoMaxAggregateOutputType | null
  }

  export type ItemTraduzidoAvgAggregateOutputType = {
    idIdioma: number | null
    idItem: number | null
  }

  export type ItemTraduzidoSumAggregateOutputType = {
    idIdioma: number | null
    idItem: number | null
  }

  export type ItemTraduzidoMinAggregateOutputType = {
    idIdioma: number | null
    idItem: number | null
    descItem: string | null
  }

  export type ItemTraduzidoMaxAggregateOutputType = {
    idIdioma: number | null
    idItem: number | null
    descItem: string | null
  }

  export type ItemTraduzidoCountAggregateOutputType = {
    idIdioma: number
    idItem: number
    descItem: number
    _all: number
  }


  export type ItemTraduzidoAvgAggregateInputType = {
    idIdioma?: true
    idItem?: true
  }

  export type ItemTraduzidoSumAggregateInputType = {
    idIdioma?: true
    idItem?: true
  }

  export type ItemTraduzidoMinAggregateInputType = {
    idIdioma?: true
    idItem?: true
    descItem?: true
  }

  export type ItemTraduzidoMaxAggregateInputType = {
    idIdioma?: true
    idItem?: true
    descItem?: true
  }

  export type ItemTraduzidoCountAggregateInputType = {
    idIdioma?: true
    idItem?: true
    descItem?: true
    _all?: true
  }

  export type ItemTraduzidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemTraduzido to aggregate.
     */
    where?: ItemTraduzidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTraduzidos to fetch.
     */
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemTraduzidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTraduzidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTraduzidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemTraduzidos
    **/
    _count?: true | ItemTraduzidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemTraduzidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemTraduzidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemTraduzidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemTraduzidoMaxAggregateInputType
  }

  export type GetItemTraduzidoAggregateType<T extends ItemTraduzidoAggregateArgs> = {
        [P in keyof T & keyof AggregateItemTraduzido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemTraduzido[P]>
      : GetScalarType<T[P], AggregateItemTraduzido[P]>
  }




  export type ItemTraduzidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemTraduzidoWhereInput
    orderBy?: ItemTraduzidoOrderByWithAggregationInput | ItemTraduzidoOrderByWithAggregationInput[]
    by: ItemTraduzidoScalarFieldEnum[] | ItemTraduzidoScalarFieldEnum
    having?: ItemTraduzidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemTraduzidoCountAggregateInputType | true
    _avg?: ItemTraduzidoAvgAggregateInputType
    _sum?: ItemTraduzidoSumAggregateInputType
    _min?: ItemTraduzidoMinAggregateInputType
    _max?: ItemTraduzidoMaxAggregateInputType
  }

  export type ItemTraduzidoGroupByOutputType = {
    idIdioma: number
    idItem: number
    descItem: string
    _count: ItemTraduzidoCountAggregateOutputType | null
    _avg: ItemTraduzidoAvgAggregateOutputType | null
    _sum: ItemTraduzidoSumAggregateOutputType | null
    _min: ItemTraduzidoMinAggregateOutputType | null
    _max: ItemTraduzidoMaxAggregateOutputType | null
  }

  type GetItemTraduzidoGroupByPayload<T extends ItemTraduzidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemTraduzidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemTraduzidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemTraduzidoGroupByOutputType[P]>
            : GetScalarType<T[P], ItemTraduzidoGroupByOutputType[P]>
        }
      >
    >


  export type ItemTraduzidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idIdioma?: boolean
    idItem?: boolean
    descItem?: boolean
    Idiomas?: boolean | IdiomasDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemTraduzido"]>



  export type ItemTraduzidoSelectScalar = {
    idIdioma?: boolean
    idItem?: boolean
    descItem?: boolean
  }

  export type ItemTraduzidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idIdioma" | "idItem" | "descItem", ExtArgs["result"]["itemTraduzido"]>
  export type ItemTraduzidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Idiomas?: boolean | IdiomasDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $ItemTraduzidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemTraduzido"
    objects: {
      Idiomas: Prisma.$IdiomasPayload<ExtArgs>
      Item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idIdioma: number
      idItem: number
      descItem: string
    }, ExtArgs["result"]["itemTraduzido"]>
    composites: {}
  }

  type ItemTraduzidoGetPayload<S extends boolean | null | undefined | ItemTraduzidoDefaultArgs> = $Result.GetResult<Prisma.$ItemTraduzidoPayload, S>

  type ItemTraduzidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemTraduzidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemTraduzidoCountAggregateInputType | true
    }

  export interface ItemTraduzidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemTraduzido'], meta: { name: 'ItemTraduzido' } }
    /**
     * Find zero or one ItemTraduzido that matches the filter.
     * @param {ItemTraduzidoFindUniqueArgs} args - Arguments to find a ItemTraduzido
     * @example
     * // Get one ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemTraduzidoFindUniqueArgs>(args: SelectSubset<T, ItemTraduzidoFindUniqueArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ItemTraduzido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemTraduzidoFindUniqueOrThrowArgs} args - Arguments to find a ItemTraduzido
     * @example
     * // Get one ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemTraduzidoFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemTraduzidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ItemTraduzido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoFindFirstArgs} args - Arguments to find a ItemTraduzido
     * @example
     * // Get one ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemTraduzidoFindFirstArgs>(args?: SelectSubset<T, ItemTraduzidoFindFirstArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ItemTraduzido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoFindFirstOrThrowArgs} args - Arguments to find a ItemTraduzido
     * @example
     * // Get one ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemTraduzidoFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemTraduzidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ItemTraduzidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemTraduzidos
     * const itemTraduzidos = await prisma.itemTraduzido.findMany()
     * 
     * // Get first 10 ItemTraduzidos
     * const itemTraduzidos = await prisma.itemTraduzido.findMany({ take: 10 })
     * 
     * // Only select the `idIdioma`
     * const itemTraduzidoWithIdIdiomaOnly = await prisma.itemTraduzido.findMany({ select: { idIdioma: true } })
     * 
     */
    findMany<T extends ItemTraduzidoFindManyArgs>(args?: SelectSubset<T, ItemTraduzidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ItemTraduzido.
     * @param {ItemTraduzidoCreateArgs} args - Arguments to create a ItemTraduzido.
     * @example
     * // Create one ItemTraduzido
     * const ItemTraduzido = await prisma.itemTraduzido.create({
     *   data: {
     *     // ... data to create a ItemTraduzido
     *   }
     * })
     * 
     */
    create<T extends ItemTraduzidoCreateArgs>(args: SelectSubset<T, ItemTraduzidoCreateArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ItemTraduzidos.
     * @param {ItemTraduzidoCreateManyArgs} args - Arguments to create many ItemTraduzidos.
     * @example
     * // Create many ItemTraduzidos
     * const itemTraduzido = await prisma.itemTraduzido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemTraduzidoCreateManyArgs>(args?: SelectSubset<T, ItemTraduzidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemTraduzido.
     * @param {ItemTraduzidoDeleteArgs} args - Arguments to delete one ItemTraduzido.
     * @example
     * // Delete one ItemTraduzido
     * const ItemTraduzido = await prisma.itemTraduzido.delete({
     *   where: {
     *     // ... filter to delete one ItemTraduzido
     *   }
     * })
     * 
     */
    delete<T extends ItemTraduzidoDeleteArgs>(args: SelectSubset<T, ItemTraduzidoDeleteArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ItemTraduzido.
     * @param {ItemTraduzidoUpdateArgs} args - Arguments to update one ItemTraduzido.
     * @example
     * // Update one ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemTraduzidoUpdateArgs>(args: SelectSubset<T, ItemTraduzidoUpdateArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ItemTraduzidos.
     * @param {ItemTraduzidoDeleteManyArgs} args - Arguments to filter ItemTraduzidos to delete.
     * @example
     * // Delete a few ItemTraduzidos
     * const { count } = await prisma.itemTraduzido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemTraduzidoDeleteManyArgs>(args?: SelectSubset<T, ItemTraduzidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemTraduzidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemTraduzidos
     * const itemTraduzido = await prisma.itemTraduzido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemTraduzidoUpdateManyArgs>(args: SelectSubset<T, ItemTraduzidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemTraduzido.
     * @param {ItemTraduzidoUpsertArgs} args - Arguments to update or create a ItemTraduzido.
     * @example
     * // Update or create a ItemTraduzido
     * const itemTraduzido = await prisma.itemTraduzido.upsert({
     *   create: {
     *     // ... data to create a ItemTraduzido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemTraduzido we want to update
     *   }
     * })
     */
    upsert<T extends ItemTraduzidoUpsertArgs>(args: SelectSubset<T, ItemTraduzidoUpsertArgs<ExtArgs>>): Prisma__ItemTraduzidoClient<$Result.GetResult<Prisma.$ItemTraduzidoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ItemTraduzidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoCountArgs} args - Arguments to filter ItemTraduzidos to count.
     * @example
     * // Count the number of ItemTraduzidos
     * const count = await prisma.itemTraduzido.count({
     *   where: {
     *     // ... the filter for the ItemTraduzidos we want to count
     *   }
     * })
    **/
    count<T extends ItemTraduzidoCountArgs>(
      args?: Subset<T, ItemTraduzidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemTraduzidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemTraduzido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemTraduzidoAggregateArgs>(args: Subset<T, ItemTraduzidoAggregateArgs>): Prisma.PrismaPromise<GetItemTraduzidoAggregateType<T>>

    /**
     * Group by ItemTraduzido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemTraduzidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemTraduzidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemTraduzidoGroupByArgs['orderBy'] }
        : { orderBy?: ItemTraduzidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemTraduzidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemTraduzidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemTraduzido model
   */
  readonly fields: ItemTraduzidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemTraduzido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemTraduzidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Idiomas<T extends IdiomasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdiomasDefaultArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemTraduzido model
   */ 
  interface ItemTraduzidoFieldRefs {
    readonly idIdioma: FieldRef<"ItemTraduzido", 'Int'>
    readonly idItem: FieldRef<"ItemTraduzido", 'Int'>
    readonly descItem: FieldRef<"ItemTraduzido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ItemTraduzido findUnique
   */
  export type ItemTraduzidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemTraduzido to fetch.
     */
    where: ItemTraduzidoWhereUniqueInput
  }

  /**
   * ItemTraduzido findUniqueOrThrow
   */
  export type ItemTraduzidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemTraduzido to fetch.
     */
    where: ItemTraduzidoWhereUniqueInput
  }

  /**
   * ItemTraduzido findFirst
   */
  export type ItemTraduzidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemTraduzido to fetch.
     */
    where?: ItemTraduzidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTraduzidos to fetch.
     */
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTraduzidos.
     */
    cursor?: ItemTraduzidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTraduzidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTraduzidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTraduzidos.
     */
    distinct?: ItemTraduzidoScalarFieldEnum | ItemTraduzidoScalarFieldEnum[]
  }

  /**
   * ItemTraduzido findFirstOrThrow
   */
  export type ItemTraduzidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemTraduzido to fetch.
     */
    where?: ItemTraduzidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTraduzidos to fetch.
     */
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemTraduzidos.
     */
    cursor?: ItemTraduzidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTraduzidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTraduzidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemTraduzidos.
     */
    distinct?: ItemTraduzidoScalarFieldEnum | ItemTraduzidoScalarFieldEnum[]
  }

  /**
   * ItemTraduzido findMany
   */
  export type ItemTraduzidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter, which ItemTraduzidos to fetch.
     */
    where?: ItemTraduzidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemTraduzidos to fetch.
     */
    orderBy?: ItemTraduzidoOrderByWithRelationInput | ItemTraduzidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemTraduzidos.
     */
    cursor?: ItemTraduzidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemTraduzidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemTraduzidos.
     */
    skip?: number
    distinct?: ItemTraduzidoScalarFieldEnum | ItemTraduzidoScalarFieldEnum[]
  }

  /**
   * ItemTraduzido create
   */
  export type ItemTraduzidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemTraduzido.
     */
    data: XOR<ItemTraduzidoCreateInput, ItemTraduzidoUncheckedCreateInput>
  }

  /**
   * ItemTraduzido createMany
   */
  export type ItemTraduzidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemTraduzidos.
     */
    data: ItemTraduzidoCreateManyInput | ItemTraduzidoCreateManyInput[]
  }

  /**
   * ItemTraduzido update
   */
  export type ItemTraduzidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemTraduzido.
     */
    data: XOR<ItemTraduzidoUpdateInput, ItemTraduzidoUncheckedUpdateInput>
    /**
     * Choose, which ItemTraduzido to update.
     */
    where: ItemTraduzidoWhereUniqueInput
  }

  /**
   * ItemTraduzido updateMany
   */
  export type ItemTraduzidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemTraduzidos.
     */
    data: XOR<ItemTraduzidoUpdateManyMutationInput, ItemTraduzidoUncheckedUpdateManyInput>
    /**
     * Filter which ItemTraduzidos to update
     */
    where?: ItemTraduzidoWhereInput
  }

  /**
   * ItemTraduzido upsert
   */
  export type ItemTraduzidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemTraduzido to update in case it exists.
     */
    where: ItemTraduzidoWhereUniqueInput
    /**
     * In case the ItemTraduzido found by the `where` argument doesn't exist, create a new ItemTraduzido with this data.
     */
    create: XOR<ItemTraduzidoCreateInput, ItemTraduzidoUncheckedCreateInput>
    /**
     * In case the ItemTraduzido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemTraduzidoUpdateInput, ItemTraduzidoUncheckedUpdateInput>
  }

  /**
   * ItemTraduzido delete
   */
  export type ItemTraduzidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
    /**
     * Filter which ItemTraduzido to delete.
     */
    where: ItemTraduzidoWhereUniqueInput
  }

  /**
   * ItemTraduzido deleteMany
   */
  export type ItemTraduzidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemTraduzidos to delete
     */
    where?: ItemTraduzidoWhereInput
  }

  /**
   * ItemTraduzido without action
   */
  export type ItemTraduzidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemTraduzido
     */
    select?: ItemTraduzidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ItemTraduzido
     */
    omit?: ItemTraduzidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemTraduzidoInclude<ExtArgs> | null
  }


  /**
   * Model TipoContainer
   */

  export type AggregateTipoContainer = {
    _count: TipoContainerCountAggregateOutputType | null
    _avg: TipoContainerAvgAggregateOutputType | null
    _sum: TipoContainerSumAggregateOutputType | null
    _min: TipoContainerMinAggregateOutputType | null
    _max: TipoContainerMaxAggregateOutputType | null
  }

  export type TipoContainerAvgAggregateOutputType = {
    idTipoContainer: number | null
    idItem: number | null
  }

  export type TipoContainerSumAggregateOutputType = {
    idTipoContainer: number | null
    idItem: number | null
  }

  export type TipoContainerMinAggregateOutputType = {
    idTipoContainer: number | null
    idItem: number | null
    permiteSubContainer: boolean | null
  }

  export type TipoContainerMaxAggregateOutputType = {
    idTipoContainer: number | null
    idItem: number | null
    permiteSubContainer: boolean | null
  }

  export type TipoContainerCountAggregateOutputType = {
    idTipoContainer: number
    idItem: number
    permiteSubContainer: number
    _all: number
  }


  export type TipoContainerAvgAggregateInputType = {
    idTipoContainer?: true
    idItem?: true
  }

  export type TipoContainerSumAggregateInputType = {
    idTipoContainer?: true
    idItem?: true
  }

  export type TipoContainerMinAggregateInputType = {
    idTipoContainer?: true
    idItem?: true
    permiteSubContainer?: true
  }

  export type TipoContainerMaxAggregateInputType = {
    idTipoContainer?: true
    idItem?: true
    permiteSubContainer?: true
  }

  export type TipoContainerCountAggregateInputType = {
    idTipoContainer?: true
    idItem?: true
    permiteSubContainer?: true
    _all?: true
  }

  export type TipoContainerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoContainer to aggregate.
     */
    where?: TipoContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoContainers to fetch.
     */
    orderBy?: TipoContainerOrderByWithRelationInput | TipoContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoContainers
    **/
    _count?: true | TipoContainerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoContainerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoContainerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoContainerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoContainerMaxAggregateInputType
  }

  export type GetTipoContainerAggregateType<T extends TipoContainerAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoContainer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoContainer[P]>
      : GetScalarType<T[P], AggregateTipoContainer[P]>
  }




  export type TipoContainerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoContainerWhereInput
    orderBy?: TipoContainerOrderByWithAggregationInput | TipoContainerOrderByWithAggregationInput[]
    by: TipoContainerScalarFieldEnum[] | TipoContainerScalarFieldEnum
    having?: TipoContainerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoContainerCountAggregateInputType | true
    _avg?: TipoContainerAvgAggregateInputType
    _sum?: TipoContainerSumAggregateInputType
    _min?: TipoContainerMinAggregateInputType
    _max?: TipoContainerMaxAggregateInputType
  }

  export type TipoContainerGroupByOutputType = {
    idTipoContainer: number
    idItem: number
    permiteSubContainer: boolean
    _count: TipoContainerCountAggregateOutputType | null
    _avg: TipoContainerAvgAggregateOutputType | null
    _sum: TipoContainerSumAggregateOutputType | null
    _min: TipoContainerMinAggregateOutputType | null
    _max: TipoContainerMaxAggregateOutputType | null
  }

  type GetTipoContainerGroupByPayload<T extends TipoContainerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoContainerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoContainerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoContainerGroupByOutputType[P]>
            : GetScalarType<T[P], TipoContainerGroupByOutputType[P]>
        }
      >
    >


  export type TipoContainerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTipoContainer?: boolean
    idItem?: boolean
    permiteSubContainer?: boolean
    Container?: boolean | TipoContainer$ContainerArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    _count?: boolean | TipoContainerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoContainer"]>



  export type TipoContainerSelectScalar = {
    idTipoContainer?: boolean
    idItem?: boolean
    permiteSubContainer?: boolean
  }

  export type TipoContainerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idTipoContainer" | "idItem" | "permiteSubContainer", ExtArgs["result"]["tipoContainer"]>
  export type TipoContainerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | TipoContainer$ContainerArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
    _count?: boolean | TipoContainerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoContainerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoContainer"
    objects: {
      Container: Prisma.$ContainerPayload<ExtArgs>[]
      Item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idTipoContainer: number
      idItem: number
      permiteSubContainer: boolean
    }, ExtArgs["result"]["tipoContainer"]>
    composites: {}
  }

  type TipoContainerGetPayload<S extends boolean | null | undefined | TipoContainerDefaultArgs> = $Result.GetResult<Prisma.$TipoContainerPayload, S>

  type TipoContainerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoContainerCountAggregateInputType | true
    }

  export interface TipoContainerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoContainer'], meta: { name: 'TipoContainer' } }
    /**
     * Find zero or one TipoContainer that matches the filter.
     * @param {TipoContainerFindUniqueArgs} args - Arguments to find a TipoContainer
     * @example
     * // Get one TipoContainer
     * const tipoContainer = await prisma.tipoContainer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoContainerFindUniqueArgs>(args: SelectSubset<T, TipoContainerFindUniqueArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TipoContainer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoContainerFindUniqueOrThrowArgs} args - Arguments to find a TipoContainer
     * @example
     * // Get one TipoContainer
     * const tipoContainer = await prisma.tipoContainer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoContainerFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TipoContainer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerFindFirstArgs} args - Arguments to find a TipoContainer
     * @example
     * // Get one TipoContainer
     * const tipoContainer = await prisma.tipoContainer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoContainerFindFirstArgs>(args?: SelectSubset<T, TipoContainerFindFirstArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TipoContainer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerFindFirstOrThrowArgs} args - Arguments to find a TipoContainer
     * @example
     * // Get one TipoContainer
     * const tipoContainer = await prisma.tipoContainer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoContainerFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TipoContainers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoContainers
     * const tipoContainers = await prisma.tipoContainer.findMany()
     * 
     * // Get first 10 TipoContainers
     * const tipoContainers = await prisma.tipoContainer.findMany({ take: 10 })
     * 
     * // Only select the `idTipoContainer`
     * const tipoContainerWithIdTipoContainerOnly = await prisma.tipoContainer.findMany({ select: { idTipoContainer: true } })
     * 
     */
    findMany<T extends TipoContainerFindManyArgs>(args?: SelectSubset<T, TipoContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TipoContainer.
     * @param {TipoContainerCreateArgs} args - Arguments to create a TipoContainer.
     * @example
     * // Create one TipoContainer
     * const TipoContainer = await prisma.tipoContainer.create({
     *   data: {
     *     // ... data to create a TipoContainer
     *   }
     * })
     * 
     */
    create<T extends TipoContainerCreateArgs>(args: SelectSubset<T, TipoContainerCreateArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TipoContainers.
     * @param {TipoContainerCreateManyArgs} args - Arguments to create many TipoContainers.
     * @example
     * // Create many TipoContainers
     * const tipoContainer = await prisma.tipoContainer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoContainerCreateManyArgs>(args?: SelectSubset<T, TipoContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoContainer.
     * @param {TipoContainerDeleteArgs} args - Arguments to delete one TipoContainer.
     * @example
     * // Delete one TipoContainer
     * const TipoContainer = await prisma.tipoContainer.delete({
     *   where: {
     *     // ... filter to delete one TipoContainer
     *   }
     * })
     * 
     */
    delete<T extends TipoContainerDeleteArgs>(args: SelectSubset<T, TipoContainerDeleteArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TipoContainer.
     * @param {TipoContainerUpdateArgs} args - Arguments to update one TipoContainer.
     * @example
     * // Update one TipoContainer
     * const tipoContainer = await prisma.tipoContainer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoContainerUpdateArgs>(args: SelectSubset<T, TipoContainerUpdateArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TipoContainers.
     * @param {TipoContainerDeleteManyArgs} args - Arguments to filter TipoContainers to delete.
     * @example
     * // Delete a few TipoContainers
     * const { count } = await prisma.tipoContainer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoContainerDeleteManyArgs>(args?: SelectSubset<T, TipoContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoContainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoContainers
     * const tipoContainer = await prisma.tipoContainer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoContainerUpdateManyArgs>(args: SelectSubset<T, TipoContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoContainer.
     * @param {TipoContainerUpsertArgs} args - Arguments to update or create a TipoContainer.
     * @example
     * // Update or create a TipoContainer
     * const tipoContainer = await prisma.tipoContainer.upsert({
     *   create: {
     *     // ... data to create a TipoContainer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoContainer we want to update
     *   }
     * })
     */
    upsert<T extends TipoContainerUpsertArgs>(args: SelectSubset<T, TipoContainerUpsertArgs<ExtArgs>>): Prisma__TipoContainerClient<$Result.GetResult<Prisma.$TipoContainerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TipoContainers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerCountArgs} args - Arguments to filter TipoContainers to count.
     * @example
     * // Count the number of TipoContainers
     * const count = await prisma.tipoContainer.count({
     *   where: {
     *     // ... the filter for the TipoContainers we want to count
     *   }
     * })
    **/
    count<T extends TipoContainerCountArgs>(
      args?: Subset<T, TipoContainerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoContainerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoContainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoContainerAggregateArgs>(args: Subset<T, TipoContainerAggregateArgs>): Prisma.PrismaPromise<GetTipoContainerAggregateType<T>>

    /**
     * Group by TipoContainer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoContainerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoContainerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoContainerGroupByArgs['orderBy'] }
        : { orderBy?: TipoContainerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoContainer model
   */
  readonly fields: TipoContainerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoContainer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoContainerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Container<T extends TipoContainer$ContainerArgs<ExtArgs> = {}>(args?: Subset<T, TipoContainer$ContainerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoContainer model
   */ 
  interface TipoContainerFieldRefs {
    readonly idTipoContainer: FieldRef<"TipoContainer", 'Int'>
    readonly idItem: FieldRef<"TipoContainer", 'Int'>
    readonly permiteSubContainer: FieldRef<"TipoContainer", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TipoContainer findUnique
   */
  export type TipoContainerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter, which TipoContainer to fetch.
     */
    where: TipoContainerWhereUniqueInput
  }

  /**
   * TipoContainer findUniqueOrThrow
   */
  export type TipoContainerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter, which TipoContainer to fetch.
     */
    where: TipoContainerWhereUniqueInput
  }

  /**
   * TipoContainer findFirst
   */
  export type TipoContainerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter, which TipoContainer to fetch.
     */
    where?: TipoContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoContainers to fetch.
     */
    orderBy?: TipoContainerOrderByWithRelationInput | TipoContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoContainers.
     */
    cursor?: TipoContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoContainers.
     */
    distinct?: TipoContainerScalarFieldEnum | TipoContainerScalarFieldEnum[]
  }

  /**
   * TipoContainer findFirstOrThrow
   */
  export type TipoContainerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter, which TipoContainer to fetch.
     */
    where?: TipoContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoContainers to fetch.
     */
    orderBy?: TipoContainerOrderByWithRelationInput | TipoContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoContainers.
     */
    cursor?: TipoContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoContainers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoContainers.
     */
    distinct?: TipoContainerScalarFieldEnum | TipoContainerScalarFieldEnum[]
  }

  /**
   * TipoContainer findMany
   */
  export type TipoContainerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter, which TipoContainers to fetch.
     */
    where?: TipoContainerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoContainers to fetch.
     */
    orderBy?: TipoContainerOrderByWithRelationInput | TipoContainerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoContainers.
     */
    cursor?: TipoContainerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoContainers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoContainers.
     */
    skip?: number
    distinct?: TipoContainerScalarFieldEnum | TipoContainerScalarFieldEnum[]
  }

  /**
   * TipoContainer create
   */
  export type TipoContainerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoContainer.
     */
    data: XOR<TipoContainerCreateInput, TipoContainerUncheckedCreateInput>
  }

  /**
   * TipoContainer createMany
   */
  export type TipoContainerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoContainers.
     */
    data: TipoContainerCreateManyInput | TipoContainerCreateManyInput[]
  }

  /**
   * TipoContainer update
   */
  export type TipoContainerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoContainer.
     */
    data: XOR<TipoContainerUpdateInput, TipoContainerUncheckedUpdateInput>
    /**
     * Choose, which TipoContainer to update.
     */
    where: TipoContainerWhereUniqueInput
  }

  /**
   * TipoContainer updateMany
   */
  export type TipoContainerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoContainers.
     */
    data: XOR<TipoContainerUpdateManyMutationInput, TipoContainerUncheckedUpdateManyInput>
    /**
     * Filter which TipoContainers to update
     */
    where?: TipoContainerWhereInput
  }

  /**
   * TipoContainer upsert
   */
  export type TipoContainerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoContainer to update in case it exists.
     */
    where: TipoContainerWhereUniqueInput
    /**
     * In case the TipoContainer found by the `where` argument doesn't exist, create a new TipoContainer with this data.
     */
    create: XOR<TipoContainerCreateInput, TipoContainerUncheckedCreateInput>
    /**
     * In case the TipoContainer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoContainerUpdateInput, TipoContainerUncheckedUpdateInput>
  }

  /**
   * TipoContainer delete
   */
  export type TipoContainerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
    /**
     * Filter which TipoContainer to delete.
     */
    where: TipoContainerWhereUniqueInput
  }

  /**
   * TipoContainer deleteMany
   */
  export type TipoContainerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoContainers to delete
     */
    where?: TipoContainerWhereInput
  }

  /**
   * TipoContainer.Container
   */
  export type TipoContainer$ContainerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Container
     */
    select?: ContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Container
     */
    omit?: ContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerInclude<ExtArgs> | null
    where?: ContainerWhereInput
    orderBy?: ContainerOrderByWithRelationInput | ContainerOrderByWithRelationInput[]
    cursor?: ContainerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerScalarFieldEnum | ContainerScalarFieldEnum[]
  }

  /**
   * TipoContainer without action
   */
  export type TipoContainerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoContainer
     */
    select?: TipoContainerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoContainer
     */
    omit?: TipoContainerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoContainerInclude<ExtArgs> | null
  }


  /**
   * Model Destinos
   */

  export type AggregateDestinos = {
    _count: DestinosCountAggregateOutputType | null
    _avg: DestinosAvgAggregateOutputType | null
    _sum: DestinosSumAggregateOutputType | null
    _min: DestinosMinAggregateOutputType | null
    _max: DestinosMaxAggregateOutputType | null
  }

  export type DestinosAvgAggregateOutputType = {
    idDestino: number | null
    idIdioma: number | null
  }

  export type DestinosSumAggregateOutputType = {
    idDestino: number | null
    idIdioma: number | null
  }

  export type DestinosMinAggregateOutputType = {
    idDestino: number | null
    idIdioma: number | null
    nomeDestino: string | null
  }

  export type DestinosMaxAggregateOutputType = {
    idDestino: number | null
    idIdioma: number | null
    nomeDestino: string | null
  }

  export type DestinosCountAggregateOutputType = {
    idDestino: number
    idIdioma: number
    nomeDestino: number
    _all: number
  }


  export type DestinosAvgAggregateInputType = {
    idDestino?: true
    idIdioma?: true
  }

  export type DestinosSumAggregateInputType = {
    idDestino?: true
    idIdioma?: true
  }

  export type DestinosMinAggregateInputType = {
    idDestino?: true
    idIdioma?: true
    nomeDestino?: true
  }

  export type DestinosMaxAggregateInputType = {
    idDestino?: true
    idIdioma?: true
    nomeDestino?: true
  }

  export type DestinosCountAggregateInputType = {
    idDestino?: true
    idIdioma?: true
    nomeDestino?: true
    _all?: true
  }

  export type DestinosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinos to aggregate.
     */
    where?: DestinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinos to fetch.
     */
    orderBy?: DestinosOrderByWithRelationInput | DestinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinos
    **/
    _count?: true | DestinosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinosMaxAggregateInputType
  }

  export type GetDestinosAggregateType<T extends DestinosAggregateArgs> = {
        [P in keyof T & keyof AggregateDestinos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestinos[P]>
      : GetScalarType<T[P], AggregateDestinos[P]>
  }




  export type DestinosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinosWhereInput
    orderBy?: DestinosOrderByWithAggregationInput | DestinosOrderByWithAggregationInput[]
    by: DestinosScalarFieldEnum[] | DestinosScalarFieldEnum
    having?: DestinosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinosCountAggregateInputType | true
    _avg?: DestinosAvgAggregateInputType
    _sum?: DestinosSumAggregateInputType
    _min?: DestinosMinAggregateInputType
    _max?: DestinosMaxAggregateInputType
  }

  export type DestinosGroupByOutputType = {
    idDestino: number
    idIdioma: number
    nomeDestino: string
    _count: DestinosCountAggregateOutputType | null
    _avg: DestinosAvgAggregateOutputType | null
    _sum: DestinosSumAggregateOutputType | null
    _min: DestinosMinAggregateOutputType | null
    _max: DestinosMaxAggregateOutputType | null
  }

  type GetDestinosGroupByPayload<T extends DestinosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinosGroupByOutputType[P]>
            : GetScalarType<T[P], DestinosGroupByOutputType[P]>
        }
      >
    >


  export type DestinosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idDestino?: boolean
    idIdioma?: boolean
    nomeDestino?: boolean
    Idiomas?: boolean | IdiomasDefaultArgs<ExtArgs>
    Envio?: boolean | Destinos$EnvioArgs<ExtArgs>
    _count?: boolean | DestinosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destinos"]>



  export type DestinosSelectScalar = {
    idDestino?: boolean
    idIdioma?: boolean
    nomeDestino?: boolean
  }

  export type DestinosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idDestino" | "idIdioma" | "nomeDestino", ExtArgs["result"]["destinos"]>
  export type DestinosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Idiomas?: boolean | IdiomasDefaultArgs<ExtArgs>
    Envio?: boolean | Destinos$EnvioArgs<ExtArgs>
    _count?: boolean | DestinosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DestinosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destinos"
    objects: {
      Idiomas: Prisma.$IdiomasPayload<ExtArgs>
      Envio: Prisma.$EnvioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idDestino: number
      idIdioma: number
      nomeDestino: string
    }, ExtArgs["result"]["destinos"]>
    composites: {}
  }

  type DestinosGetPayload<S extends boolean | null | undefined | DestinosDefaultArgs> = $Result.GetResult<Prisma.$DestinosPayload, S>

  type DestinosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinosCountAggregateInputType | true
    }

  export interface DestinosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destinos'], meta: { name: 'Destinos' } }
    /**
     * Find zero or one Destinos that matches the filter.
     * @param {DestinosFindUniqueArgs} args - Arguments to find a Destinos
     * @example
     * // Get one Destinos
     * const destinos = await prisma.destinos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinosFindUniqueArgs>(args: SelectSubset<T, DestinosFindUniqueArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Destinos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinosFindUniqueOrThrowArgs} args - Arguments to find a Destinos
     * @example
     * // Get one Destinos
     * const destinos = await prisma.destinos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinosFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Destinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosFindFirstArgs} args - Arguments to find a Destinos
     * @example
     * // Get one Destinos
     * const destinos = await prisma.destinos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinosFindFirstArgs>(args?: SelectSubset<T, DestinosFindFirstArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Destinos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosFindFirstOrThrowArgs} args - Arguments to find a Destinos
     * @example
     * // Get one Destinos
     * const destinos = await prisma.destinos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinosFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinosFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Destinos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinos
     * const destinos = await prisma.destinos.findMany()
     * 
     * // Get first 10 Destinos
     * const destinos = await prisma.destinos.findMany({ take: 10 })
     * 
     * // Only select the `idDestino`
     * const destinosWithIdDestinoOnly = await prisma.destinos.findMany({ select: { idDestino: true } })
     * 
     */
    findMany<T extends DestinosFindManyArgs>(args?: SelectSubset<T, DestinosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Destinos.
     * @param {DestinosCreateArgs} args - Arguments to create a Destinos.
     * @example
     * // Create one Destinos
     * const Destinos = await prisma.destinos.create({
     *   data: {
     *     // ... data to create a Destinos
     *   }
     * })
     * 
     */
    create<T extends DestinosCreateArgs>(args: SelectSubset<T, DestinosCreateArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Destinos.
     * @param {DestinosCreateManyArgs} args - Arguments to create many Destinos.
     * @example
     * // Create many Destinos
     * const destinos = await prisma.destinos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinosCreateManyArgs>(args?: SelectSubset<T, DestinosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destinos.
     * @param {DestinosDeleteArgs} args - Arguments to delete one Destinos.
     * @example
     * // Delete one Destinos
     * const Destinos = await prisma.destinos.delete({
     *   where: {
     *     // ... filter to delete one Destinos
     *   }
     * })
     * 
     */
    delete<T extends DestinosDeleteArgs>(args: SelectSubset<T, DestinosDeleteArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Destinos.
     * @param {DestinosUpdateArgs} args - Arguments to update one Destinos.
     * @example
     * // Update one Destinos
     * const destinos = await prisma.destinos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinosUpdateArgs>(args: SelectSubset<T, DestinosUpdateArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Destinos.
     * @param {DestinosDeleteManyArgs} args - Arguments to filter Destinos to delete.
     * @example
     * // Delete a few Destinos
     * const { count } = await prisma.destinos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinosDeleteManyArgs>(args?: SelectSubset<T, DestinosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinos
     * const destinos = await prisma.destinos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinosUpdateManyArgs>(args: SelectSubset<T, DestinosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destinos.
     * @param {DestinosUpsertArgs} args - Arguments to update or create a Destinos.
     * @example
     * // Update or create a Destinos
     * const destinos = await prisma.destinos.upsert({
     *   create: {
     *     // ... data to create a Destinos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destinos we want to update
     *   }
     * })
     */
    upsert<T extends DestinosUpsertArgs>(args: SelectSubset<T, DestinosUpsertArgs<ExtArgs>>): Prisma__DestinosClient<$Result.GetResult<Prisma.$DestinosPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosCountArgs} args - Arguments to filter Destinos to count.
     * @example
     * // Count the number of Destinos
     * const count = await prisma.destinos.count({
     *   where: {
     *     // ... the filter for the Destinos we want to count
     *   }
     * })
    **/
    count<T extends DestinosCountArgs>(
      args?: Subset<T, DestinosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinosAggregateArgs>(args: Subset<T, DestinosAggregateArgs>): Prisma.PrismaPromise<GetDestinosAggregateType<T>>

    /**
     * Group by Destinos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinosGroupByArgs['orderBy'] }
        : { orderBy?: DestinosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destinos model
   */
  readonly fields: DestinosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destinos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Idiomas<T extends IdiomasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdiomasDefaultArgs<ExtArgs>>): Prisma__IdiomasClient<$Result.GetResult<Prisma.$IdiomasPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Envio<T extends Destinos$EnvioArgs<ExtArgs> = {}>(args?: Subset<T, Destinos$EnvioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvioPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destinos model
   */ 
  interface DestinosFieldRefs {
    readonly idDestino: FieldRef<"Destinos", 'Int'>
    readonly idIdioma: FieldRef<"Destinos", 'Int'>
    readonly nomeDestino: FieldRef<"Destinos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Destinos findUnique
   */
  export type DestinosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter, which Destinos to fetch.
     */
    where: DestinosWhereUniqueInput
  }

  /**
   * Destinos findUniqueOrThrow
   */
  export type DestinosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter, which Destinos to fetch.
     */
    where: DestinosWhereUniqueInput
  }

  /**
   * Destinos findFirst
   */
  export type DestinosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter, which Destinos to fetch.
     */
    where?: DestinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinos to fetch.
     */
    orderBy?: DestinosOrderByWithRelationInput | DestinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinos.
     */
    cursor?: DestinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinos.
     */
    distinct?: DestinosScalarFieldEnum | DestinosScalarFieldEnum[]
  }

  /**
   * Destinos findFirstOrThrow
   */
  export type DestinosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter, which Destinos to fetch.
     */
    where?: DestinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinos to fetch.
     */
    orderBy?: DestinosOrderByWithRelationInput | DestinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinos.
     */
    cursor?: DestinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinos.
     */
    distinct?: DestinosScalarFieldEnum | DestinosScalarFieldEnum[]
  }

  /**
   * Destinos findMany
   */
  export type DestinosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter, which Destinos to fetch.
     */
    where?: DestinosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinos to fetch.
     */
    orderBy?: DestinosOrderByWithRelationInput | DestinosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinos.
     */
    cursor?: DestinosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinos.
     */
    skip?: number
    distinct?: DestinosScalarFieldEnum | DestinosScalarFieldEnum[]
  }

  /**
   * Destinos create
   */
  export type DestinosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * The data needed to create a Destinos.
     */
    data: XOR<DestinosCreateInput, DestinosUncheckedCreateInput>
  }

  /**
   * Destinos createMany
   */
  export type DestinosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinos.
     */
    data: DestinosCreateManyInput | DestinosCreateManyInput[]
  }

  /**
   * Destinos update
   */
  export type DestinosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * The data needed to update a Destinos.
     */
    data: XOR<DestinosUpdateInput, DestinosUncheckedUpdateInput>
    /**
     * Choose, which Destinos to update.
     */
    where: DestinosWhereUniqueInput
  }

  /**
   * Destinos updateMany
   */
  export type DestinosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinos.
     */
    data: XOR<DestinosUpdateManyMutationInput, DestinosUncheckedUpdateManyInput>
    /**
     * Filter which Destinos to update
     */
    where?: DestinosWhereInput
  }

  /**
   * Destinos upsert
   */
  export type DestinosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * The filter to search for the Destinos to update in case it exists.
     */
    where: DestinosWhereUniqueInput
    /**
     * In case the Destinos found by the `where` argument doesn't exist, create a new Destinos with this data.
     */
    create: XOR<DestinosCreateInput, DestinosUncheckedCreateInput>
    /**
     * In case the Destinos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinosUpdateInput, DestinosUncheckedUpdateInput>
  }

  /**
   * Destinos delete
   */
  export type DestinosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
    /**
     * Filter which Destinos to delete.
     */
    where: DestinosWhereUniqueInput
  }

  /**
   * Destinos deleteMany
   */
  export type DestinosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinos to delete
     */
    where?: DestinosWhereInput
  }

  /**
   * Destinos.Envio
   */
  export type Destinos$EnvioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Envio
     */
    select?: EnvioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Envio
     */
    omit?: EnvioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvioInclude<ExtArgs> | null
    where?: EnvioWhereInput
    orderBy?: EnvioOrderByWithRelationInput | EnvioOrderByWithRelationInput[]
    cursor?: EnvioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvioScalarFieldEnum | EnvioScalarFieldEnum[]
  }

  /**
   * Destinos without action
   */
  export type DestinosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destinos
     */
    select?: DestinosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destinos
     */
    omit?: DestinosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinosInclude<ExtArgs> | null
  }


  /**
   * Model ContainerOp
   */

  export type AggregateContainerOp = {
    _count: ContainerOpCountAggregateOutputType | null
    _avg: ContainerOpAvgAggregateOutputType | null
    _sum: ContainerOpSumAggregateOutputType | null
    _min: ContainerOpMinAggregateOutputType | null
    _max: ContainerOpMaxAggregateOutputType | null
  }

  export type ContainerOpAvgAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpSumAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpMinAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpMaxAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpCountAggregateOutputType = {
    idContainer: number
    op: number
    _all: number
  }


  export type ContainerOpAvgAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpSumAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpMinAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpMaxAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpCountAggregateInputType = {
    idContainer?: true
    op?: true
    _all?: true
  }

  export type ContainerOpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContainerOp to aggregate.
     */
    where?: ContainerOpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOps to fetch.
     */
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerOpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContainerOps
    **/
    _count?: true | ContainerOpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerOpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerOpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerOpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerOpMaxAggregateInputType
  }

  export type GetContainerOpAggregateType<T extends ContainerOpAggregateArgs> = {
        [P in keyof T & keyof AggregateContainerOp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainerOp[P]>
      : GetScalarType<T[P], AggregateContainerOp[P]>
  }




  export type ContainerOpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpWhereInput
    orderBy?: ContainerOpOrderByWithAggregationInput | ContainerOpOrderByWithAggregationInput[]
    by: ContainerOpScalarFieldEnum[] | ContainerOpScalarFieldEnum
    having?: ContainerOpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerOpCountAggregateInputType | true
    _avg?: ContainerOpAvgAggregateInputType
    _sum?: ContainerOpSumAggregateInputType
    _min?: ContainerOpMinAggregateInputType
    _max?: ContainerOpMaxAggregateInputType
  }

  export type ContainerOpGroupByOutputType = {
    idContainer: number
    op: number
    _count: ContainerOpCountAggregateOutputType | null
    _avg: ContainerOpAvgAggregateOutputType | null
    _sum: ContainerOpSumAggregateOutputType | null
    _min: ContainerOpMinAggregateOutputType | null
    _max: ContainerOpMaxAggregateOutputType | null
  }

  type GetContainerOpGroupByPayload<T extends ContainerOpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerOpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerOpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerOpGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerOpGroupByOutputType[P]>
        }
      >
    >


  export type ContainerOpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idContainer?: boolean
    op?: boolean
    Container?: boolean | ContainerDefaultArgs<ExtArgs>
    Op?: boolean | OpDefaultArgs<ExtArgs>
    ContainerOpTam?: boolean | ContainerOp$ContainerOpTamArgs<ExtArgs>
    Conteudo?: boolean | ContainerOp$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerOpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["containerOp"]>



  export type ContainerOpSelectScalar = {
    idContainer?: boolean
    op?: boolean
  }

  export type ContainerOpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idContainer" | "op", ExtArgs["result"]["containerOp"]>
  export type ContainerOpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Container?: boolean | ContainerDefaultArgs<ExtArgs>
    Op?: boolean | OpDefaultArgs<ExtArgs>
    ContainerOpTam?: boolean | ContainerOp$ContainerOpTamArgs<ExtArgs>
    Conteudo?: boolean | ContainerOp$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerOpCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContainerOpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContainerOp"
    objects: {
      Container: Prisma.$ContainerPayload<ExtArgs>
      Op: Prisma.$OpPayload<ExtArgs>
      ContainerOpTam: Prisma.$ContainerOpTamPayload<ExtArgs>[]
      Conteudo: Prisma.$ConteudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idContainer: number
      op: number
    }, ExtArgs["result"]["containerOp"]>
    composites: {}
  }

  type ContainerOpGetPayload<S extends boolean | null | undefined | ContainerOpDefaultArgs> = $Result.GetResult<Prisma.$ContainerOpPayload, S>

  type ContainerOpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainerOpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerOpCountAggregateInputType | true
    }

  export interface ContainerOpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContainerOp'], meta: { name: 'ContainerOp' } }
    /**
     * Find zero or one ContainerOp that matches the filter.
     * @param {ContainerOpFindUniqueArgs} args - Arguments to find a ContainerOp
     * @example
     * // Get one ContainerOp
     * const containerOp = await prisma.containerOp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainerOpFindUniqueArgs>(args: SelectSubset<T, ContainerOpFindUniqueArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ContainerOp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainerOpFindUniqueOrThrowArgs} args - Arguments to find a ContainerOp
     * @example
     * // Get one ContainerOp
     * const containerOp = await prisma.containerOp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainerOpFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainerOpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ContainerOp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpFindFirstArgs} args - Arguments to find a ContainerOp
     * @example
     * // Get one ContainerOp
     * const containerOp = await prisma.containerOp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainerOpFindFirstArgs>(args?: SelectSubset<T, ContainerOpFindFirstArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ContainerOp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpFindFirstOrThrowArgs} args - Arguments to find a ContainerOp
     * @example
     * // Get one ContainerOp
     * const containerOp = await prisma.containerOp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainerOpFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainerOpFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ContainerOps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContainerOps
     * const containerOps = await prisma.containerOp.findMany()
     * 
     * // Get first 10 ContainerOps
     * const containerOps = await prisma.containerOp.findMany({ take: 10 })
     * 
     * // Only select the `idContainer`
     * const containerOpWithIdContainerOnly = await prisma.containerOp.findMany({ select: { idContainer: true } })
     * 
     */
    findMany<T extends ContainerOpFindManyArgs>(args?: SelectSubset<T, ContainerOpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ContainerOp.
     * @param {ContainerOpCreateArgs} args - Arguments to create a ContainerOp.
     * @example
     * // Create one ContainerOp
     * const ContainerOp = await prisma.containerOp.create({
     *   data: {
     *     // ... data to create a ContainerOp
     *   }
     * })
     * 
     */
    create<T extends ContainerOpCreateArgs>(args: SelectSubset<T, ContainerOpCreateArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ContainerOps.
     * @param {ContainerOpCreateManyArgs} args - Arguments to create many ContainerOps.
     * @example
     * // Create many ContainerOps
     * const containerOp = await prisma.containerOp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainerOpCreateManyArgs>(args?: SelectSubset<T, ContainerOpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContainerOp.
     * @param {ContainerOpDeleteArgs} args - Arguments to delete one ContainerOp.
     * @example
     * // Delete one ContainerOp
     * const ContainerOp = await prisma.containerOp.delete({
     *   where: {
     *     // ... filter to delete one ContainerOp
     *   }
     * })
     * 
     */
    delete<T extends ContainerOpDeleteArgs>(args: SelectSubset<T, ContainerOpDeleteArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ContainerOp.
     * @param {ContainerOpUpdateArgs} args - Arguments to update one ContainerOp.
     * @example
     * // Update one ContainerOp
     * const containerOp = await prisma.containerOp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainerOpUpdateArgs>(args: SelectSubset<T, ContainerOpUpdateArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ContainerOps.
     * @param {ContainerOpDeleteManyArgs} args - Arguments to filter ContainerOps to delete.
     * @example
     * // Delete a few ContainerOps
     * const { count } = await prisma.containerOp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainerOpDeleteManyArgs>(args?: SelectSubset<T, ContainerOpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContainerOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContainerOps
     * const containerOp = await prisma.containerOp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainerOpUpdateManyArgs>(args: SelectSubset<T, ContainerOpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContainerOp.
     * @param {ContainerOpUpsertArgs} args - Arguments to update or create a ContainerOp.
     * @example
     * // Update or create a ContainerOp
     * const containerOp = await prisma.containerOp.upsert({
     *   create: {
     *     // ... data to create a ContainerOp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContainerOp we want to update
     *   }
     * })
     */
    upsert<T extends ContainerOpUpsertArgs>(args: SelectSubset<T, ContainerOpUpsertArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ContainerOps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpCountArgs} args - Arguments to filter ContainerOps to count.
     * @example
     * // Count the number of ContainerOps
     * const count = await prisma.containerOp.count({
     *   where: {
     *     // ... the filter for the ContainerOps we want to count
     *   }
     * })
    **/
    count<T extends ContainerOpCountArgs>(
      args?: Subset<T, ContainerOpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerOpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContainerOp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerOpAggregateArgs>(args: Subset<T, ContainerOpAggregateArgs>): Prisma.PrismaPromise<GetContainerOpAggregateType<T>>

    /**
     * Group by ContainerOp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerOpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerOpGroupByArgs['orderBy'] }
        : { orderBy?: ContainerOpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerOpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerOpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContainerOp model
   */
  readonly fields: ContainerOpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContainerOp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerOpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Container<T extends ContainerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerDefaultArgs<ExtArgs>>): Prisma__ContainerClient<$Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Op<T extends OpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpDefaultArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    ContainerOpTam<T extends ContainerOp$ContainerOpTamArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOp$ContainerOpTamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Conteudo<T extends ContainerOp$ConteudoArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOp$ConteudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContainerOp model
   */ 
  interface ContainerOpFieldRefs {
    readonly idContainer: FieldRef<"ContainerOp", 'Int'>
    readonly op: FieldRef<"ContainerOp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContainerOp findUnique
   */
  export type ContainerOpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOp to fetch.
     */
    where: ContainerOpWhereUniqueInput
  }

  /**
   * ContainerOp findUniqueOrThrow
   */
  export type ContainerOpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOp to fetch.
     */
    where: ContainerOpWhereUniqueInput
  }

  /**
   * ContainerOp findFirst
   */
  export type ContainerOpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOp to fetch.
     */
    where?: ContainerOpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOps to fetch.
     */
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContainerOps.
     */
    cursor?: ContainerOpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContainerOps.
     */
    distinct?: ContainerOpScalarFieldEnum | ContainerOpScalarFieldEnum[]
  }

  /**
   * ContainerOp findFirstOrThrow
   */
  export type ContainerOpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOp to fetch.
     */
    where?: ContainerOpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOps to fetch.
     */
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContainerOps.
     */
    cursor?: ContainerOpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContainerOps.
     */
    distinct?: ContainerOpScalarFieldEnum | ContainerOpScalarFieldEnum[]
  }

  /**
   * ContainerOp findMany
   */
  export type ContainerOpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOps to fetch.
     */
    where?: ContainerOpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOps to fetch.
     */
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContainerOps.
     */
    cursor?: ContainerOpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOps.
     */
    skip?: number
    distinct?: ContainerOpScalarFieldEnum | ContainerOpScalarFieldEnum[]
  }

  /**
   * ContainerOp create
   */
  export type ContainerOpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * The data needed to create a ContainerOp.
     */
    data: XOR<ContainerOpCreateInput, ContainerOpUncheckedCreateInput>
  }

  /**
   * ContainerOp createMany
   */
  export type ContainerOpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContainerOps.
     */
    data: ContainerOpCreateManyInput | ContainerOpCreateManyInput[]
  }

  /**
   * ContainerOp update
   */
  export type ContainerOpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * The data needed to update a ContainerOp.
     */
    data: XOR<ContainerOpUpdateInput, ContainerOpUncheckedUpdateInput>
    /**
     * Choose, which ContainerOp to update.
     */
    where: ContainerOpWhereUniqueInput
  }

  /**
   * ContainerOp updateMany
   */
  export type ContainerOpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContainerOps.
     */
    data: XOR<ContainerOpUpdateManyMutationInput, ContainerOpUncheckedUpdateManyInput>
    /**
     * Filter which ContainerOps to update
     */
    where?: ContainerOpWhereInput
  }

  /**
   * ContainerOp upsert
   */
  export type ContainerOpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * The filter to search for the ContainerOp to update in case it exists.
     */
    where: ContainerOpWhereUniqueInput
    /**
     * In case the ContainerOp found by the `where` argument doesn't exist, create a new ContainerOp with this data.
     */
    create: XOR<ContainerOpCreateInput, ContainerOpUncheckedCreateInput>
    /**
     * In case the ContainerOp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerOpUpdateInput, ContainerOpUncheckedUpdateInput>
  }

  /**
   * ContainerOp delete
   */
  export type ContainerOpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    /**
     * Filter which ContainerOp to delete.
     */
    where: ContainerOpWhereUniqueInput
  }

  /**
   * ContainerOp deleteMany
   */
  export type ContainerOpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContainerOps to delete
     */
    where?: ContainerOpWhereInput
  }

  /**
   * ContainerOp.ContainerOpTam
   */
  export type ContainerOp$ContainerOpTamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    where?: ContainerOpTamWhereInput
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    cursor?: ContainerOpTamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerOpTamScalarFieldEnum | ContainerOpTamScalarFieldEnum[]
  }

  /**
   * ContainerOp.Conteudo
   */
  export type ContainerOp$ConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    cursor?: ConteudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * ContainerOp without action
   */
  export type ContainerOpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
  }


  /**
   * Model ContainerOpTam
   */

  export type AggregateContainerOpTam = {
    _count: ContainerOpTamCountAggregateOutputType | null
    _avg: ContainerOpTamAvgAggregateOutputType | null
    _sum: ContainerOpTamSumAggregateOutputType | null
    _min: ContainerOpTamMinAggregateOutputType | null
    _max: ContainerOpTamMaxAggregateOutputType | null
  }

  export type ContainerOpTamAvgAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpTamSumAggregateOutputType = {
    idContainer: number | null
    op: number | null
  }

  export type ContainerOpTamMinAggregateOutputType = {
    idContainer: number | null
    op: number | null
    tam: string | null
  }

  export type ContainerOpTamMaxAggregateOutputType = {
    idContainer: number | null
    op: number | null
    tam: string | null
  }

  export type ContainerOpTamCountAggregateOutputType = {
    idContainer: number
    op: number
    tam: number
    _all: number
  }


  export type ContainerOpTamAvgAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpTamSumAggregateInputType = {
    idContainer?: true
    op?: true
  }

  export type ContainerOpTamMinAggregateInputType = {
    idContainer?: true
    op?: true
    tam?: true
  }

  export type ContainerOpTamMaxAggregateInputType = {
    idContainer?: true
    op?: true
    tam?: true
  }

  export type ContainerOpTamCountAggregateInputType = {
    idContainer?: true
    op?: true
    tam?: true
    _all?: true
  }

  export type ContainerOpTamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContainerOpTam to aggregate.
     */
    where?: ContainerOpTamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOpTams to fetch.
     */
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContainerOpTamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOpTams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOpTams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContainerOpTams
    **/
    _count?: true | ContainerOpTamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContainerOpTamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContainerOpTamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContainerOpTamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContainerOpTamMaxAggregateInputType
  }

  export type GetContainerOpTamAggregateType<T extends ContainerOpTamAggregateArgs> = {
        [P in keyof T & keyof AggregateContainerOpTam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContainerOpTam[P]>
      : GetScalarType<T[P], AggregateContainerOpTam[P]>
  }




  export type ContainerOpTamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContainerOpTamWhereInput
    orderBy?: ContainerOpTamOrderByWithAggregationInput | ContainerOpTamOrderByWithAggregationInput[]
    by: ContainerOpTamScalarFieldEnum[] | ContainerOpTamScalarFieldEnum
    having?: ContainerOpTamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContainerOpTamCountAggregateInputType | true
    _avg?: ContainerOpTamAvgAggregateInputType
    _sum?: ContainerOpTamSumAggregateInputType
    _min?: ContainerOpTamMinAggregateInputType
    _max?: ContainerOpTamMaxAggregateInputType
  }

  export type ContainerOpTamGroupByOutputType = {
    idContainer: number
    op: number
    tam: string
    _count: ContainerOpTamCountAggregateOutputType | null
    _avg: ContainerOpTamAvgAggregateOutputType | null
    _sum: ContainerOpTamSumAggregateOutputType | null
    _min: ContainerOpTamMinAggregateOutputType | null
    _max: ContainerOpTamMaxAggregateOutputType | null
  }

  type GetContainerOpTamGroupByPayload<T extends ContainerOpTamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContainerOpTamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContainerOpTamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContainerOpTamGroupByOutputType[P]>
            : GetScalarType<T[P], ContainerOpTamGroupByOutputType[P]>
        }
      >
    >


  export type ContainerOpTamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idContainer?: boolean
    op?: boolean
    tam?: boolean
    ContainerOp?: boolean | ContainerOpDefaultArgs<ExtArgs>
    OpTamanho?: boolean | OpTamanhoDefaultArgs<ExtArgs>
    Conteudo?: boolean | ContainerOpTam$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerOpTamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["containerOpTam"]>



  export type ContainerOpTamSelectScalar = {
    idContainer?: boolean
    op?: boolean
    tam?: boolean
  }

  export type ContainerOpTamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idContainer" | "op" | "tam", ExtArgs["result"]["containerOpTam"]>
  export type ContainerOpTamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOp?: boolean | ContainerOpDefaultArgs<ExtArgs>
    OpTamanho?: boolean | OpTamanhoDefaultArgs<ExtArgs>
    Conteudo?: boolean | ContainerOpTam$ConteudoArgs<ExtArgs>
    _count?: boolean | ContainerOpTamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ContainerOpTamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContainerOpTam"
    objects: {
      ContainerOp: Prisma.$ContainerOpPayload<ExtArgs>
      OpTamanho: Prisma.$OpTamanhoPayload<ExtArgs>
      Conteudo: Prisma.$ConteudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idContainer: number
      op: number
      tam: string
    }, ExtArgs["result"]["containerOpTam"]>
    composites: {}
  }

  type ContainerOpTamGetPayload<S extends boolean | null | undefined | ContainerOpTamDefaultArgs> = $Result.GetResult<Prisma.$ContainerOpTamPayload, S>

  type ContainerOpTamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContainerOpTamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContainerOpTamCountAggregateInputType | true
    }

  export interface ContainerOpTamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContainerOpTam'], meta: { name: 'ContainerOpTam' } }
    /**
     * Find zero or one ContainerOpTam that matches the filter.
     * @param {ContainerOpTamFindUniqueArgs} args - Arguments to find a ContainerOpTam
     * @example
     * // Get one ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContainerOpTamFindUniqueArgs>(args: SelectSubset<T, ContainerOpTamFindUniqueArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ContainerOpTam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContainerOpTamFindUniqueOrThrowArgs} args - Arguments to find a ContainerOpTam
     * @example
     * // Get one ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContainerOpTamFindUniqueOrThrowArgs>(args: SelectSubset<T, ContainerOpTamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ContainerOpTam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamFindFirstArgs} args - Arguments to find a ContainerOpTam
     * @example
     * // Get one ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContainerOpTamFindFirstArgs>(args?: SelectSubset<T, ContainerOpTamFindFirstArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ContainerOpTam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamFindFirstOrThrowArgs} args - Arguments to find a ContainerOpTam
     * @example
     * // Get one ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContainerOpTamFindFirstOrThrowArgs>(args?: SelectSubset<T, ContainerOpTamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ContainerOpTams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContainerOpTams
     * const containerOpTams = await prisma.containerOpTam.findMany()
     * 
     * // Get first 10 ContainerOpTams
     * const containerOpTams = await prisma.containerOpTam.findMany({ take: 10 })
     * 
     * // Only select the `idContainer`
     * const containerOpTamWithIdContainerOnly = await prisma.containerOpTam.findMany({ select: { idContainer: true } })
     * 
     */
    findMany<T extends ContainerOpTamFindManyArgs>(args?: SelectSubset<T, ContainerOpTamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ContainerOpTam.
     * @param {ContainerOpTamCreateArgs} args - Arguments to create a ContainerOpTam.
     * @example
     * // Create one ContainerOpTam
     * const ContainerOpTam = await prisma.containerOpTam.create({
     *   data: {
     *     // ... data to create a ContainerOpTam
     *   }
     * })
     * 
     */
    create<T extends ContainerOpTamCreateArgs>(args: SelectSubset<T, ContainerOpTamCreateArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ContainerOpTams.
     * @param {ContainerOpTamCreateManyArgs} args - Arguments to create many ContainerOpTams.
     * @example
     * // Create many ContainerOpTams
     * const containerOpTam = await prisma.containerOpTam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContainerOpTamCreateManyArgs>(args?: SelectSubset<T, ContainerOpTamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContainerOpTam.
     * @param {ContainerOpTamDeleteArgs} args - Arguments to delete one ContainerOpTam.
     * @example
     * // Delete one ContainerOpTam
     * const ContainerOpTam = await prisma.containerOpTam.delete({
     *   where: {
     *     // ... filter to delete one ContainerOpTam
     *   }
     * })
     * 
     */
    delete<T extends ContainerOpTamDeleteArgs>(args: SelectSubset<T, ContainerOpTamDeleteArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ContainerOpTam.
     * @param {ContainerOpTamUpdateArgs} args - Arguments to update one ContainerOpTam.
     * @example
     * // Update one ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContainerOpTamUpdateArgs>(args: SelectSubset<T, ContainerOpTamUpdateArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ContainerOpTams.
     * @param {ContainerOpTamDeleteManyArgs} args - Arguments to filter ContainerOpTams to delete.
     * @example
     * // Delete a few ContainerOpTams
     * const { count } = await prisma.containerOpTam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContainerOpTamDeleteManyArgs>(args?: SelectSubset<T, ContainerOpTamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContainerOpTams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContainerOpTams
     * const containerOpTam = await prisma.containerOpTam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContainerOpTamUpdateManyArgs>(args: SelectSubset<T, ContainerOpTamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContainerOpTam.
     * @param {ContainerOpTamUpsertArgs} args - Arguments to update or create a ContainerOpTam.
     * @example
     * // Update or create a ContainerOpTam
     * const containerOpTam = await prisma.containerOpTam.upsert({
     *   create: {
     *     // ... data to create a ContainerOpTam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContainerOpTam we want to update
     *   }
     * })
     */
    upsert<T extends ContainerOpTamUpsertArgs>(args: SelectSubset<T, ContainerOpTamUpsertArgs<ExtArgs>>): Prisma__ContainerOpTamClient<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ContainerOpTams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamCountArgs} args - Arguments to filter ContainerOpTams to count.
     * @example
     * // Count the number of ContainerOpTams
     * const count = await prisma.containerOpTam.count({
     *   where: {
     *     // ... the filter for the ContainerOpTams we want to count
     *   }
     * })
    **/
    count<T extends ContainerOpTamCountArgs>(
      args?: Subset<T, ContainerOpTamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContainerOpTamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContainerOpTam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContainerOpTamAggregateArgs>(args: Subset<T, ContainerOpTamAggregateArgs>): Prisma.PrismaPromise<GetContainerOpTamAggregateType<T>>

    /**
     * Group by ContainerOpTam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContainerOpTamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContainerOpTamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContainerOpTamGroupByArgs['orderBy'] }
        : { orderBy?: ContainerOpTamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContainerOpTamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerOpTamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContainerOpTam model
   */
  readonly fields: ContainerOpTamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContainerOpTam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContainerOpTamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ContainerOp<T extends ContainerOpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOpDefaultArgs<ExtArgs>>): Prisma__ContainerOpClient<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    OpTamanho<T extends OpTamanhoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpTamanhoDefaultArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    Conteudo<T extends ContainerOpTam$ConteudoArgs<ExtArgs> = {}>(args?: Subset<T, ContainerOpTam$ConteudoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConteudoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContainerOpTam model
   */ 
  interface ContainerOpTamFieldRefs {
    readonly idContainer: FieldRef<"ContainerOpTam", 'Int'>
    readonly op: FieldRef<"ContainerOpTam", 'Int'>
    readonly tam: FieldRef<"ContainerOpTam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ContainerOpTam findUnique
   */
  export type ContainerOpTamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOpTam to fetch.
     */
    where: ContainerOpTamWhereUniqueInput
  }

  /**
   * ContainerOpTam findUniqueOrThrow
   */
  export type ContainerOpTamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOpTam to fetch.
     */
    where: ContainerOpTamWhereUniqueInput
  }

  /**
   * ContainerOpTam findFirst
   */
  export type ContainerOpTamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOpTam to fetch.
     */
    where?: ContainerOpTamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOpTams to fetch.
     */
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContainerOpTams.
     */
    cursor?: ContainerOpTamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOpTams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOpTams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContainerOpTams.
     */
    distinct?: ContainerOpTamScalarFieldEnum | ContainerOpTamScalarFieldEnum[]
  }

  /**
   * ContainerOpTam findFirstOrThrow
   */
  export type ContainerOpTamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOpTam to fetch.
     */
    where?: ContainerOpTamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOpTams to fetch.
     */
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContainerOpTams.
     */
    cursor?: ContainerOpTamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOpTams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOpTams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContainerOpTams.
     */
    distinct?: ContainerOpTamScalarFieldEnum | ContainerOpTamScalarFieldEnum[]
  }

  /**
   * ContainerOpTam findMany
   */
  export type ContainerOpTamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter, which ContainerOpTams to fetch.
     */
    where?: ContainerOpTamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContainerOpTams to fetch.
     */
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContainerOpTams.
     */
    cursor?: ContainerOpTamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContainerOpTams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContainerOpTams.
     */
    skip?: number
    distinct?: ContainerOpTamScalarFieldEnum | ContainerOpTamScalarFieldEnum[]
  }

  /**
   * ContainerOpTam create
   */
  export type ContainerOpTamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * The data needed to create a ContainerOpTam.
     */
    data: XOR<ContainerOpTamCreateInput, ContainerOpTamUncheckedCreateInput>
  }

  /**
   * ContainerOpTam createMany
   */
  export type ContainerOpTamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContainerOpTams.
     */
    data: ContainerOpTamCreateManyInput | ContainerOpTamCreateManyInput[]
  }

  /**
   * ContainerOpTam update
   */
  export type ContainerOpTamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * The data needed to update a ContainerOpTam.
     */
    data: XOR<ContainerOpTamUpdateInput, ContainerOpTamUncheckedUpdateInput>
    /**
     * Choose, which ContainerOpTam to update.
     */
    where: ContainerOpTamWhereUniqueInput
  }

  /**
   * ContainerOpTam updateMany
   */
  export type ContainerOpTamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContainerOpTams.
     */
    data: XOR<ContainerOpTamUpdateManyMutationInput, ContainerOpTamUncheckedUpdateManyInput>
    /**
     * Filter which ContainerOpTams to update
     */
    where?: ContainerOpTamWhereInput
  }

  /**
   * ContainerOpTam upsert
   */
  export type ContainerOpTamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * The filter to search for the ContainerOpTam to update in case it exists.
     */
    where: ContainerOpTamWhereUniqueInput
    /**
     * In case the ContainerOpTam found by the `where` argument doesn't exist, create a new ContainerOpTam with this data.
     */
    create: XOR<ContainerOpTamCreateInput, ContainerOpTamUncheckedCreateInput>
    /**
     * In case the ContainerOpTam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContainerOpTamUpdateInput, ContainerOpTamUncheckedUpdateInput>
  }

  /**
   * ContainerOpTam delete
   */
  export type ContainerOpTamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    /**
     * Filter which ContainerOpTam to delete.
     */
    where: ContainerOpTamWhereUniqueInput
  }

  /**
   * ContainerOpTam deleteMany
   */
  export type ContainerOpTamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContainerOpTams to delete
     */
    where?: ContainerOpTamWhereInput
  }

  /**
   * ContainerOpTam.Conteudo
   */
  export type ContainerOpTam$ConteudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conteudo
     */
    select?: ConteudoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conteudo
     */
    omit?: ConteudoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConteudoInclude<ExtArgs> | null
    where?: ConteudoWhereInput
    orderBy?: ConteudoOrderByWithRelationInput | ConteudoOrderByWithRelationInput[]
    cursor?: ConteudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConteudoScalarFieldEnum | ConteudoScalarFieldEnum[]
  }

  /**
   * ContainerOpTam without action
   */
  export type ContainerOpTamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
  }


  /**
   * Model Op
   */

  export type AggregateOp = {
    _count: OpCountAggregateOutputType | null
    _avg: OpAvgAggregateOutputType | null
    _sum: OpSumAggregateOutputType | null
    _min: OpMinAggregateOutputType | null
    _max: OpMaxAggregateOutputType | null
  }

  export type OpAvgAggregateOutputType = {
    op: number | null
  }

  export type OpSumAggregateOutputType = {
    op: number | null
  }

  export type OpMinAggregateOutputType = {
    op: number | null
    ref: string | null
    modeloDesc: string | null
    modelo: string | null
    cor: string | null
    pedido: string | null
    norma: string | null
  }

  export type OpMaxAggregateOutputType = {
    op: number | null
    ref: string | null
    modeloDesc: string | null
    modelo: string | null
    cor: string | null
    pedido: string | null
    norma: string | null
  }

  export type OpCountAggregateOutputType = {
    op: number
    ref: number
    modeloDesc: number
    modelo: number
    cor: number
    pedido: number
    norma: number
    _all: number
  }


  export type OpAvgAggregateInputType = {
    op?: true
  }

  export type OpSumAggregateInputType = {
    op?: true
  }

  export type OpMinAggregateInputType = {
    op?: true
    ref?: true
    modeloDesc?: true
    modelo?: true
    cor?: true
    pedido?: true
    norma?: true
  }

  export type OpMaxAggregateInputType = {
    op?: true
    ref?: true
    modeloDesc?: true
    modelo?: true
    cor?: true
    pedido?: true
    norma?: true
  }

  export type OpCountAggregateInputType = {
    op?: true
    ref?: true
    modeloDesc?: true
    modelo?: true
    cor?: true
    pedido?: true
    norma?: true
    _all?: true
  }

  export type OpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Op to aggregate.
     */
    where?: OpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ops to fetch.
     */
    orderBy?: OpOrderByWithRelationInput | OpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ops
    **/
    _count?: true | OpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpMaxAggregateInputType
  }

  export type GetOpAggregateType<T extends OpAggregateArgs> = {
        [P in keyof T & keyof AggregateOp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOp[P]>
      : GetScalarType<T[P], AggregateOp[P]>
  }




  export type OpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpWhereInput
    orderBy?: OpOrderByWithAggregationInput | OpOrderByWithAggregationInput[]
    by: OpScalarFieldEnum[] | OpScalarFieldEnum
    having?: OpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpCountAggregateInputType | true
    _avg?: OpAvgAggregateInputType
    _sum?: OpSumAggregateInputType
    _min?: OpMinAggregateInputType
    _max?: OpMaxAggregateInputType
  }

  export type OpGroupByOutputType = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    _count: OpCountAggregateOutputType | null
    _avg: OpAvgAggregateOutputType | null
    _sum: OpSumAggregateOutputType | null
    _min: OpMinAggregateOutputType | null
    _max: OpMaxAggregateOutputType | null
  }

  type GetOpGroupByPayload<T extends OpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpGroupByOutputType[P]>
            : GetScalarType<T[P], OpGroupByOutputType[P]>
        }
      >
    >


  export type OpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    op?: boolean
    ref?: boolean
    modeloDesc?: boolean
    modelo?: boolean
    cor?: boolean
    pedido?: boolean
    norma?: boolean
    ContainerOp?: boolean | Op$ContainerOpArgs<ExtArgs>
    OpTamanho?: boolean | Op$OpTamanhoArgs<ExtArgs>
    _count?: boolean | OpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["op"]>



  export type OpSelectScalar = {
    op?: boolean
    ref?: boolean
    modeloDesc?: boolean
    modelo?: boolean
    cor?: boolean
    pedido?: boolean
    norma?: boolean
  }

  export type OpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"op" | "ref" | "modeloDesc" | "modelo" | "cor" | "pedido" | "norma", ExtArgs["result"]["op"]>
  export type OpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOp?: boolean | Op$ContainerOpArgs<ExtArgs>
    OpTamanho?: boolean | Op$OpTamanhoArgs<ExtArgs>
    _count?: boolean | OpCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Op"
    objects: {
      ContainerOp: Prisma.$ContainerOpPayload<ExtArgs>[]
      OpTamanho: Prisma.$OpTamanhoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      op: number
      ref: string
      modeloDesc: string
      modelo: string
      cor: string
      pedido: string
      norma: string
    }, ExtArgs["result"]["op"]>
    composites: {}
  }

  type OpGetPayload<S extends boolean | null | undefined | OpDefaultArgs> = $Result.GetResult<Prisma.$OpPayload, S>

  type OpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpCountAggregateInputType | true
    }

  export interface OpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Op'], meta: { name: 'Op' } }
    /**
     * Find zero or one Op that matches the filter.
     * @param {OpFindUniqueArgs} args - Arguments to find a Op
     * @example
     * // Get one Op
     * const op = await prisma.op.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpFindUniqueArgs>(args: SelectSubset<T, OpFindUniqueArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Op that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpFindUniqueOrThrowArgs} args - Arguments to find a Op
     * @example
     * // Get one Op
     * const op = await prisma.op.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpFindUniqueOrThrowArgs>(args: SelectSubset<T, OpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Op that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpFindFirstArgs} args - Arguments to find a Op
     * @example
     * // Get one Op
     * const op = await prisma.op.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpFindFirstArgs>(args?: SelectSubset<T, OpFindFirstArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Op that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpFindFirstOrThrowArgs} args - Arguments to find a Op
     * @example
     * // Get one Op
     * const op = await prisma.op.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpFindFirstOrThrowArgs>(args?: SelectSubset<T, OpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Ops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ops
     * const ops = await prisma.op.findMany()
     * 
     * // Get first 10 Ops
     * const ops = await prisma.op.findMany({ take: 10 })
     * 
     * // Only select the `op`
     * const opWithOpOnly = await prisma.op.findMany({ select: { op: true } })
     * 
     */
    findMany<T extends OpFindManyArgs>(args?: SelectSubset<T, OpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Op.
     * @param {OpCreateArgs} args - Arguments to create a Op.
     * @example
     * // Create one Op
     * const Op = await prisma.op.create({
     *   data: {
     *     // ... data to create a Op
     *   }
     * })
     * 
     */
    create<T extends OpCreateArgs>(args: SelectSubset<T, OpCreateArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Ops.
     * @param {OpCreateManyArgs} args - Arguments to create many Ops.
     * @example
     * // Create many Ops
     * const op = await prisma.op.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpCreateManyArgs>(args?: SelectSubset<T, OpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Op.
     * @param {OpDeleteArgs} args - Arguments to delete one Op.
     * @example
     * // Delete one Op
     * const Op = await prisma.op.delete({
     *   where: {
     *     // ... filter to delete one Op
     *   }
     * })
     * 
     */
    delete<T extends OpDeleteArgs>(args: SelectSubset<T, OpDeleteArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Op.
     * @param {OpUpdateArgs} args - Arguments to update one Op.
     * @example
     * // Update one Op
     * const op = await prisma.op.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpUpdateArgs>(args: SelectSubset<T, OpUpdateArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Ops.
     * @param {OpDeleteManyArgs} args - Arguments to filter Ops to delete.
     * @example
     * // Delete a few Ops
     * const { count } = await prisma.op.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpDeleteManyArgs>(args?: SelectSubset<T, OpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ops
     * const op = await prisma.op.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpUpdateManyArgs>(args: SelectSubset<T, OpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Op.
     * @param {OpUpsertArgs} args - Arguments to update or create a Op.
     * @example
     * // Update or create a Op
     * const op = await prisma.op.upsert({
     *   create: {
     *     // ... data to create a Op
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Op we want to update
     *   }
     * })
     */
    upsert<T extends OpUpsertArgs>(args: SelectSubset<T, OpUpsertArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Ops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpCountArgs} args - Arguments to filter Ops to count.
     * @example
     * // Count the number of Ops
     * const count = await prisma.op.count({
     *   where: {
     *     // ... the filter for the Ops we want to count
     *   }
     * })
    **/
    count<T extends OpCountArgs>(
      args?: Subset<T, OpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Op.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpAggregateArgs>(args: Subset<T, OpAggregateArgs>): Prisma.PrismaPromise<GetOpAggregateType<T>>

    /**
     * Group by Op.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpGroupByArgs['orderBy'] }
        : { orderBy?: OpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Op model
   */
  readonly fields: OpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Op.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ContainerOp<T extends Op$ContainerOpArgs<ExtArgs> = {}>(args?: Subset<T, Op$ContainerOpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    OpTamanho<T extends Op$OpTamanhoArgs<ExtArgs> = {}>(args?: Subset<T, Op$OpTamanhoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Op model
   */ 
  interface OpFieldRefs {
    readonly op: FieldRef<"Op", 'Int'>
    readonly ref: FieldRef<"Op", 'String'>
    readonly modeloDesc: FieldRef<"Op", 'String'>
    readonly modelo: FieldRef<"Op", 'String'>
    readonly cor: FieldRef<"Op", 'String'>
    readonly pedido: FieldRef<"Op", 'String'>
    readonly norma: FieldRef<"Op", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Op findUnique
   */
  export type OpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter, which Op to fetch.
     */
    where: OpWhereUniqueInput
  }

  /**
   * Op findUniqueOrThrow
   */
  export type OpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter, which Op to fetch.
     */
    where: OpWhereUniqueInput
  }

  /**
   * Op findFirst
   */
  export type OpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter, which Op to fetch.
     */
    where?: OpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ops to fetch.
     */
    orderBy?: OpOrderByWithRelationInput | OpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ops.
     */
    cursor?: OpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ops.
     */
    distinct?: OpScalarFieldEnum | OpScalarFieldEnum[]
  }

  /**
   * Op findFirstOrThrow
   */
  export type OpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter, which Op to fetch.
     */
    where?: OpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ops to fetch.
     */
    orderBy?: OpOrderByWithRelationInput | OpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ops.
     */
    cursor?: OpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ops.
     */
    distinct?: OpScalarFieldEnum | OpScalarFieldEnum[]
  }

  /**
   * Op findMany
   */
  export type OpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter, which Ops to fetch.
     */
    where?: OpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ops to fetch.
     */
    orderBy?: OpOrderByWithRelationInput | OpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ops.
     */
    cursor?: OpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ops.
     */
    skip?: number
    distinct?: OpScalarFieldEnum | OpScalarFieldEnum[]
  }

  /**
   * Op create
   */
  export type OpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * The data needed to create a Op.
     */
    data: XOR<OpCreateInput, OpUncheckedCreateInput>
  }

  /**
   * Op createMany
   */
  export type OpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ops.
     */
    data: OpCreateManyInput | OpCreateManyInput[]
  }

  /**
   * Op update
   */
  export type OpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * The data needed to update a Op.
     */
    data: XOR<OpUpdateInput, OpUncheckedUpdateInput>
    /**
     * Choose, which Op to update.
     */
    where: OpWhereUniqueInput
  }

  /**
   * Op updateMany
   */
  export type OpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ops.
     */
    data: XOR<OpUpdateManyMutationInput, OpUncheckedUpdateManyInput>
    /**
     * Filter which Ops to update
     */
    where?: OpWhereInput
  }

  /**
   * Op upsert
   */
  export type OpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * The filter to search for the Op to update in case it exists.
     */
    where: OpWhereUniqueInput
    /**
     * In case the Op found by the `where` argument doesn't exist, create a new Op with this data.
     */
    create: XOR<OpCreateInput, OpUncheckedCreateInput>
    /**
     * In case the Op was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpUpdateInput, OpUncheckedUpdateInput>
  }

  /**
   * Op delete
   */
  export type OpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
    /**
     * Filter which Op to delete.
     */
    where: OpWhereUniqueInput
  }

  /**
   * Op deleteMany
   */
  export type OpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ops to delete
     */
    where?: OpWhereInput
  }

  /**
   * Op.ContainerOp
   */
  export type Op$ContainerOpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOp
     */
    select?: ContainerOpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOp
     */
    omit?: ContainerOpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpInclude<ExtArgs> | null
    where?: ContainerOpWhereInput
    orderBy?: ContainerOpOrderByWithRelationInput | ContainerOpOrderByWithRelationInput[]
    cursor?: ContainerOpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerOpScalarFieldEnum | ContainerOpScalarFieldEnum[]
  }

  /**
   * Op.OpTamanho
   */
  export type Op$OpTamanhoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    where?: OpTamanhoWhereInput
    orderBy?: OpTamanhoOrderByWithRelationInput | OpTamanhoOrderByWithRelationInput[]
    cursor?: OpTamanhoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpTamanhoScalarFieldEnum | OpTamanhoScalarFieldEnum[]
  }

  /**
   * Op without action
   */
  export type OpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Op
     */
    select?: OpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Op
     */
    omit?: OpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpInclude<ExtArgs> | null
  }


  /**
   * Model OpTamanho
   */

  export type AggregateOpTamanho = {
    _count: OpTamanhoCountAggregateOutputType | null
    _avg: OpTamanhoAvgAggregateOutputType | null
    _sum: OpTamanhoSumAggregateOutputType | null
    _min: OpTamanhoMinAggregateOutputType | null
    _max: OpTamanhoMaxAggregateOutputType | null
  }

  export type OpTamanhoAvgAggregateOutputType = {
    op: number | null
    ordem: number | null
    qtt: number | null
  }

  export type OpTamanhoSumAggregateOutputType = {
    op: number | null
    ordem: number | null
    qtt: number | null
  }

  export type OpTamanhoMinAggregateOutputType = {
    op: number | null
    tam: string | null
    ordem: number | null
    qtt: number | null
  }

  export type OpTamanhoMaxAggregateOutputType = {
    op: number | null
    tam: string | null
    ordem: number | null
    qtt: number | null
  }

  export type OpTamanhoCountAggregateOutputType = {
    op: number
    tam: number
    ordem: number
    qtt: number
    _all: number
  }


  export type OpTamanhoAvgAggregateInputType = {
    op?: true
    ordem?: true
    qtt?: true
  }

  export type OpTamanhoSumAggregateInputType = {
    op?: true
    ordem?: true
    qtt?: true
  }

  export type OpTamanhoMinAggregateInputType = {
    op?: true
    tam?: true
    ordem?: true
    qtt?: true
  }

  export type OpTamanhoMaxAggregateInputType = {
    op?: true
    tam?: true
    ordem?: true
    qtt?: true
  }

  export type OpTamanhoCountAggregateInputType = {
    op?: true
    tam?: true
    ordem?: true
    qtt?: true
    _all?: true
  }

  export type OpTamanhoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpTamanho to aggregate.
     */
    where?: OpTamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpTamanhos to fetch.
     */
    orderBy?: OpTamanhoOrderByWithRelationInput | OpTamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpTamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpTamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpTamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OpTamanhos
    **/
    _count?: true | OpTamanhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpTamanhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpTamanhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpTamanhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpTamanhoMaxAggregateInputType
  }

  export type GetOpTamanhoAggregateType<T extends OpTamanhoAggregateArgs> = {
        [P in keyof T & keyof AggregateOpTamanho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpTamanho[P]>
      : GetScalarType<T[P], AggregateOpTamanho[P]>
  }




  export type OpTamanhoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpTamanhoWhereInput
    orderBy?: OpTamanhoOrderByWithAggregationInput | OpTamanhoOrderByWithAggregationInput[]
    by: OpTamanhoScalarFieldEnum[] | OpTamanhoScalarFieldEnum
    having?: OpTamanhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpTamanhoCountAggregateInputType | true
    _avg?: OpTamanhoAvgAggregateInputType
    _sum?: OpTamanhoSumAggregateInputType
    _min?: OpTamanhoMinAggregateInputType
    _max?: OpTamanhoMaxAggregateInputType
  }

  export type OpTamanhoGroupByOutputType = {
    op: number
    tam: string
    ordem: number
    qtt: number
    _count: OpTamanhoCountAggregateOutputType | null
    _avg: OpTamanhoAvgAggregateOutputType | null
    _sum: OpTamanhoSumAggregateOutputType | null
    _min: OpTamanhoMinAggregateOutputType | null
    _max: OpTamanhoMaxAggregateOutputType | null
  }

  type GetOpTamanhoGroupByPayload<T extends OpTamanhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpTamanhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpTamanhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpTamanhoGroupByOutputType[P]>
            : GetScalarType<T[P], OpTamanhoGroupByOutputType[P]>
        }
      >
    >


  export type OpTamanhoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    op?: boolean
    tam?: boolean
    ordem?: boolean
    qtt?: boolean
    ContainerOpTam?: boolean | OpTamanho$ContainerOpTamArgs<ExtArgs>
    Op?: boolean | OpDefaultArgs<ExtArgs>
    _count?: boolean | OpTamanhoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opTamanho"]>



  export type OpTamanhoSelectScalar = {
    op?: boolean
    tam?: boolean
    ordem?: boolean
    qtt?: boolean
  }

  export type OpTamanhoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"op" | "tam" | "ordem" | "qtt", ExtArgs["result"]["opTamanho"]>
  export type OpTamanhoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ContainerOpTam?: boolean | OpTamanho$ContainerOpTamArgs<ExtArgs>
    Op?: boolean | OpDefaultArgs<ExtArgs>
    _count?: boolean | OpTamanhoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OpTamanhoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OpTamanho"
    objects: {
      ContainerOpTam: Prisma.$ContainerOpTamPayload<ExtArgs>[]
      Op: Prisma.$OpPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      op: number
      tam: string
      ordem: number
      qtt: number
    }, ExtArgs["result"]["opTamanho"]>
    composites: {}
  }

  type OpTamanhoGetPayload<S extends boolean | null | undefined | OpTamanhoDefaultArgs> = $Result.GetResult<Prisma.$OpTamanhoPayload, S>

  type OpTamanhoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpTamanhoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpTamanhoCountAggregateInputType | true
    }

  export interface OpTamanhoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OpTamanho'], meta: { name: 'OpTamanho' } }
    /**
     * Find zero or one OpTamanho that matches the filter.
     * @param {OpTamanhoFindUniqueArgs} args - Arguments to find a OpTamanho
     * @example
     * // Get one OpTamanho
     * const opTamanho = await prisma.opTamanho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpTamanhoFindUniqueArgs>(args: SelectSubset<T, OpTamanhoFindUniqueArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OpTamanho that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpTamanhoFindUniqueOrThrowArgs} args - Arguments to find a OpTamanho
     * @example
     * // Get one OpTamanho
     * const opTamanho = await prisma.opTamanho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpTamanhoFindUniqueOrThrowArgs>(args: SelectSubset<T, OpTamanhoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OpTamanho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoFindFirstArgs} args - Arguments to find a OpTamanho
     * @example
     * // Get one OpTamanho
     * const opTamanho = await prisma.opTamanho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpTamanhoFindFirstArgs>(args?: SelectSubset<T, OpTamanhoFindFirstArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OpTamanho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoFindFirstOrThrowArgs} args - Arguments to find a OpTamanho
     * @example
     * // Get one OpTamanho
     * const opTamanho = await prisma.opTamanho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpTamanhoFindFirstOrThrowArgs>(args?: SelectSubset<T, OpTamanhoFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OpTamanhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OpTamanhos
     * const opTamanhos = await prisma.opTamanho.findMany()
     * 
     * // Get first 10 OpTamanhos
     * const opTamanhos = await prisma.opTamanho.findMany({ take: 10 })
     * 
     * // Only select the `op`
     * const opTamanhoWithOpOnly = await prisma.opTamanho.findMany({ select: { op: true } })
     * 
     */
    findMany<T extends OpTamanhoFindManyArgs>(args?: SelectSubset<T, OpTamanhoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OpTamanho.
     * @param {OpTamanhoCreateArgs} args - Arguments to create a OpTamanho.
     * @example
     * // Create one OpTamanho
     * const OpTamanho = await prisma.opTamanho.create({
     *   data: {
     *     // ... data to create a OpTamanho
     *   }
     * })
     * 
     */
    create<T extends OpTamanhoCreateArgs>(args: SelectSubset<T, OpTamanhoCreateArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OpTamanhos.
     * @param {OpTamanhoCreateManyArgs} args - Arguments to create many OpTamanhos.
     * @example
     * // Create many OpTamanhos
     * const opTamanho = await prisma.opTamanho.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpTamanhoCreateManyArgs>(args?: SelectSubset<T, OpTamanhoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OpTamanho.
     * @param {OpTamanhoDeleteArgs} args - Arguments to delete one OpTamanho.
     * @example
     * // Delete one OpTamanho
     * const OpTamanho = await prisma.opTamanho.delete({
     *   where: {
     *     // ... filter to delete one OpTamanho
     *   }
     * })
     * 
     */
    delete<T extends OpTamanhoDeleteArgs>(args: SelectSubset<T, OpTamanhoDeleteArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OpTamanho.
     * @param {OpTamanhoUpdateArgs} args - Arguments to update one OpTamanho.
     * @example
     * // Update one OpTamanho
     * const opTamanho = await prisma.opTamanho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpTamanhoUpdateArgs>(args: SelectSubset<T, OpTamanhoUpdateArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OpTamanhos.
     * @param {OpTamanhoDeleteManyArgs} args - Arguments to filter OpTamanhos to delete.
     * @example
     * // Delete a few OpTamanhos
     * const { count } = await prisma.opTamanho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpTamanhoDeleteManyArgs>(args?: SelectSubset<T, OpTamanhoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OpTamanhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OpTamanhos
     * const opTamanho = await prisma.opTamanho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpTamanhoUpdateManyArgs>(args: SelectSubset<T, OpTamanhoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OpTamanho.
     * @param {OpTamanhoUpsertArgs} args - Arguments to update or create a OpTamanho.
     * @example
     * // Update or create a OpTamanho
     * const opTamanho = await prisma.opTamanho.upsert({
     *   create: {
     *     // ... data to create a OpTamanho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OpTamanho we want to update
     *   }
     * })
     */
    upsert<T extends OpTamanhoUpsertArgs>(args: SelectSubset<T, OpTamanhoUpsertArgs<ExtArgs>>): Prisma__OpTamanhoClient<$Result.GetResult<Prisma.$OpTamanhoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OpTamanhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoCountArgs} args - Arguments to filter OpTamanhos to count.
     * @example
     * // Count the number of OpTamanhos
     * const count = await prisma.opTamanho.count({
     *   where: {
     *     // ... the filter for the OpTamanhos we want to count
     *   }
     * })
    **/
    count<T extends OpTamanhoCountArgs>(
      args?: Subset<T, OpTamanhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpTamanhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OpTamanho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpTamanhoAggregateArgs>(args: Subset<T, OpTamanhoAggregateArgs>): Prisma.PrismaPromise<GetOpTamanhoAggregateType<T>>

    /**
     * Group by OpTamanho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpTamanhoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpTamanhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpTamanhoGroupByArgs['orderBy'] }
        : { orderBy?: OpTamanhoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpTamanhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpTamanhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OpTamanho model
   */
  readonly fields: OpTamanhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OpTamanho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpTamanhoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ContainerOpTam<T extends OpTamanho$ContainerOpTamArgs<ExtArgs> = {}>(args?: Subset<T, OpTamanho$ContainerOpTamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContainerOpTamPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Op<T extends OpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpDefaultArgs<ExtArgs>>): Prisma__OpClient<$Result.GetResult<Prisma.$OpPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OpTamanho model
   */ 
  interface OpTamanhoFieldRefs {
    readonly op: FieldRef<"OpTamanho", 'Int'>
    readonly tam: FieldRef<"OpTamanho", 'String'>
    readonly ordem: FieldRef<"OpTamanho", 'Int'>
    readonly qtt: FieldRef<"OpTamanho", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OpTamanho findUnique
   */
  export type OpTamanhoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter, which OpTamanho to fetch.
     */
    where: OpTamanhoWhereUniqueInput
  }

  /**
   * OpTamanho findUniqueOrThrow
   */
  export type OpTamanhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter, which OpTamanho to fetch.
     */
    where: OpTamanhoWhereUniqueInput
  }

  /**
   * OpTamanho findFirst
   */
  export type OpTamanhoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter, which OpTamanho to fetch.
     */
    where?: OpTamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpTamanhos to fetch.
     */
    orderBy?: OpTamanhoOrderByWithRelationInput | OpTamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpTamanhos.
     */
    cursor?: OpTamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpTamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpTamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpTamanhos.
     */
    distinct?: OpTamanhoScalarFieldEnum | OpTamanhoScalarFieldEnum[]
  }

  /**
   * OpTamanho findFirstOrThrow
   */
  export type OpTamanhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter, which OpTamanho to fetch.
     */
    where?: OpTamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpTamanhos to fetch.
     */
    orderBy?: OpTamanhoOrderByWithRelationInput | OpTamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OpTamanhos.
     */
    cursor?: OpTamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpTamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpTamanhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OpTamanhos.
     */
    distinct?: OpTamanhoScalarFieldEnum | OpTamanhoScalarFieldEnum[]
  }

  /**
   * OpTamanho findMany
   */
  export type OpTamanhoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter, which OpTamanhos to fetch.
     */
    where?: OpTamanhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OpTamanhos to fetch.
     */
    orderBy?: OpTamanhoOrderByWithRelationInput | OpTamanhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OpTamanhos.
     */
    cursor?: OpTamanhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OpTamanhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OpTamanhos.
     */
    skip?: number
    distinct?: OpTamanhoScalarFieldEnum | OpTamanhoScalarFieldEnum[]
  }

  /**
   * OpTamanho create
   */
  export type OpTamanhoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * The data needed to create a OpTamanho.
     */
    data: XOR<OpTamanhoCreateInput, OpTamanhoUncheckedCreateInput>
  }

  /**
   * OpTamanho createMany
   */
  export type OpTamanhoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OpTamanhos.
     */
    data: OpTamanhoCreateManyInput | OpTamanhoCreateManyInput[]
  }

  /**
   * OpTamanho update
   */
  export type OpTamanhoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * The data needed to update a OpTamanho.
     */
    data: XOR<OpTamanhoUpdateInput, OpTamanhoUncheckedUpdateInput>
    /**
     * Choose, which OpTamanho to update.
     */
    where: OpTamanhoWhereUniqueInput
  }

  /**
   * OpTamanho updateMany
   */
  export type OpTamanhoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OpTamanhos.
     */
    data: XOR<OpTamanhoUpdateManyMutationInput, OpTamanhoUncheckedUpdateManyInput>
    /**
     * Filter which OpTamanhos to update
     */
    where?: OpTamanhoWhereInput
  }

  /**
   * OpTamanho upsert
   */
  export type OpTamanhoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * The filter to search for the OpTamanho to update in case it exists.
     */
    where: OpTamanhoWhereUniqueInput
    /**
     * In case the OpTamanho found by the `where` argument doesn't exist, create a new OpTamanho with this data.
     */
    create: XOR<OpTamanhoCreateInput, OpTamanhoUncheckedCreateInput>
    /**
     * In case the OpTamanho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpTamanhoUpdateInput, OpTamanhoUncheckedUpdateInput>
  }

  /**
   * OpTamanho delete
   */
  export type OpTamanhoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
    /**
     * Filter which OpTamanho to delete.
     */
    where: OpTamanhoWhereUniqueInput
  }

  /**
   * OpTamanho deleteMany
   */
  export type OpTamanhoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OpTamanhos to delete
     */
    where?: OpTamanhoWhereInput
  }

  /**
   * OpTamanho.ContainerOpTam
   */
  export type OpTamanho$ContainerOpTamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContainerOpTam
     */
    select?: ContainerOpTamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContainerOpTam
     */
    omit?: ContainerOpTamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContainerOpTamInclude<ExtArgs> | null
    where?: ContainerOpTamWhereInput
    orderBy?: ContainerOpTamOrderByWithRelationInput | ContainerOpTamOrderByWithRelationInput[]
    cursor?: ContainerOpTamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContainerOpTamScalarFieldEnum | ContainerOpTamScalarFieldEnum[]
  }

  /**
   * OpTamanho without action
   */
  export type OpTamanhoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpTamanho
     */
    select?: OpTamanhoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OpTamanho
     */
    omit?: OpTamanhoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpTamanhoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PapeisScalarFieldEnum: {
    idPapel: 'idPapel',
    descPapel: 'descPapel'
  };

  export type PapeisScalarFieldEnum = (typeof PapeisScalarFieldEnum)[keyof typeof PapeisScalarFieldEnum]


  export const SysdiagramsScalarFieldEnum: {
    name: 'name',
    principal_id: 'principal_id',
    diagram_id: 'diagram_id',
    version: 'version',
    definition: 'definition'
  };

  export type SysdiagramsScalarFieldEnum = (typeof SysdiagramsScalarFieldEnum)[keyof typeof SysdiagramsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    nomeUser: 'nomeUser',
    pHashed: 'pHashed',
    hashedRefreshToken: 'hashedRefreshToken',
    nome: 'nome',
    apelido: 'apelido',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPapeisScalarFieldEnum: {
    idPapel: 'idPapel',
    nomeUser: 'nomeUser'
  };

  export type UserPapeisScalarFieldEnum = (typeof UserPapeisScalarFieldEnum)[keyof typeof UserPapeisScalarFieldEnum]


  export const ContainerScalarFieldEnum: {
    idContainer: 'idContainer',
    idContainerPai: 'idContainerPai',
    idEnvio: 'idEnvio',
    idTipoContainer: 'idTipoContainer',
    ordem: 'ordem',
    nContainer: 'nContainer',
    altura: 'altura'
  };

  export type ContainerScalarFieldEnum = (typeof ContainerScalarFieldEnum)[keyof typeof ContainerScalarFieldEnum]


  export const ConteudoScalarFieldEnum: {
    idConteudo: 'idConteudo',
    idContainer: 'idContainer',
    idItem: 'idItem',
    op: 'op',
    tam: 'tam',
    qtt: 'qtt',
    peso: 'peso'
  };

  export type ConteudoScalarFieldEnum = (typeof ConteudoScalarFieldEnum)[keyof typeof ConteudoScalarFieldEnum]


  export const EnvioScalarFieldEnum: {
    idEnvio: 'idEnvio',
    nomeEnvio: 'nomeEnvio',
    idDestino: 'idDestino',
    fechado: 'fechado',
    createdAt: 'createdAt',
    endDate: 'endDate',
    obs: 'obs',
    nomeUser: 'nomeUser'
  };

  export type EnvioScalarFieldEnum = (typeof EnvioScalarFieldEnum)[keyof typeof EnvioScalarFieldEnum]


  export const IdiomasScalarFieldEnum: {
    idIdioma: 'idIdioma',
    nomeIdioma: 'nomeIdioma'
  };

  export type IdiomasScalarFieldEnum = (typeof IdiomasScalarFieldEnum)[keyof typeof IdiomasScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    idItem: 'idItem',
    Descricao: 'Descricao'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemTraduzidoScalarFieldEnum: {
    idIdioma: 'idIdioma',
    idItem: 'idItem',
    descItem: 'descItem'
  };

  export type ItemTraduzidoScalarFieldEnum = (typeof ItemTraduzidoScalarFieldEnum)[keyof typeof ItemTraduzidoScalarFieldEnum]


  export const TipoContainerScalarFieldEnum: {
    idTipoContainer: 'idTipoContainer',
    idItem: 'idItem',
    permiteSubContainer: 'permiteSubContainer'
  };

  export type TipoContainerScalarFieldEnum = (typeof TipoContainerScalarFieldEnum)[keyof typeof TipoContainerScalarFieldEnum]


  export const DestinosScalarFieldEnum: {
    idDestino: 'idDestino',
    idIdioma: 'idIdioma',
    nomeDestino: 'nomeDestino'
  };

  export type DestinosScalarFieldEnum = (typeof DestinosScalarFieldEnum)[keyof typeof DestinosScalarFieldEnum]


  export const ContainerOpScalarFieldEnum: {
    idContainer: 'idContainer',
    op: 'op'
  };

  export type ContainerOpScalarFieldEnum = (typeof ContainerOpScalarFieldEnum)[keyof typeof ContainerOpScalarFieldEnum]


  export const ContainerOpTamScalarFieldEnum: {
    idContainer: 'idContainer',
    op: 'op',
    tam: 'tam'
  };

  export type ContainerOpTamScalarFieldEnum = (typeof ContainerOpTamScalarFieldEnum)[keyof typeof ContainerOpTamScalarFieldEnum]


  export const OpScalarFieldEnum: {
    op: 'op',
    ref: 'ref',
    modeloDesc: 'modeloDesc',
    modelo: 'modelo',
    cor: 'cor',
    pedido: 'pedido',
    norma: 'norma'
  };

  export type OpScalarFieldEnum = (typeof OpScalarFieldEnum)[keyof typeof OpScalarFieldEnum]


  export const OpTamanhoScalarFieldEnum: {
    op: 'op',
    tam: 'tam',
    ordem: 'ordem',
    qtt: 'qtt'
  };

  export type OpTamanhoScalarFieldEnum = (typeof OpTamanhoScalarFieldEnum)[keyof typeof OpTamanhoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type PapeisWhereInput = {
    AND?: PapeisWhereInput | PapeisWhereInput[]
    OR?: PapeisWhereInput[]
    NOT?: PapeisWhereInput | PapeisWhereInput[]
    idPapel?: StringFilter<"Papeis"> | string
    descPapel?: StringFilter<"Papeis"> | string
    UserPapeis?: UserPapeisListRelationFilter
  }

  export type PapeisOrderByWithRelationInput = {
    idPapel?: SortOrder
    descPapel?: SortOrder
    UserPapeis?: UserPapeisOrderByRelationAggregateInput
  }

  export type PapeisWhereUniqueInput = Prisma.AtLeast<{
    idPapel?: string
    descPapel?: string
    AND?: PapeisWhereInput | PapeisWhereInput[]
    OR?: PapeisWhereInput[]
    NOT?: PapeisWhereInput | PapeisWhereInput[]
    UserPapeis?: UserPapeisListRelationFilter
  }, "idPapel" | "descPapel">

  export type PapeisOrderByWithAggregationInput = {
    idPapel?: SortOrder
    descPapel?: SortOrder
    _count?: PapeisCountOrderByAggregateInput
    _max?: PapeisMaxOrderByAggregateInput
    _min?: PapeisMinOrderByAggregateInput
  }

  export type PapeisScalarWhereWithAggregatesInput = {
    AND?: PapeisScalarWhereWithAggregatesInput | PapeisScalarWhereWithAggregatesInput[]
    OR?: PapeisScalarWhereWithAggregatesInput[]
    NOT?: PapeisScalarWhereWithAggregatesInput | PapeisScalarWhereWithAggregatesInput[]
    idPapel?: StringWithAggregatesFilter<"Papeis"> | string
    descPapel?: StringWithAggregatesFilter<"Papeis"> | string
  }

  export type sysdiagramsWhereInput = {
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    diagram_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type sysdiagramsOrderByWithRelationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
  }

  export type sysdiagramsWhereUniqueInput = Prisma.AtLeast<{
    diagram_id?: number
    principal_id_name?: sysdiagramsPrincipal_idNameCompoundUniqueInput
    AND?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    OR?: sysdiagramsWhereInput[]
    NOT?: sysdiagramsWhereInput | sysdiagramsWhereInput[]
    name?: StringFilter<"sysdiagrams"> | string
    principal_id?: IntFilter<"sysdiagrams"> | number
    version?: IntNullableFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableFilter<"sysdiagrams"> | Uint8Array | null
  }, "diagram_id" | "principal_id_name">

  export type sysdiagramsOrderByWithAggregationInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrderInput | SortOrder
    definition?: SortOrderInput | SortOrder
    _count?: sysdiagramsCountOrderByAggregateInput
    _avg?: sysdiagramsAvgOrderByAggregateInput
    _max?: sysdiagramsMaxOrderByAggregateInput
    _min?: sysdiagramsMinOrderByAggregateInput
    _sum?: sysdiagramsSumOrderByAggregateInput
  }

  export type sysdiagramsScalarWhereWithAggregatesInput = {
    AND?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    OR?: sysdiagramsScalarWhereWithAggregatesInput[]
    NOT?: sysdiagramsScalarWhereWithAggregatesInput | sysdiagramsScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"sysdiagrams"> | string
    principal_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    diagram_id?: IntWithAggregatesFilter<"sysdiagrams"> | number
    version?: IntNullableWithAggregatesFilter<"sysdiagrams"> | number | null
    definition?: BytesNullableWithAggregatesFilter<"sysdiagrams"> | Uint8Array | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nomeUser?: StringFilter<"User"> | string
    pHashed?: StringFilter<"User"> | string
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    apelido?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserPapeis?: UserPapeisListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    nomeUser?: SortOrder
    pHashed?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserPapeis?: UserPapeisOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    nomeUser?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    pHashed?: StringFilter<"User"> | string
    hashedRefreshToken?: StringNullableFilter<"User"> | string | null
    nome?: StringFilter<"User"> | string
    apelido?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserPapeis?: UserPapeisListRelationFilter
  }, "nomeUser" | "nomeUser" | "email">

  export type UserOrderByWithAggregationInput = {
    nomeUser?: SortOrder
    pHashed?: SortOrder
    hashedRefreshToken?: SortOrderInput | SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    nomeUser?: StringWithAggregatesFilter<"User"> | string
    pHashed?: StringWithAggregatesFilter<"User"> | string
    hashedRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    nome?: StringWithAggregatesFilter<"User"> | string
    apelido?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserPapeisWhereInput = {
    AND?: UserPapeisWhereInput | UserPapeisWhereInput[]
    OR?: UserPapeisWhereInput[]
    NOT?: UserPapeisWhereInput | UserPapeisWhereInput[]
    idPapel?: StringFilter<"UserPapeis"> | string
    nomeUser?: StringFilter<"UserPapeis"> | string
    Papeis?: XOR<PapeisScalarRelationFilter, PapeisWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPapeisOrderByWithRelationInput = {
    idPapel?: SortOrder
    nomeUser?: SortOrder
    Papeis?: PapeisOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type UserPapeisWhereUniqueInput = Prisma.AtLeast<{
    idPapel_nomeUser?: UserPapeisIdPapelNomeUserCompoundUniqueInput
    AND?: UserPapeisWhereInput | UserPapeisWhereInput[]
    OR?: UserPapeisWhereInput[]
    NOT?: UserPapeisWhereInput | UserPapeisWhereInput[]
    idPapel?: StringFilter<"UserPapeis"> | string
    nomeUser?: StringFilter<"UserPapeis"> | string
    Papeis?: XOR<PapeisScalarRelationFilter, PapeisWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idPapel_nomeUser">

  export type UserPapeisOrderByWithAggregationInput = {
    idPapel?: SortOrder
    nomeUser?: SortOrder
    _count?: UserPapeisCountOrderByAggregateInput
    _max?: UserPapeisMaxOrderByAggregateInput
    _min?: UserPapeisMinOrderByAggregateInput
  }

  export type UserPapeisScalarWhereWithAggregatesInput = {
    AND?: UserPapeisScalarWhereWithAggregatesInput | UserPapeisScalarWhereWithAggregatesInput[]
    OR?: UserPapeisScalarWhereWithAggregatesInput[]
    NOT?: UserPapeisScalarWhereWithAggregatesInput | UserPapeisScalarWhereWithAggregatesInput[]
    idPapel?: StringWithAggregatesFilter<"UserPapeis"> | string
    nomeUser?: StringWithAggregatesFilter<"UserPapeis"> | string
  }

  export type ContainerWhereInput = {
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    idContainer?: IntFilter<"Container"> | number
    idContainerPai?: IntNullableFilter<"Container"> | number | null
    idEnvio?: IntFilter<"Container"> | number
    idTipoContainer?: IntFilter<"Container"> | number
    ordem?: IntFilter<"Container"> | number
    nContainer?: IntFilter<"Container"> | number
    altura?: FloatFilter<"Container"> | number
    Container?: XOR<ContainerNullableScalarRelationFilter, ContainerWhereInput> | null
    other_Container?: ContainerListRelationFilter
    Envio?: XOR<EnvioScalarRelationFilter, EnvioWhereInput>
    TipoContainer?: XOR<TipoContainerScalarRelationFilter, TipoContainerWhereInput>
    ContainerOp?: ContainerOpListRelationFilter
    Conteudo?: ConteudoListRelationFilter
  }

  export type ContainerOrderByWithRelationInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrderInput | SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
    Container?: ContainerOrderByWithRelationInput
    other_Container?: ContainerOrderByRelationAggregateInput
    Envio?: EnvioOrderByWithRelationInput
    TipoContainer?: TipoContainerOrderByWithRelationInput
    ContainerOp?: ContainerOpOrderByRelationAggregateInput
    Conteudo?: ConteudoOrderByRelationAggregateInput
  }

  export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    idContainer?: number
    AND?: ContainerWhereInput | ContainerWhereInput[]
    OR?: ContainerWhereInput[]
    NOT?: ContainerWhereInput | ContainerWhereInput[]
    idContainerPai?: IntNullableFilter<"Container"> | number | null
    idEnvio?: IntFilter<"Container"> | number
    idTipoContainer?: IntFilter<"Container"> | number
    ordem?: IntFilter<"Container"> | number
    nContainer?: IntFilter<"Container"> | number
    altura?: FloatFilter<"Container"> | number
    Container?: XOR<ContainerNullableScalarRelationFilter, ContainerWhereInput> | null
    other_Container?: ContainerListRelationFilter
    Envio?: XOR<EnvioScalarRelationFilter, EnvioWhereInput>
    TipoContainer?: XOR<TipoContainerScalarRelationFilter, TipoContainerWhereInput>
    ContainerOp?: ContainerOpListRelationFilter
    Conteudo?: ConteudoListRelationFilter
  }, "idContainer">

  export type ContainerOrderByWithAggregationInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrderInput | SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
    _count?: ContainerCountOrderByAggregateInput
    _avg?: ContainerAvgOrderByAggregateInput
    _max?: ContainerMaxOrderByAggregateInput
    _min?: ContainerMinOrderByAggregateInput
    _sum?: ContainerSumOrderByAggregateInput
  }

  export type ContainerScalarWhereWithAggregatesInput = {
    AND?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    OR?: ContainerScalarWhereWithAggregatesInput[]
    NOT?: ContainerScalarWhereWithAggregatesInput | ContainerScalarWhereWithAggregatesInput[]
    idContainer?: IntWithAggregatesFilter<"Container"> | number
    idContainerPai?: IntNullableWithAggregatesFilter<"Container"> | number | null
    idEnvio?: IntWithAggregatesFilter<"Container"> | number
    idTipoContainer?: IntWithAggregatesFilter<"Container"> | number
    ordem?: IntWithAggregatesFilter<"Container"> | number
    nContainer?: IntWithAggregatesFilter<"Container"> | number
    altura?: FloatWithAggregatesFilter<"Container"> | number
  }

  export type ConteudoWhereInput = {
    AND?: ConteudoWhereInput | ConteudoWhereInput[]
    OR?: ConteudoWhereInput[]
    NOT?: ConteudoWhereInput | ConteudoWhereInput[]
    idConteudo?: IntFilter<"Conteudo"> | number
    idContainer?: IntFilter<"Conteudo"> | number
    idItem?: IntFilter<"Conteudo"> | number
    op?: IntFilter<"Conteudo"> | number
    tam?: StringFilter<"Conteudo"> | string
    qtt?: FloatFilter<"Conteudo"> | number
    peso?: FloatFilter<"Conteudo"> | number
    Container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    ContainerOp?: XOR<ContainerOpScalarRelationFilter, ContainerOpWhereInput>
    ContainerOpTam?: XOR<ContainerOpTamScalarRelationFilter, ContainerOpTamWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ConteudoOrderByWithRelationInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
    Container?: ContainerOrderByWithRelationInput
    ContainerOp?: ContainerOpOrderByWithRelationInput
    ContainerOpTam?: ContainerOpTamOrderByWithRelationInput
    Item?: ItemOrderByWithRelationInput
  }

  export type ConteudoWhereUniqueInput = Prisma.AtLeast<{
    idConteudo_idContainer_op_tam?: ConteudoIdConteudoIdContainerOpTamCompoundUniqueInput
    AND?: ConteudoWhereInput | ConteudoWhereInput[]
    OR?: ConteudoWhereInput[]
    NOT?: ConteudoWhereInput | ConteudoWhereInput[]
    idConteudo?: IntFilter<"Conteudo"> | number
    idContainer?: IntFilter<"Conteudo"> | number
    idItem?: IntFilter<"Conteudo"> | number
    op?: IntFilter<"Conteudo"> | number
    tam?: StringFilter<"Conteudo"> | string
    qtt?: FloatFilter<"Conteudo"> | number
    peso?: FloatFilter<"Conteudo"> | number
    Container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    ContainerOp?: XOR<ContainerOpScalarRelationFilter, ContainerOpWhereInput>
    ContainerOpTam?: XOR<ContainerOpTamScalarRelationFilter, ContainerOpTamWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "idConteudo_idContainer_op_tam">

  export type ConteudoOrderByWithAggregationInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
    _count?: ConteudoCountOrderByAggregateInput
    _avg?: ConteudoAvgOrderByAggregateInput
    _max?: ConteudoMaxOrderByAggregateInput
    _min?: ConteudoMinOrderByAggregateInput
    _sum?: ConteudoSumOrderByAggregateInput
  }

  export type ConteudoScalarWhereWithAggregatesInput = {
    AND?: ConteudoScalarWhereWithAggregatesInput | ConteudoScalarWhereWithAggregatesInput[]
    OR?: ConteudoScalarWhereWithAggregatesInput[]
    NOT?: ConteudoScalarWhereWithAggregatesInput | ConteudoScalarWhereWithAggregatesInput[]
    idConteudo?: IntWithAggregatesFilter<"Conteudo"> | number
    idContainer?: IntWithAggregatesFilter<"Conteudo"> | number
    idItem?: IntWithAggregatesFilter<"Conteudo"> | number
    op?: IntWithAggregatesFilter<"Conteudo"> | number
    tam?: StringWithAggregatesFilter<"Conteudo"> | string
    qtt?: FloatWithAggregatesFilter<"Conteudo"> | number
    peso?: FloatWithAggregatesFilter<"Conteudo"> | number
  }

  export type EnvioWhereInput = {
    AND?: EnvioWhereInput | EnvioWhereInput[]
    OR?: EnvioWhereInput[]
    NOT?: EnvioWhereInput | EnvioWhereInput[]
    idEnvio?: IntFilter<"Envio"> | number
    nomeEnvio?: StringFilter<"Envio"> | string
    idDestino?: IntFilter<"Envio"> | number
    fechado?: BoolFilter<"Envio"> | boolean
    createdAt?: DateTimeFilter<"Envio"> | Date | string
    endDate?: DateTimeNullableFilter<"Envio"> | Date | string | null
    obs?: StringNullableFilter<"Envio"> | string | null
    nomeUser?: StringFilter<"Envio"> | string
    Container?: ContainerListRelationFilter
    Destinos?: XOR<DestinosScalarRelationFilter, DestinosWhereInput>
  }

  export type EnvioOrderByWithRelationInput = {
    idEnvio?: SortOrder
    nomeEnvio?: SortOrder
    idDestino?: SortOrder
    fechado?: SortOrder
    createdAt?: SortOrder
    endDate?: SortOrderInput | SortOrder
    obs?: SortOrderInput | SortOrder
    nomeUser?: SortOrder
    Container?: ContainerOrderByRelationAggregateInput
    Destinos?: DestinosOrderByWithRelationInput
  }

  export type EnvioWhereUniqueInput = Prisma.AtLeast<{
    idEnvio?: number
    AND?: EnvioWhereInput | EnvioWhereInput[]
    OR?: EnvioWhereInput[]
    NOT?: EnvioWhereInput | EnvioWhereInput[]
    nomeEnvio?: StringFilter<"Envio"> | string
    idDestino?: IntFilter<"Envio"> | number
    fechado?: BoolFilter<"Envio"> | boolean
    createdAt?: DateTimeFilter<"Envio"> | Date | string
    endDate?: DateTimeNullableFilter<"Envio"> | Date | string | null
    obs?: StringNullableFilter<"Envio"> | string | null
    nomeUser?: StringFilter<"Envio"> | string
    Container?: ContainerListRelationFilter
    Destinos?: XOR<DestinosScalarRelationFilter, DestinosWhereInput>
  }, "idEnvio">

  export type EnvioOrderByWithAggregationInput = {
    idEnvio?: SortOrder
    nomeEnvio?: SortOrder
    idDestino?: SortOrder
    fechado?: SortOrder
    createdAt?: SortOrder
    endDate?: SortOrderInput | SortOrder
    obs?: SortOrderInput | SortOrder
    nomeUser?: SortOrder
    _count?: EnvioCountOrderByAggregateInput
    _avg?: EnvioAvgOrderByAggregateInput
    _max?: EnvioMaxOrderByAggregateInput
    _min?: EnvioMinOrderByAggregateInput
    _sum?: EnvioSumOrderByAggregateInput
  }

  export type EnvioScalarWhereWithAggregatesInput = {
    AND?: EnvioScalarWhereWithAggregatesInput | EnvioScalarWhereWithAggregatesInput[]
    OR?: EnvioScalarWhereWithAggregatesInput[]
    NOT?: EnvioScalarWhereWithAggregatesInput | EnvioScalarWhereWithAggregatesInput[]
    idEnvio?: IntWithAggregatesFilter<"Envio"> | number
    nomeEnvio?: StringWithAggregatesFilter<"Envio"> | string
    idDestino?: IntWithAggregatesFilter<"Envio"> | number
    fechado?: BoolWithAggregatesFilter<"Envio"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Envio"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Envio"> | Date | string | null
    obs?: StringNullableWithAggregatesFilter<"Envio"> | string | null
    nomeUser?: StringWithAggregatesFilter<"Envio"> | string
  }

  export type IdiomasWhereInput = {
    AND?: IdiomasWhereInput | IdiomasWhereInput[]
    OR?: IdiomasWhereInput[]
    NOT?: IdiomasWhereInput | IdiomasWhereInput[]
    idIdioma?: IntFilter<"Idiomas"> | number
    nomeIdioma?: StringFilter<"Idiomas"> | string
    Destinos?: DestinosListRelationFilter
    ItemTraduzido?: ItemTraduzidoListRelationFilter
  }

  export type IdiomasOrderByWithRelationInput = {
    idIdioma?: SortOrder
    nomeIdioma?: SortOrder
    Destinos?: DestinosOrderByRelationAggregateInput
    ItemTraduzido?: ItemTraduzidoOrderByRelationAggregateInput
  }

  export type IdiomasWhereUniqueInput = Prisma.AtLeast<{
    idIdioma?: number
    AND?: IdiomasWhereInput | IdiomasWhereInput[]
    OR?: IdiomasWhereInput[]
    NOT?: IdiomasWhereInput | IdiomasWhereInput[]
    nomeIdioma?: StringFilter<"Idiomas"> | string
    Destinos?: DestinosListRelationFilter
    ItemTraduzido?: ItemTraduzidoListRelationFilter
  }, "idIdioma">

  export type IdiomasOrderByWithAggregationInput = {
    idIdioma?: SortOrder
    nomeIdioma?: SortOrder
    _count?: IdiomasCountOrderByAggregateInput
    _avg?: IdiomasAvgOrderByAggregateInput
    _max?: IdiomasMaxOrderByAggregateInput
    _min?: IdiomasMinOrderByAggregateInput
    _sum?: IdiomasSumOrderByAggregateInput
  }

  export type IdiomasScalarWhereWithAggregatesInput = {
    AND?: IdiomasScalarWhereWithAggregatesInput | IdiomasScalarWhereWithAggregatesInput[]
    OR?: IdiomasScalarWhereWithAggregatesInput[]
    NOT?: IdiomasScalarWhereWithAggregatesInput | IdiomasScalarWhereWithAggregatesInput[]
    idIdioma?: IntWithAggregatesFilter<"Idiomas"> | number
    nomeIdioma?: StringWithAggregatesFilter<"Idiomas"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    idItem?: IntFilter<"Item"> | number
    Descricao?: StringFilter<"Item"> | string
    Conteudo?: ConteudoListRelationFilter
    ItemTraduzido?: ItemTraduzidoListRelationFilter
    TipoContainer?: XOR<TipoContainerNullableScalarRelationFilter, TipoContainerWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    idItem?: SortOrder
    Descricao?: SortOrder
    Conteudo?: ConteudoOrderByRelationAggregateInput
    ItemTraduzido?: ItemTraduzidoOrderByRelationAggregateInput
    TipoContainer?: TipoContainerOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    idItem?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    Descricao?: StringFilter<"Item"> | string
    Conteudo?: ConteudoListRelationFilter
    ItemTraduzido?: ItemTraduzidoListRelationFilter
    TipoContainer?: XOR<TipoContainerNullableScalarRelationFilter, TipoContainerWhereInput> | null
  }, "idItem">

  export type ItemOrderByWithAggregationInput = {
    idItem?: SortOrder
    Descricao?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    idItem?: IntWithAggregatesFilter<"Item"> | number
    Descricao?: StringWithAggregatesFilter<"Item"> | string
  }

  export type ItemTraduzidoWhereInput = {
    AND?: ItemTraduzidoWhereInput | ItemTraduzidoWhereInput[]
    OR?: ItemTraduzidoWhereInput[]
    NOT?: ItemTraduzidoWhereInput | ItemTraduzidoWhereInput[]
    idIdioma?: IntFilter<"ItemTraduzido"> | number
    idItem?: IntFilter<"ItemTraduzido"> | number
    descItem?: StringFilter<"ItemTraduzido"> | string
    Idiomas?: XOR<IdiomasScalarRelationFilter, IdiomasWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type ItemTraduzidoOrderByWithRelationInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
    descItem?: SortOrder
    Idiomas?: IdiomasOrderByWithRelationInput
    Item?: ItemOrderByWithRelationInput
  }

  export type ItemTraduzidoWhereUniqueInput = Prisma.AtLeast<{
    idIdioma_idItem?: ItemTraduzidoIdIdiomaIdItemCompoundUniqueInput
    AND?: ItemTraduzidoWhereInput | ItemTraduzidoWhereInput[]
    OR?: ItemTraduzidoWhereInput[]
    NOT?: ItemTraduzidoWhereInput | ItemTraduzidoWhereInput[]
    idIdioma?: IntFilter<"ItemTraduzido"> | number
    idItem?: IntFilter<"ItemTraduzido"> | number
    descItem?: StringFilter<"ItemTraduzido"> | string
    Idiomas?: XOR<IdiomasScalarRelationFilter, IdiomasWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "idIdioma_idItem">

  export type ItemTraduzidoOrderByWithAggregationInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
    descItem?: SortOrder
    _count?: ItemTraduzidoCountOrderByAggregateInput
    _avg?: ItemTraduzidoAvgOrderByAggregateInput
    _max?: ItemTraduzidoMaxOrderByAggregateInput
    _min?: ItemTraduzidoMinOrderByAggregateInput
    _sum?: ItemTraduzidoSumOrderByAggregateInput
  }

  export type ItemTraduzidoScalarWhereWithAggregatesInput = {
    AND?: ItemTraduzidoScalarWhereWithAggregatesInput | ItemTraduzidoScalarWhereWithAggregatesInput[]
    OR?: ItemTraduzidoScalarWhereWithAggregatesInput[]
    NOT?: ItemTraduzidoScalarWhereWithAggregatesInput | ItemTraduzidoScalarWhereWithAggregatesInput[]
    idIdioma?: IntWithAggregatesFilter<"ItemTraduzido"> | number
    idItem?: IntWithAggregatesFilter<"ItemTraduzido"> | number
    descItem?: StringWithAggregatesFilter<"ItemTraduzido"> | string
  }

  export type TipoContainerWhereInput = {
    AND?: TipoContainerWhereInput | TipoContainerWhereInput[]
    OR?: TipoContainerWhereInput[]
    NOT?: TipoContainerWhereInput | TipoContainerWhereInput[]
    idTipoContainer?: IntFilter<"TipoContainer"> | number
    idItem?: IntFilter<"TipoContainer"> | number
    permiteSubContainer?: BoolFilter<"TipoContainer"> | boolean
    Container?: ContainerListRelationFilter
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type TipoContainerOrderByWithRelationInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
    permiteSubContainer?: SortOrder
    Container?: ContainerOrderByRelationAggregateInput
    Item?: ItemOrderByWithRelationInput
  }

  export type TipoContainerWhereUniqueInput = Prisma.AtLeast<{
    idTipoContainer?: number
    idItem?: number
    AND?: TipoContainerWhereInput | TipoContainerWhereInput[]
    OR?: TipoContainerWhereInput[]
    NOT?: TipoContainerWhereInput | TipoContainerWhereInput[]
    permiteSubContainer?: BoolFilter<"TipoContainer"> | boolean
    Container?: ContainerListRelationFilter
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "idTipoContainer" | "idItem">

  export type TipoContainerOrderByWithAggregationInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
    permiteSubContainer?: SortOrder
    _count?: TipoContainerCountOrderByAggregateInput
    _avg?: TipoContainerAvgOrderByAggregateInput
    _max?: TipoContainerMaxOrderByAggregateInput
    _min?: TipoContainerMinOrderByAggregateInput
    _sum?: TipoContainerSumOrderByAggregateInput
  }

  export type TipoContainerScalarWhereWithAggregatesInput = {
    AND?: TipoContainerScalarWhereWithAggregatesInput | TipoContainerScalarWhereWithAggregatesInput[]
    OR?: TipoContainerScalarWhereWithAggregatesInput[]
    NOT?: TipoContainerScalarWhereWithAggregatesInput | TipoContainerScalarWhereWithAggregatesInput[]
    idTipoContainer?: IntWithAggregatesFilter<"TipoContainer"> | number
    idItem?: IntWithAggregatesFilter<"TipoContainer"> | number
    permiteSubContainer?: BoolWithAggregatesFilter<"TipoContainer"> | boolean
  }

  export type DestinosWhereInput = {
    AND?: DestinosWhereInput | DestinosWhereInput[]
    OR?: DestinosWhereInput[]
    NOT?: DestinosWhereInput | DestinosWhereInput[]
    idDestino?: IntFilter<"Destinos"> | number
    idIdioma?: IntFilter<"Destinos"> | number
    nomeDestino?: StringFilter<"Destinos"> | string
    Idiomas?: XOR<IdiomasScalarRelationFilter, IdiomasWhereInput>
    Envio?: EnvioListRelationFilter
  }

  export type DestinosOrderByWithRelationInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
    nomeDestino?: SortOrder
    Idiomas?: IdiomasOrderByWithRelationInput
    Envio?: EnvioOrderByRelationAggregateInput
  }

  export type DestinosWhereUniqueInput = Prisma.AtLeast<{
    idDestino?: number
    AND?: DestinosWhereInput | DestinosWhereInput[]
    OR?: DestinosWhereInput[]
    NOT?: DestinosWhereInput | DestinosWhereInput[]
    idIdioma?: IntFilter<"Destinos"> | number
    nomeDestino?: StringFilter<"Destinos"> | string
    Idiomas?: XOR<IdiomasScalarRelationFilter, IdiomasWhereInput>
    Envio?: EnvioListRelationFilter
  }, "idDestino">

  export type DestinosOrderByWithAggregationInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
    nomeDestino?: SortOrder
    _count?: DestinosCountOrderByAggregateInput
    _avg?: DestinosAvgOrderByAggregateInput
    _max?: DestinosMaxOrderByAggregateInput
    _min?: DestinosMinOrderByAggregateInput
    _sum?: DestinosSumOrderByAggregateInput
  }

  export type DestinosScalarWhereWithAggregatesInput = {
    AND?: DestinosScalarWhereWithAggregatesInput | DestinosScalarWhereWithAggregatesInput[]
    OR?: DestinosScalarWhereWithAggregatesInput[]
    NOT?: DestinosScalarWhereWithAggregatesInput | DestinosScalarWhereWithAggregatesInput[]
    idDestino?: IntWithAggregatesFilter<"Destinos"> | number
    idIdioma?: IntWithAggregatesFilter<"Destinos"> | number
    nomeDestino?: StringWithAggregatesFilter<"Destinos"> | string
  }

  export type ContainerOpWhereInput = {
    AND?: ContainerOpWhereInput | ContainerOpWhereInput[]
    OR?: ContainerOpWhereInput[]
    NOT?: ContainerOpWhereInput | ContainerOpWhereInput[]
    idContainer?: IntFilter<"ContainerOp"> | number
    op?: IntFilter<"ContainerOp"> | number
    Container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    Op?: XOR<OpScalarRelationFilter, OpWhereInput>
    ContainerOpTam?: ContainerOpTamListRelationFilter
    Conteudo?: ConteudoListRelationFilter
  }

  export type ContainerOpOrderByWithRelationInput = {
    idContainer?: SortOrder
    op?: SortOrder
    Container?: ContainerOrderByWithRelationInput
    Op?: OpOrderByWithRelationInput
    ContainerOpTam?: ContainerOpTamOrderByRelationAggregateInput
    Conteudo?: ConteudoOrderByRelationAggregateInput
  }

  export type ContainerOpWhereUniqueInput = Prisma.AtLeast<{
    idContainer_op?: ContainerOpIdContainerOpCompoundUniqueInput
    AND?: ContainerOpWhereInput | ContainerOpWhereInput[]
    OR?: ContainerOpWhereInput[]
    NOT?: ContainerOpWhereInput | ContainerOpWhereInput[]
    idContainer?: IntFilter<"ContainerOp"> | number
    op?: IntFilter<"ContainerOp"> | number
    Container?: XOR<ContainerScalarRelationFilter, ContainerWhereInput>
    Op?: XOR<OpScalarRelationFilter, OpWhereInput>
    ContainerOpTam?: ContainerOpTamListRelationFilter
    Conteudo?: ConteudoListRelationFilter
  }, "idContainer_op">

  export type ContainerOpOrderByWithAggregationInput = {
    idContainer?: SortOrder
    op?: SortOrder
    _count?: ContainerOpCountOrderByAggregateInput
    _avg?: ContainerOpAvgOrderByAggregateInput
    _max?: ContainerOpMaxOrderByAggregateInput
    _min?: ContainerOpMinOrderByAggregateInput
    _sum?: ContainerOpSumOrderByAggregateInput
  }

  export type ContainerOpScalarWhereWithAggregatesInput = {
    AND?: ContainerOpScalarWhereWithAggregatesInput | ContainerOpScalarWhereWithAggregatesInput[]
    OR?: ContainerOpScalarWhereWithAggregatesInput[]
    NOT?: ContainerOpScalarWhereWithAggregatesInput | ContainerOpScalarWhereWithAggregatesInput[]
    idContainer?: IntWithAggregatesFilter<"ContainerOp"> | number
    op?: IntWithAggregatesFilter<"ContainerOp"> | number
  }

  export type ContainerOpTamWhereInput = {
    AND?: ContainerOpTamWhereInput | ContainerOpTamWhereInput[]
    OR?: ContainerOpTamWhereInput[]
    NOT?: ContainerOpTamWhereInput | ContainerOpTamWhereInput[]
    idContainer?: IntFilter<"ContainerOpTam"> | number
    op?: IntFilter<"ContainerOpTam"> | number
    tam?: StringFilter<"ContainerOpTam"> | string
    ContainerOp?: XOR<ContainerOpScalarRelationFilter, ContainerOpWhereInput>
    OpTamanho?: XOR<OpTamanhoScalarRelationFilter, OpTamanhoWhereInput>
    Conteudo?: ConteudoListRelationFilter
  }

  export type ContainerOpTamOrderByWithRelationInput = {
    idContainer?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    ContainerOp?: ContainerOpOrderByWithRelationInput
    OpTamanho?: OpTamanhoOrderByWithRelationInput
    Conteudo?: ConteudoOrderByRelationAggregateInput
  }

  export type ContainerOpTamWhereUniqueInput = Prisma.AtLeast<{
    idContainer_op_tam?: ContainerOpTamIdContainerOpTamCompoundUniqueInput
    AND?: ContainerOpTamWhereInput | ContainerOpTamWhereInput[]
    OR?: ContainerOpTamWhereInput[]
    NOT?: ContainerOpTamWhereInput | ContainerOpTamWhereInput[]
    idContainer?: IntFilter<"ContainerOpTam"> | number
    op?: IntFilter<"ContainerOpTam"> | number
    tam?: StringFilter<"ContainerOpTam"> | string
    ContainerOp?: XOR<ContainerOpScalarRelationFilter, ContainerOpWhereInput>
    OpTamanho?: XOR<OpTamanhoScalarRelationFilter, OpTamanhoWhereInput>
    Conteudo?: ConteudoListRelationFilter
  }, "idContainer_op_tam">

  export type ContainerOpTamOrderByWithAggregationInput = {
    idContainer?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    _count?: ContainerOpTamCountOrderByAggregateInput
    _avg?: ContainerOpTamAvgOrderByAggregateInput
    _max?: ContainerOpTamMaxOrderByAggregateInput
    _min?: ContainerOpTamMinOrderByAggregateInput
    _sum?: ContainerOpTamSumOrderByAggregateInput
  }

  export type ContainerOpTamScalarWhereWithAggregatesInput = {
    AND?: ContainerOpTamScalarWhereWithAggregatesInput | ContainerOpTamScalarWhereWithAggregatesInput[]
    OR?: ContainerOpTamScalarWhereWithAggregatesInput[]
    NOT?: ContainerOpTamScalarWhereWithAggregatesInput | ContainerOpTamScalarWhereWithAggregatesInput[]
    idContainer?: IntWithAggregatesFilter<"ContainerOpTam"> | number
    op?: IntWithAggregatesFilter<"ContainerOpTam"> | number
    tam?: StringWithAggregatesFilter<"ContainerOpTam"> | string
  }

  export type OpWhereInput = {
    AND?: OpWhereInput | OpWhereInput[]
    OR?: OpWhereInput[]
    NOT?: OpWhereInput | OpWhereInput[]
    op?: IntFilter<"Op"> | number
    ref?: StringFilter<"Op"> | string
    modeloDesc?: StringFilter<"Op"> | string
    modelo?: StringFilter<"Op"> | string
    cor?: StringFilter<"Op"> | string
    pedido?: StringFilter<"Op"> | string
    norma?: StringFilter<"Op"> | string
    ContainerOp?: ContainerOpListRelationFilter
    OpTamanho?: OpTamanhoListRelationFilter
  }

  export type OpOrderByWithRelationInput = {
    op?: SortOrder
    ref?: SortOrder
    modeloDesc?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    pedido?: SortOrder
    norma?: SortOrder
    ContainerOp?: ContainerOpOrderByRelationAggregateInput
    OpTamanho?: OpTamanhoOrderByRelationAggregateInput
  }

  export type OpWhereUniqueInput = Prisma.AtLeast<{
    op?: number
    AND?: OpWhereInput | OpWhereInput[]
    OR?: OpWhereInput[]
    NOT?: OpWhereInput | OpWhereInput[]
    ref?: StringFilter<"Op"> | string
    modeloDesc?: StringFilter<"Op"> | string
    modelo?: StringFilter<"Op"> | string
    cor?: StringFilter<"Op"> | string
    pedido?: StringFilter<"Op"> | string
    norma?: StringFilter<"Op"> | string
    ContainerOp?: ContainerOpListRelationFilter
    OpTamanho?: OpTamanhoListRelationFilter
  }, "op">

  export type OpOrderByWithAggregationInput = {
    op?: SortOrder
    ref?: SortOrder
    modeloDesc?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    pedido?: SortOrder
    norma?: SortOrder
    _count?: OpCountOrderByAggregateInput
    _avg?: OpAvgOrderByAggregateInput
    _max?: OpMaxOrderByAggregateInput
    _min?: OpMinOrderByAggregateInput
    _sum?: OpSumOrderByAggregateInput
  }

  export type OpScalarWhereWithAggregatesInput = {
    AND?: OpScalarWhereWithAggregatesInput | OpScalarWhereWithAggregatesInput[]
    OR?: OpScalarWhereWithAggregatesInput[]
    NOT?: OpScalarWhereWithAggregatesInput | OpScalarWhereWithAggregatesInput[]
    op?: IntWithAggregatesFilter<"Op"> | number
    ref?: StringWithAggregatesFilter<"Op"> | string
    modeloDesc?: StringWithAggregatesFilter<"Op"> | string
    modelo?: StringWithAggregatesFilter<"Op"> | string
    cor?: StringWithAggregatesFilter<"Op"> | string
    pedido?: StringWithAggregatesFilter<"Op"> | string
    norma?: StringWithAggregatesFilter<"Op"> | string
  }

  export type OpTamanhoWhereInput = {
    AND?: OpTamanhoWhereInput | OpTamanhoWhereInput[]
    OR?: OpTamanhoWhereInput[]
    NOT?: OpTamanhoWhereInput | OpTamanhoWhereInput[]
    op?: IntFilter<"OpTamanho"> | number
    tam?: StringFilter<"OpTamanho"> | string
    ordem?: IntFilter<"OpTamanho"> | number
    qtt?: IntFilter<"OpTamanho"> | number
    ContainerOpTam?: ContainerOpTamListRelationFilter
    Op?: XOR<OpScalarRelationFilter, OpWhereInput>
  }

  export type OpTamanhoOrderByWithRelationInput = {
    op?: SortOrder
    tam?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
    ContainerOpTam?: ContainerOpTamOrderByRelationAggregateInput
    Op?: OpOrderByWithRelationInput
  }

  export type OpTamanhoWhereUniqueInput = Prisma.AtLeast<{
    op_tam?: OpTamanhoOpTamCompoundUniqueInput
    AND?: OpTamanhoWhereInput | OpTamanhoWhereInput[]
    OR?: OpTamanhoWhereInput[]
    NOT?: OpTamanhoWhereInput | OpTamanhoWhereInput[]
    op?: IntFilter<"OpTamanho"> | number
    tam?: StringFilter<"OpTamanho"> | string
    ordem?: IntFilter<"OpTamanho"> | number
    qtt?: IntFilter<"OpTamanho"> | number
    ContainerOpTam?: ContainerOpTamListRelationFilter
    Op?: XOR<OpScalarRelationFilter, OpWhereInput>
  }, "op_tam">

  export type OpTamanhoOrderByWithAggregationInput = {
    op?: SortOrder
    tam?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
    _count?: OpTamanhoCountOrderByAggregateInput
    _avg?: OpTamanhoAvgOrderByAggregateInput
    _max?: OpTamanhoMaxOrderByAggregateInput
    _min?: OpTamanhoMinOrderByAggregateInput
    _sum?: OpTamanhoSumOrderByAggregateInput
  }

  export type OpTamanhoScalarWhereWithAggregatesInput = {
    AND?: OpTamanhoScalarWhereWithAggregatesInput | OpTamanhoScalarWhereWithAggregatesInput[]
    OR?: OpTamanhoScalarWhereWithAggregatesInput[]
    NOT?: OpTamanhoScalarWhereWithAggregatesInput | OpTamanhoScalarWhereWithAggregatesInput[]
    op?: IntWithAggregatesFilter<"OpTamanho"> | number
    tam?: StringWithAggregatesFilter<"OpTamanho"> | string
    ordem?: IntWithAggregatesFilter<"OpTamanho"> | number
    qtt?: IntWithAggregatesFilter<"OpTamanho"> | number
  }

  export type PapeisCreateInput = {
    idPapel?: string
    descPapel: string
    UserPapeis?: UserPapeisCreateNestedManyWithoutPapeisInput
  }

  export type PapeisUncheckedCreateInput = {
    idPapel?: string
    descPapel: string
    UserPapeis?: UserPapeisUncheckedCreateNestedManyWithoutPapeisInput
  }

  export type PapeisUpdateInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
    UserPapeis?: UserPapeisUpdateManyWithoutPapeisNestedInput
  }

  export type PapeisUncheckedUpdateInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
    UserPapeis?: UserPapeisUncheckedUpdateManyWithoutPapeisNestedInput
  }

  export type PapeisCreateManyInput = {
    idPapel?: string
    descPapel: string
  }

  export type PapeisUpdateManyMutationInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
  }

  export type PapeisUncheckedUpdateManyInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
  }

  export type sysdiagramsCreateInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUncheckedCreateInput = {
    name: string
    principal_id: number
    diagram_id?: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsCreateManyInput = {
    name: string
    principal_id: number
    version?: number | null
    definition?: Uint8Array | null
  }

  export type sysdiagramsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type sysdiagramsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    principal_id?: IntFieldUpdateOperationsInput | number
    diagram_id?: IntFieldUpdateOperationsInput | number
    version?: NullableIntFieldUpdateOperationsInput | number | null
    definition?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type UserCreateInput = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken?: string | null
    nome: string
    apelido: string
    email: string
    createdAt?: Date | string
    updatedAt: Date | string
    UserPapeis?: UserPapeisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken?: string | null
    nome: string
    apelido: string
    email: string
    createdAt?: Date | string
    updatedAt: Date | string
    UserPapeis?: UserPapeisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPapeis?: UserPapeisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPapeis?: UserPapeisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken?: string | null
    nome: string
    apelido: string
    email: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPapeisCreateInput = {
    Papeis: PapeisCreateNestedOneWithoutUserPapeisInput
    User: UserCreateNestedOneWithoutUserPapeisInput
  }

  export type UserPapeisUncheckedCreateInput = {
    idPapel: string
    nomeUser: string
  }

  export type UserPapeisUpdateInput = {
    Papeis?: PapeisUpdateOneRequiredWithoutUserPapeisNestedInput
    User?: UserUpdateOneRequiredWithoutUserPapeisNestedInput
  }

  export type UserPapeisUncheckedUpdateInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type UserPapeisCreateManyInput = {
    idPapel: string
    nomeUser: string
  }

  export type UserPapeisUpdateManyMutationInput = {

  }

  export type UserPapeisUncheckedUpdateManyInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type ContainerCreateInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateInput = {
    idContainer?: number
    idContainerPai?: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerUpdateInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerCreateManyInput = {
    idContainerPai?: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
  }

  export type ContainerUpdateManyMutationInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type ContainerUncheckedUpdateManyInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoCreateInput = {
    idConteudo?: number
    qtt: number
    peso: number
    Container: ContainerCreateNestedOneWithoutConteudoInput
    ContainerOp: ContainerOpCreateNestedOneWithoutConteudoInput
    ContainerOpTam: ContainerOpTamCreateNestedOneWithoutConteudoInput
    Item: ItemCreateNestedOneWithoutConteudoInput
  }

  export type ConteudoUncheckedCreateInput = {
    idConteudo?: number
    idContainer: number
    idItem: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ConteudoUpdateInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOpTam?: ContainerOpTamUpdateOneRequiredWithoutConteudoNestedInput
    Item?: ItemUpdateOneRequiredWithoutConteudoNestedInput
  }

  export type ConteudoUncheckedUpdateInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idContainer?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoCreateManyInput = {
    idContainer: number
    idItem: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ConteudoUpdateManyMutationInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoUncheckedUpdateManyInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idContainer?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type EnvioCreateInput = {
    nomeEnvio: string
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
    Container?: ContainerCreateNestedManyWithoutEnvioInput
    Destinos: DestinosCreateNestedOneWithoutEnvioInput
  }

  export type EnvioUncheckedCreateInput = {
    idEnvio?: number
    nomeEnvio: string
    idDestino: number
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
    Container?: ContainerUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUpdateInput = {
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
    Container?: ContainerUpdateManyWithoutEnvioNestedInput
    Destinos?: DestinosUpdateOneRequiredWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateInput = {
    idEnvio?: IntFieldUpdateOperationsInput | number
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    idDestino?: IntFieldUpdateOperationsInput | number
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
    Container?: ContainerUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioCreateManyInput = {
    nomeEnvio: string
    idDestino: number
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
  }

  export type EnvioUpdateManyMutationInput = {
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type EnvioUncheckedUpdateManyInput = {
    idEnvio?: IntFieldUpdateOperationsInput | number
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    idDestino?: IntFieldUpdateOperationsInput | number
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type IdiomasCreateInput = {
    nomeIdioma: string
    Destinos?: DestinosCreateNestedManyWithoutIdiomasInput
    ItemTraduzido?: ItemTraduzidoCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasUncheckedCreateInput = {
    idIdioma?: number
    nomeIdioma: string
    Destinos?: DestinosUncheckedCreateNestedManyWithoutIdiomasInput
    ItemTraduzido?: ItemTraduzidoUncheckedCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasUpdateInput = {
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    Destinos?: DestinosUpdateManyWithoutIdiomasNestedInput
    ItemTraduzido?: ItemTraduzidoUpdateManyWithoutIdiomasNestedInput
  }

  export type IdiomasUncheckedUpdateInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    Destinos?: DestinosUncheckedUpdateManyWithoutIdiomasNestedInput
    ItemTraduzido?: ItemTraduzidoUncheckedUpdateManyWithoutIdiomasNestedInput
  }

  export type IdiomasCreateManyInput = {
    nomeIdioma: string
  }

  export type IdiomasUpdateManyMutationInput = {
    nomeIdioma?: StringFieldUpdateOperationsInput | string
  }

  export type IdiomasUncheckedUpdateManyInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeIdioma?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    Descricao: string
    Conteudo?: ConteudoCreateNestedManyWithoutItemInput
    ItemTraduzido?: ItemTraduzidoCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    idItem?: number
    Descricao: string
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutItemInput
    ItemTraduzido?: ItemTraduzidoUncheckedCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemUpdateInput = {
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUpdateManyWithoutItemNestedInput
    ItemTraduzido?: ItemTraduzidoUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUncheckedUpdateManyWithoutItemNestedInput
    ItemTraduzido?: ItemTraduzidoUncheckedUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    Descricao: string
  }

  export type ItemUpdateManyMutationInput = {
    Descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    Descricao?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoCreateInput = {
    descItem: string
    Idiomas: IdiomasCreateNestedOneWithoutItemTraduzidoInput
    Item: ItemCreateNestedOneWithoutItemTraduzidoInput
  }

  export type ItemTraduzidoUncheckedCreateInput = {
    idIdioma: number
    idItem: number
    descItem: string
  }

  export type ItemTraduzidoUpdateInput = {
    descItem?: StringFieldUpdateOperationsInput | string
    Idiomas?: IdiomasUpdateOneRequiredWithoutItemTraduzidoNestedInput
    Item?: ItemUpdateOneRequiredWithoutItemTraduzidoNestedInput
  }

  export type ItemTraduzidoUncheckedUpdateInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoCreateManyInput = {
    idIdioma: number
    idItem: number
    descItem: string
  }

  export type ItemTraduzidoUpdateManyMutationInput = {
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoUncheckedUpdateManyInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type TipoContainerCreateInput = {
    permiteSubContainer?: boolean
    Container?: ContainerCreateNestedManyWithoutTipoContainerInput
    Item: ItemCreateNestedOneWithoutTipoContainerInput
  }

  export type TipoContainerUncheckedCreateInput = {
    idTipoContainer?: number
    idItem: number
    permiteSubContainer?: boolean
    Container?: ContainerUncheckedCreateNestedManyWithoutTipoContainerInput
  }

  export type TipoContainerUpdateInput = {
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
    Container?: ContainerUpdateManyWithoutTipoContainerNestedInput
    Item?: ItemUpdateOneRequiredWithoutTipoContainerNestedInput
  }

  export type TipoContainerUncheckedUpdateInput = {
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
    Container?: ContainerUncheckedUpdateManyWithoutTipoContainerNestedInput
  }

  export type TipoContainerCreateManyInput = {
    idItem: number
    permiteSubContainer?: boolean
  }

  export type TipoContainerUpdateManyMutationInput = {
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TipoContainerUncheckedUpdateManyInput = {
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DestinosCreateInput = {
    nomeDestino: string
    Idiomas: IdiomasCreateNestedOneWithoutDestinosInput
    Envio?: EnvioCreateNestedManyWithoutDestinosInput
  }

  export type DestinosUncheckedCreateInput = {
    idDestino?: number
    idIdioma: number
    nomeDestino: string
    Envio?: EnvioUncheckedCreateNestedManyWithoutDestinosInput
  }

  export type DestinosUpdateInput = {
    nomeDestino?: StringFieldUpdateOperationsInput | string
    Idiomas?: IdiomasUpdateOneRequiredWithoutDestinosNestedInput
    Envio?: EnvioUpdateManyWithoutDestinosNestedInput
  }

  export type DestinosUncheckedUpdateInput = {
    idDestino?: IntFieldUpdateOperationsInput | number
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeDestino?: StringFieldUpdateOperationsInput | string
    Envio?: EnvioUncheckedUpdateManyWithoutDestinosNestedInput
  }

  export type DestinosCreateManyInput = {
    idIdioma: number
    nomeDestino: string
  }

  export type DestinosUpdateManyMutationInput = {
    nomeDestino?: StringFieldUpdateOperationsInput | string
  }

  export type DestinosUncheckedUpdateManyInput = {
    idDestino?: IntFieldUpdateOperationsInput | number
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeDestino?: StringFieldUpdateOperationsInput | string
  }

  export type ContainerOpCreateInput = {
    Container: ContainerCreateNestedOneWithoutContainerOpInput
    Op: OpCreateNestedOneWithoutContainerOpInput
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUncheckedCreateInput = {
    idContainer: number
    op: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUpdateInput = {
    Container?: ContainerUpdateOneRequiredWithoutContainerOpNestedInput
    Op?: OpUpdateOneRequiredWithoutContainerOpNestedInput
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpCreateManyInput = {
    idContainer: number
    op: number
  }

  export type ContainerOpUpdateManyMutationInput = {

  }

  export type ContainerOpUncheckedUpdateManyInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
  }

  export type ContainerOpTamCreateInput = {
    ContainerOp: ContainerOpCreateNestedOneWithoutContainerOpTamInput
    OpTamanho: OpTamanhoCreateNestedOneWithoutContainerOpTamInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamUncheckedCreateInput = {
    idContainer: number
    op: number
    tam: string
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamUpdateInput = {
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutContainerOpTamNestedInput
    OpTamanho?: OpTamanhoUpdateOneRequiredWithoutContainerOpTamNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamCreateManyInput = {
    idContainer: number
    op: number
    tam: string
  }

  export type ContainerOpTamUpdateManyMutationInput = {

  }

  export type ContainerOpTamUncheckedUpdateManyInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
  }

  export type OpCreateInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    ContainerOp?: ContainerOpCreateNestedManyWithoutOpInput
    OpTamanho?: OpTamanhoCreateNestedManyWithoutOpInput
  }

  export type OpUncheckedCreateInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutOpInput
    OpTamanho?: OpTamanhoUncheckedCreateNestedManyWithoutOpInput
  }

  export type OpUpdateInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    ContainerOp?: ContainerOpUpdateManyWithoutOpNestedInput
    OpTamanho?: OpTamanhoUpdateManyWithoutOpNestedInput
  }

  export type OpUncheckedUpdateInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutOpNestedInput
    OpTamanho?: OpTamanhoUncheckedUpdateManyWithoutOpNestedInput
  }

  export type OpCreateManyInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
  }

  export type OpUpdateManyMutationInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
  }

  export type OpUncheckedUpdateManyInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
  }

  export type OpTamanhoCreateInput = {
    tam: string
    ordem: number
    qtt: number
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutOpTamanhoInput
    Op: OpCreateNestedOneWithoutOpTamanhoInput
  }

  export type OpTamanhoUncheckedCreateInput = {
    op: number
    tam: string
    ordem: number
    qtt: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutOpTamanhoInput
  }

  export type OpTamanhoUpdateInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutOpTamanhoNestedInput
    Op?: OpUpdateOneRequiredWithoutOpTamanhoNestedInput
  }

  export type OpTamanhoUncheckedUpdateInput = {
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutOpTamanhoNestedInput
  }

  export type OpTamanhoCreateManyInput = {
    op: number
    tam: string
    ordem: number
    qtt: number
  }

  export type OpTamanhoUpdateManyMutationInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
  }

  export type OpTamanhoUncheckedUpdateManyInput = {
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserPapeisListRelationFilter = {
    every?: UserPapeisWhereInput
    some?: UserPapeisWhereInput
    none?: UserPapeisWhereInput
  }

  export type UserPapeisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PapeisCountOrderByAggregateInput = {
    idPapel?: SortOrder
    descPapel?: SortOrder
  }

  export type PapeisMaxOrderByAggregateInput = {
    idPapel?: SortOrder
    descPapel?: SortOrder
  }

  export type PapeisMinOrderByAggregateInput = {
    idPapel?: SortOrder
    descPapel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sysdiagramsPrincipal_idNameCompoundUniqueInput = {
    principal_id: number
    name: string
  }

  export type sysdiagramsCountOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsAvgOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type sysdiagramsMaxOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsMinOrderByAggregateInput = {
    name?: SortOrder
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
    definition?: SortOrder
  }

  export type sysdiagramsSumOrderByAggregateInput = {
    principal_id?: SortOrder
    diagram_id?: SortOrder
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    nomeUser?: SortOrder
    pHashed?: SortOrder
    hashedRefreshToken?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    nomeUser?: SortOrder
    pHashed?: SortOrder
    hashedRefreshToken?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    nomeUser?: SortOrder
    pHashed?: SortOrder
    hashedRefreshToken?: SortOrder
    nome?: SortOrder
    apelido?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PapeisScalarRelationFilter = {
    is?: PapeisWhereInput
    isNot?: PapeisWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPapeisIdPapelNomeUserCompoundUniqueInput = {
    idPapel: string
    nomeUser: string
  }

  export type UserPapeisCountOrderByAggregateInput = {
    idPapel?: SortOrder
    nomeUser?: SortOrder
  }

  export type UserPapeisMaxOrderByAggregateInput = {
    idPapel?: SortOrder
    nomeUser?: SortOrder
  }

  export type UserPapeisMinOrderByAggregateInput = {
    idPapel?: SortOrder
    nomeUser?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ContainerNullableScalarRelationFilter = {
    is?: ContainerWhereInput | null
    isNot?: ContainerWhereInput | null
  }

  export type ContainerListRelationFilter = {
    every?: ContainerWhereInput
    some?: ContainerWhereInput
    none?: ContainerWhereInput
  }

  export type EnvioScalarRelationFilter = {
    is?: EnvioWhereInput
    isNot?: EnvioWhereInput
  }

  export type TipoContainerScalarRelationFilter = {
    is?: TipoContainerWhereInput
    isNot?: TipoContainerWhereInput
  }

  export type ContainerOpListRelationFilter = {
    every?: ContainerOpWhereInput
    some?: ContainerOpWhereInput
    none?: ContainerOpWhereInput
  }

  export type ConteudoListRelationFilter = {
    every?: ConteudoWhereInput
    some?: ConteudoWhereInput
    none?: ConteudoWhereInput
  }

  export type ContainerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContainerOpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConteudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContainerCountOrderByAggregateInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
  }

  export type ContainerAvgOrderByAggregateInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
  }

  export type ContainerMaxOrderByAggregateInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
  }

  export type ContainerMinOrderByAggregateInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
  }

  export type ContainerSumOrderByAggregateInput = {
    idContainer?: SortOrder
    idContainerPai?: SortOrder
    idEnvio?: SortOrder
    idTipoContainer?: SortOrder
    ordem?: SortOrder
    nContainer?: SortOrder
    altura?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ContainerScalarRelationFilter = {
    is?: ContainerWhereInput
    isNot?: ContainerWhereInput
  }

  export type ContainerOpScalarRelationFilter = {
    is?: ContainerOpWhereInput
    isNot?: ContainerOpWhereInput
  }

  export type ContainerOpTamScalarRelationFilter = {
    is?: ContainerOpTamWhereInput
    isNot?: ContainerOpTamWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ConteudoIdConteudoIdContainerOpTamCompoundUniqueInput = {
    idConteudo: number
    idContainer: number
    op: number
    tam: string
  }

  export type ConteudoCountOrderByAggregateInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
  }

  export type ConteudoAvgOrderByAggregateInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
  }

  export type ConteudoMaxOrderByAggregateInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
  }

  export type ConteudoMinOrderByAggregateInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    tam?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
  }

  export type ConteudoSumOrderByAggregateInput = {
    idConteudo?: SortOrder
    idContainer?: SortOrder
    idItem?: SortOrder
    op?: SortOrder
    qtt?: SortOrder
    peso?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DestinosScalarRelationFilter = {
    is?: DestinosWhereInput
    isNot?: DestinosWhereInput
  }

  export type EnvioCountOrderByAggregateInput = {
    idEnvio?: SortOrder
    nomeEnvio?: SortOrder
    idDestino?: SortOrder
    fechado?: SortOrder
    createdAt?: SortOrder
    endDate?: SortOrder
    obs?: SortOrder
    nomeUser?: SortOrder
  }

  export type EnvioAvgOrderByAggregateInput = {
    idEnvio?: SortOrder
    idDestino?: SortOrder
  }

  export type EnvioMaxOrderByAggregateInput = {
    idEnvio?: SortOrder
    nomeEnvio?: SortOrder
    idDestino?: SortOrder
    fechado?: SortOrder
    createdAt?: SortOrder
    endDate?: SortOrder
    obs?: SortOrder
    nomeUser?: SortOrder
  }

  export type EnvioMinOrderByAggregateInput = {
    idEnvio?: SortOrder
    nomeEnvio?: SortOrder
    idDestino?: SortOrder
    fechado?: SortOrder
    createdAt?: SortOrder
    endDate?: SortOrder
    obs?: SortOrder
    nomeUser?: SortOrder
  }

  export type EnvioSumOrderByAggregateInput = {
    idEnvio?: SortOrder
    idDestino?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DestinosListRelationFilter = {
    every?: DestinosWhereInput
    some?: DestinosWhereInput
    none?: DestinosWhereInput
  }

  export type ItemTraduzidoListRelationFilter = {
    every?: ItemTraduzidoWhereInput
    some?: ItemTraduzidoWhereInput
    none?: ItemTraduzidoWhereInput
  }

  export type DestinosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemTraduzidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdiomasCountOrderByAggregateInput = {
    idIdioma?: SortOrder
    nomeIdioma?: SortOrder
  }

  export type IdiomasAvgOrderByAggregateInput = {
    idIdioma?: SortOrder
  }

  export type IdiomasMaxOrderByAggregateInput = {
    idIdioma?: SortOrder
    nomeIdioma?: SortOrder
  }

  export type IdiomasMinOrderByAggregateInput = {
    idIdioma?: SortOrder
    nomeIdioma?: SortOrder
  }

  export type IdiomasSumOrderByAggregateInput = {
    idIdioma?: SortOrder
  }

  export type TipoContainerNullableScalarRelationFilter = {
    is?: TipoContainerWhereInput | null
    isNot?: TipoContainerWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    idItem?: SortOrder
    Descricao?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    idItem?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    idItem?: SortOrder
    Descricao?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    idItem?: SortOrder
    Descricao?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    idItem?: SortOrder
  }

  export type IdiomasScalarRelationFilter = {
    is?: IdiomasWhereInput
    isNot?: IdiomasWhereInput
  }

  export type ItemTraduzidoIdIdiomaIdItemCompoundUniqueInput = {
    idIdioma: number
    idItem: number
  }

  export type ItemTraduzidoCountOrderByAggregateInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
    descItem?: SortOrder
  }

  export type ItemTraduzidoAvgOrderByAggregateInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
  }

  export type ItemTraduzidoMaxOrderByAggregateInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
    descItem?: SortOrder
  }

  export type ItemTraduzidoMinOrderByAggregateInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
    descItem?: SortOrder
  }

  export type ItemTraduzidoSumOrderByAggregateInput = {
    idIdioma?: SortOrder
    idItem?: SortOrder
  }

  export type TipoContainerCountOrderByAggregateInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
    permiteSubContainer?: SortOrder
  }

  export type TipoContainerAvgOrderByAggregateInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
  }

  export type TipoContainerMaxOrderByAggregateInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
    permiteSubContainer?: SortOrder
  }

  export type TipoContainerMinOrderByAggregateInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
    permiteSubContainer?: SortOrder
  }

  export type TipoContainerSumOrderByAggregateInput = {
    idTipoContainer?: SortOrder
    idItem?: SortOrder
  }

  export type EnvioListRelationFilter = {
    every?: EnvioWhereInput
    some?: EnvioWhereInput
    none?: EnvioWhereInput
  }

  export type EnvioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinosCountOrderByAggregateInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
    nomeDestino?: SortOrder
  }

  export type DestinosAvgOrderByAggregateInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
  }

  export type DestinosMaxOrderByAggregateInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
    nomeDestino?: SortOrder
  }

  export type DestinosMinOrderByAggregateInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
    nomeDestino?: SortOrder
  }

  export type DestinosSumOrderByAggregateInput = {
    idDestino?: SortOrder
    idIdioma?: SortOrder
  }

  export type OpScalarRelationFilter = {
    is?: OpWhereInput
    isNot?: OpWhereInput
  }

  export type ContainerOpTamListRelationFilter = {
    every?: ContainerOpTamWhereInput
    some?: ContainerOpTamWhereInput
    none?: ContainerOpTamWhereInput
  }

  export type ContainerOpTamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContainerOpIdContainerOpCompoundUniqueInput = {
    idContainer: number
    op: number
  }

  export type ContainerOpCountOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type ContainerOpAvgOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type ContainerOpMaxOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type ContainerOpMinOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type ContainerOpSumOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type OpTamanhoScalarRelationFilter = {
    is?: OpTamanhoWhereInput
    isNot?: OpTamanhoWhereInput
  }

  export type ContainerOpTamIdContainerOpTamCompoundUniqueInput = {
    idContainer: number
    op: number
    tam: string
  }

  export type ContainerOpTamCountOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
    tam?: SortOrder
  }

  export type ContainerOpTamAvgOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type ContainerOpTamMaxOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
    tam?: SortOrder
  }

  export type ContainerOpTamMinOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
    tam?: SortOrder
  }

  export type ContainerOpTamSumOrderByAggregateInput = {
    idContainer?: SortOrder
    op?: SortOrder
  }

  export type OpTamanhoListRelationFilter = {
    every?: OpTamanhoWhereInput
    some?: OpTamanhoWhereInput
    none?: OpTamanhoWhereInput
  }

  export type OpTamanhoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OpCountOrderByAggregateInput = {
    op?: SortOrder
    ref?: SortOrder
    modeloDesc?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    pedido?: SortOrder
    norma?: SortOrder
  }

  export type OpAvgOrderByAggregateInput = {
    op?: SortOrder
  }

  export type OpMaxOrderByAggregateInput = {
    op?: SortOrder
    ref?: SortOrder
    modeloDesc?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    pedido?: SortOrder
    norma?: SortOrder
  }

  export type OpMinOrderByAggregateInput = {
    op?: SortOrder
    ref?: SortOrder
    modeloDesc?: SortOrder
    modelo?: SortOrder
    cor?: SortOrder
    pedido?: SortOrder
    norma?: SortOrder
  }

  export type OpSumOrderByAggregateInput = {
    op?: SortOrder
  }

  export type OpTamanhoOpTamCompoundUniqueInput = {
    op: number
    tam: string
  }

  export type OpTamanhoCountOrderByAggregateInput = {
    op?: SortOrder
    tam?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
  }

  export type OpTamanhoAvgOrderByAggregateInput = {
    op?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
  }

  export type OpTamanhoMaxOrderByAggregateInput = {
    op?: SortOrder
    tam?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
  }

  export type OpTamanhoMinOrderByAggregateInput = {
    op?: SortOrder
    tam?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
  }

  export type OpTamanhoSumOrderByAggregateInput = {
    op?: SortOrder
    ordem?: SortOrder
    qtt?: SortOrder
  }

  export type UserPapeisCreateNestedManyWithoutPapeisInput = {
    create?: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput> | UserPapeisCreateWithoutPapeisInput[] | UserPapeisUncheckedCreateWithoutPapeisInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutPapeisInput | UserPapeisCreateOrConnectWithoutPapeisInput[]
    createMany?: UserPapeisCreateManyPapeisInputEnvelope
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
  }

  export type UserPapeisUncheckedCreateNestedManyWithoutPapeisInput = {
    create?: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput> | UserPapeisCreateWithoutPapeisInput[] | UserPapeisUncheckedCreateWithoutPapeisInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutPapeisInput | UserPapeisCreateOrConnectWithoutPapeisInput[]
    createMany?: UserPapeisCreateManyPapeisInputEnvelope
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserPapeisUpdateManyWithoutPapeisNestedInput = {
    create?: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput> | UserPapeisCreateWithoutPapeisInput[] | UserPapeisUncheckedCreateWithoutPapeisInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutPapeisInput | UserPapeisCreateOrConnectWithoutPapeisInput[]
    upsert?: UserPapeisUpsertWithWhereUniqueWithoutPapeisInput | UserPapeisUpsertWithWhereUniqueWithoutPapeisInput[]
    createMany?: UserPapeisCreateManyPapeisInputEnvelope
    set?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    disconnect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    delete?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    update?: UserPapeisUpdateWithWhereUniqueWithoutPapeisInput | UserPapeisUpdateWithWhereUniqueWithoutPapeisInput[]
    updateMany?: UserPapeisUpdateManyWithWhereWithoutPapeisInput | UserPapeisUpdateManyWithWhereWithoutPapeisInput[]
    deleteMany?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
  }

  export type UserPapeisUncheckedUpdateManyWithoutPapeisNestedInput = {
    create?: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput> | UserPapeisCreateWithoutPapeisInput[] | UserPapeisUncheckedCreateWithoutPapeisInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutPapeisInput | UserPapeisCreateOrConnectWithoutPapeisInput[]
    upsert?: UserPapeisUpsertWithWhereUniqueWithoutPapeisInput | UserPapeisUpsertWithWhereUniqueWithoutPapeisInput[]
    createMany?: UserPapeisCreateManyPapeisInputEnvelope
    set?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    disconnect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    delete?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    update?: UserPapeisUpdateWithWhereUniqueWithoutPapeisInput | UserPapeisUpdateWithWhereUniqueWithoutPapeisInput[]
    updateMany?: UserPapeisUpdateManyWithWhereWithoutPapeisInput | UserPapeisUpdateManyWithWhereWithoutPapeisInput[]
    deleteMany?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type UserPapeisCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput> | UserPapeisCreateWithoutUserInput[] | UserPapeisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutUserInput | UserPapeisCreateOrConnectWithoutUserInput[]
    createMany?: UserPapeisCreateManyUserInputEnvelope
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
  }

  export type UserPapeisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput> | UserPapeisCreateWithoutUserInput[] | UserPapeisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutUserInput | UserPapeisCreateOrConnectWithoutUserInput[]
    createMany?: UserPapeisCreateManyUserInputEnvelope
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPapeisUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput> | UserPapeisCreateWithoutUserInput[] | UserPapeisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutUserInput | UserPapeisCreateOrConnectWithoutUserInput[]
    upsert?: UserPapeisUpsertWithWhereUniqueWithoutUserInput | UserPapeisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPapeisCreateManyUserInputEnvelope
    set?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    disconnect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    delete?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    update?: UserPapeisUpdateWithWhereUniqueWithoutUserInput | UserPapeisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPapeisUpdateManyWithWhereWithoutUserInput | UserPapeisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
  }

  export type UserPapeisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput> | UserPapeisCreateWithoutUserInput[] | UserPapeisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPapeisCreateOrConnectWithoutUserInput | UserPapeisCreateOrConnectWithoutUserInput[]
    upsert?: UserPapeisUpsertWithWhereUniqueWithoutUserInput | UserPapeisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPapeisCreateManyUserInputEnvelope
    set?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    disconnect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    delete?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    connect?: UserPapeisWhereUniqueInput | UserPapeisWhereUniqueInput[]
    update?: UserPapeisUpdateWithWhereUniqueWithoutUserInput | UserPapeisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPapeisUpdateManyWithWhereWithoutUserInput | UserPapeisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
  }

  export type PapeisCreateNestedOneWithoutUserPapeisInput = {
    create?: XOR<PapeisCreateWithoutUserPapeisInput, PapeisUncheckedCreateWithoutUserPapeisInput>
    connectOrCreate?: PapeisCreateOrConnectWithoutUserPapeisInput
    connect?: PapeisWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserPapeisInput = {
    create?: XOR<UserCreateWithoutUserPapeisInput, UserUncheckedCreateWithoutUserPapeisInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPapeisInput
    connect?: UserWhereUniqueInput
  }

  export type PapeisUpdateOneRequiredWithoutUserPapeisNestedInput = {
    create?: XOR<PapeisCreateWithoutUserPapeisInput, PapeisUncheckedCreateWithoutUserPapeisInput>
    connectOrCreate?: PapeisCreateOrConnectWithoutUserPapeisInput
    upsert?: PapeisUpsertWithoutUserPapeisInput
    connect?: PapeisWhereUniqueInput
    update?: XOR<XOR<PapeisUpdateToOneWithWhereWithoutUserPapeisInput, PapeisUpdateWithoutUserPapeisInput>, PapeisUncheckedUpdateWithoutUserPapeisInput>
  }

  export type UserUpdateOneRequiredWithoutUserPapeisNestedInput = {
    create?: XOR<UserCreateWithoutUserPapeisInput, UserUncheckedCreateWithoutUserPapeisInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPapeisInput
    upsert?: UserUpsertWithoutUserPapeisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPapeisInput, UserUpdateWithoutUserPapeisInput>, UserUncheckedUpdateWithoutUserPapeisInput>
  }

  export type ContainerCreateNestedOneWithoutOther_ContainerInput = {
    create?: XOR<ContainerCreateWithoutOther_ContainerInput, ContainerUncheckedCreateWithoutOther_ContainerInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutOther_ContainerInput
    connect?: ContainerWhereUniqueInput
  }

  export type ContainerCreateNestedManyWithoutContainerInput = {
    create?: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput> | ContainerCreateWithoutContainerInput[] | ContainerUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerInput | ContainerCreateOrConnectWithoutContainerInput[]
    createMany?: ContainerCreateManyContainerInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type EnvioCreateNestedOneWithoutContainerInput = {
    create?: XOR<EnvioCreateWithoutContainerInput, EnvioUncheckedCreateWithoutContainerInput>
    connectOrCreate?: EnvioCreateOrConnectWithoutContainerInput
    connect?: EnvioWhereUniqueInput
  }

  export type TipoContainerCreateNestedOneWithoutContainerInput = {
    create?: XOR<TipoContainerCreateWithoutContainerInput, TipoContainerUncheckedCreateWithoutContainerInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutContainerInput
    connect?: TipoContainerWhereUniqueInput
  }

  export type ContainerOpCreateNestedManyWithoutContainerInput = {
    create?: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput> | ContainerOpCreateWithoutContainerInput[] | ContainerOpUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerInput | ContainerOpCreateOrConnectWithoutContainerInput[]
    createMany?: ContainerOpCreateManyContainerInputEnvelope
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
  }

  export type ConteudoCreateNestedManyWithoutContainerInput = {
    create?: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput> | ConteudoCreateWithoutContainerInput[] | ConteudoUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerInput | ConteudoCreateOrConnectWithoutContainerInput[]
    createMany?: ConteudoCreateManyContainerInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ContainerUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput> | ContainerCreateWithoutContainerInput[] | ContainerUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerInput | ContainerCreateOrConnectWithoutContainerInput[]
    createMany?: ContainerCreateManyContainerInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type ContainerOpUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput> | ContainerOpCreateWithoutContainerInput[] | ContainerOpUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerInput | ContainerOpCreateOrConnectWithoutContainerInput[]
    createMany?: ContainerOpCreateManyContainerInputEnvelope
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
  }

  export type ConteudoUncheckedCreateNestedManyWithoutContainerInput = {
    create?: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput> | ConteudoCreateWithoutContainerInput[] | ConteudoUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerInput | ConteudoCreateOrConnectWithoutContainerInput[]
    createMany?: ConteudoCreateManyContainerInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContainerUpdateOneWithoutOther_ContainerNestedInput = {
    create?: XOR<ContainerCreateWithoutOther_ContainerInput, ContainerUncheckedCreateWithoutOther_ContainerInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutOther_ContainerInput
    upsert?: ContainerUpsertWithoutOther_ContainerInput
    disconnect?: ContainerWhereInput | boolean
    delete?: ContainerWhereInput | boolean
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutOther_ContainerInput, ContainerUpdateWithoutOther_ContainerInput>, ContainerUncheckedUpdateWithoutOther_ContainerInput>
  }

  export type ContainerUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput> | ContainerCreateWithoutContainerInput[] | ContainerUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerInput | ContainerCreateOrConnectWithoutContainerInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutContainerInput | ContainerUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ContainerCreateManyContainerInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutContainerInput | ContainerUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutContainerInput | ContainerUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type EnvioUpdateOneRequiredWithoutContainerNestedInput = {
    create?: XOR<EnvioCreateWithoutContainerInput, EnvioUncheckedCreateWithoutContainerInput>
    connectOrCreate?: EnvioCreateOrConnectWithoutContainerInput
    upsert?: EnvioUpsertWithoutContainerInput
    connect?: EnvioWhereUniqueInput
    update?: XOR<XOR<EnvioUpdateToOneWithWhereWithoutContainerInput, EnvioUpdateWithoutContainerInput>, EnvioUncheckedUpdateWithoutContainerInput>
  }

  export type TipoContainerUpdateOneRequiredWithoutContainerNestedInput = {
    create?: XOR<TipoContainerCreateWithoutContainerInput, TipoContainerUncheckedCreateWithoutContainerInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutContainerInput
    upsert?: TipoContainerUpsertWithoutContainerInput
    connect?: TipoContainerWhereUniqueInput
    update?: XOR<XOR<TipoContainerUpdateToOneWithWhereWithoutContainerInput, TipoContainerUpdateWithoutContainerInput>, TipoContainerUncheckedUpdateWithoutContainerInput>
  }

  export type ContainerOpUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput> | ContainerOpCreateWithoutContainerInput[] | ContainerOpUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerInput | ContainerOpCreateOrConnectWithoutContainerInput[]
    upsert?: ContainerOpUpsertWithWhereUniqueWithoutContainerInput | ContainerOpUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ContainerOpCreateManyContainerInputEnvelope
    set?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    disconnect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    delete?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    update?: ContainerOpUpdateWithWhereUniqueWithoutContainerInput | ContainerOpUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ContainerOpUpdateManyWithWhereWithoutContainerInput | ContainerOpUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
  }

  export type ConteudoUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput> | ConteudoCreateWithoutContainerInput[] | ConteudoUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerInput | ConteudoCreateOrConnectWithoutContainerInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerInput | ConteudoUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ConteudoCreateManyContainerInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerInput | ConteudoUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerInput | ConteudoUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ContainerUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput> | ContainerCreateWithoutContainerInput[] | ContainerUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerInput | ContainerCreateOrConnectWithoutContainerInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutContainerInput | ContainerUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ContainerCreateManyContainerInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutContainerInput | ContainerUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutContainerInput | ContainerUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type ContainerOpUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput> | ContainerOpCreateWithoutContainerInput[] | ContainerOpUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerInput | ContainerOpCreateOrConnectWithoutContainerInput[]
    upsert?: ContainerOpUpsertWithWhereUniqueWithoutContainerInput | ContainerOpUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ContainerOpCreateManyContainerInputEnvelope
    set?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    disconnect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    delete?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    update?: ContainerOpUpdateWithWhereUniqueWithoutContainerInput | ContainerOpUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ContainerOpUpdateManyWithWhereWithoutContainerInput | ContainerOpUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput> | ConteudoCreateWithoutContainerInput[] | ConteudoUncheckedCreateWithoutContainerInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerInput | ConteudoCreateOrConnectWithoutContainerInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerInput | ConteudoUpsertWithWhereUniqueWithoutContainerInput[]
    createMany?: ConteudoCreateManyContainerInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerInput | ConteudoUpdateWithWhereUniqueWithoutContainerInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerInput | ConteudoUpdateManyWithWhereWithoutContainerInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ContainerCreateNestedOneWithoutConteudoInput = {
    create?: XOR<ContainerCreateWithoutConteudoInput, ContainerUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutConteudoInput
    connect?: ContainerWhereUniqueInput
  }

  export type ContainerOpCreateNestedOneWithoutConteudoInput = {
    create?: XOR<ContainerOpCreateWithoutConteudoInput, ContainerOpUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerOpCreateOrConnectWithoutConteudoInput
    connect?: ContainerOpWhereUniqueInput
  }

  export type ContainerOpTamCreateNestedOneWithoutConteudoInput = {
    create?: XOR<ContainerOpTamCreateWithoutConteudoInput, ContainerOpTamUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutConteudoInput
    connect?: ContainerOpTamWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutConteudoInput = {
    create?: XOR<ItemCreateWithoutConteudoInput, ItemUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutConteudoInput
    connect?: ItemWhereUniqueInput
  }

  export type ContainerUpdateOneRequiredWithoutConteudoNestedInput = {
    create?: XOR<ContainerCreateWithoutConteudoInput, ContainerUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutConteudoInput
    upsert?: ContainerUpsertWithoutConteudoInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutConteudoInput, ContainerUpdateWithoutConteudoInput>, ContainerUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerOpUpdateOneRequiredWithoutConteudoNestedInput = {
    create?: XOR<ContainerOpCreateWithoutConteudoInput, ContainerOpUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerOpCreateOrConnectWithoutConteudoInput
    upsert?: ContainerOpUpsertWithoutConteudoInput
    connect?: ContainerOpWhereUniqueInput
    update?: XOR<XOR<ContainerOpUpdateToOneWithWhereWithoutConteudoInput, ContainerOpUpdateWithoutConteudoInput>, ContainerOpUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerOpTamUpdateOneRequiredWithoutConteudoNestedInput = {
    create?: XOR<ContainerOpTamCreateWithoutConteudoInput, ContainerOpTamUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutConteudoInput
    upsert?: ContainerOpTamUpsertWithoutConteudoInput
    connect?: ContainerOpTamWhereUniqueInput
    update?: XOR<XOR<ContainerOpTamUpdateToOneWithWhereWithoutConteudoInput, ContainerOpTamUpdateWithoutConteudoInput>, ContainerOpTamUncheckedUpdateWithoutConteudoInput>
  }

  export type ItemUpdateOneRequiredWithoutConteudoNestedInput = {
    create?: XOR<ItemCreateWithoutConteudoInput, ItemUncheckedCreateWithoutConteudoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutConteudoInput
    upsert?: ItemUpsertWithoutConteudoInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutConteudoInput, ItemUpdateWithoutConteudoInput>, ItemUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerCreateNestedManyWithoutEnvioInput = {
    create?: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput> | ContainerCreateWithoutEnvioInput[] | ContainerUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutEnvioInput | ContainerCreateOrConnectWithoutEnvioInput[]
    createMany?: ContainerCreateManyEnvioInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type DestinosCreateNestedOneWithoutEnvioInput = {
    create?: XOR<DestinosCreateWithoutEnvioInput, DestinosUncheckedCreateWithoutEnvioInput>
    connectOrCreate?: DestinosCreateOrConnectWithoutEnvioInput
    connect?: DestinosWhereUniqueInput
  }

  export type ContainerUncheckedCreateNestedManyWithoutEnvioInput = {
    create?: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput> | ContainerCreateWithoutEnvioInput[] | ContainerUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutEnvioInput | ContainerCreateOrConnectWithoutEnvioInput[]
    createMany?: ContainerCreateManyEnvioInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ContainerUpdateManyWithoutEnvioNestedInput = {
    create?: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput> | ContainerCreateWithoutEnvioInput[] | ContainerUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutEnvioInput | ContainerCreateOrConnectWithoutEnvioInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutEnvioInput | ContainerUpsertWithWhereUniqueWithoutEnvioInput[]
    createMany?: ContainerCreateManyEnvioInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutEnvioInput | ContainerUpdateWithWhereUniqueWithoutEnvioInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutEnvioInput | ContainerUpdateManyWithWhereWithoutEnvioInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type DestinosUpdateOneRequiredWithoutEnvioNestedInput = {
    create?: XOR<DestinosCreateWithoutEnvioInput, DestinosUncheckedCreateWithoutEnvioInput>
    connectOrCreate?: DestinosCreateOrConnectWithoutEnvioInput
    upsert?: DestinosUpsertWithoutEnvioInput
    connect?: DestinosWhereUniqueInput
    update?: XOR<XOR<DestinosUpdateToOneWithWhereWithoutEnvioInput, DestinosUpdateWithoutEnvioInput>, DestinosUncheckedUpdateWithoutEnvioInput>
  }

  export type ContainerUncheckedUpdateManyWithoutEnvioNestedInput = {
    create?: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput> | ContainerCreateWithoutEnvioInput[] | ContainerUncheckedCreateWithoutEnvioInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutEnvioInput | ContainerCreateOrConnectWithoutEnvioInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutEnvioInput | ContainerUpsertWithWhereUniqueWithoutEnvioInput[]
    createMany?: ContainerCreateManyEnvioInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutEnvioInput | ContainerUpdateWithWhereUniqueWithoutEnvioInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutEnvioInput | ContainerUpdateManyWithWhereWithoutEnvioInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type DestinosCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput> | DestinosCreateWithoutIdiomasInput[] | DestinosUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: DestinosCreateOrConnectWithoutIdiomasInput | DestinosCreateOrConnectWithoutIdiomasInput[]
    createMany?: DestinosCreateManyIdiomasInputEnvelope
    connect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
  }

  export type ItemTraduzidoCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput> | ItemTraduzidoCreateWithoutIdiomasInput[] | ItemTraduzidoUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutIdiomasInput | ItemTraduzidoCreateOrConnectWithoutIdiomasInput[]
    createMany?: ItemTraduzidoCreateManyIdiomasInputEnvelope
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
  }

  export type DestinosUncheckedCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput> | DestinosCreateWithoutIdiomasInput[] | DestinosUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: DestinosCreateOrConnectWithoutIdiomasInput | DestinosCreateOrConnectWithoutIdiomasInput[]
    createMany?: DestinosCreateManyIdiomasInputEnvelope
    connect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
  }

  export type ItemTraduzidoUncheckedCreateNestedManyWithoutIdiomasInput = {
    create?: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput> | ItemTraduzidoCreateWithoutIdiomasInput[] | ItemTraduzidoUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutIdiomasInput | ItemTraduzidoCreateOrConnectWithoutIdiomasInput[]
    createMany?: ItemTraduzidoCreateManyIdiomasInputEnvelope
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
  }

  export type DestinosUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput> | DestinosCreateWithoutIdiomasInput[] | DestinosUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: DestinosCreateOrConnectWithoutIdiomasInput | DestinosCreateOrConnectWithoutIdiomasInput[]
    upsert?: DestinosUpsertWithWhereUniqueWithoutIdiomasInput | DestinosUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: DestinosCreateManyIdiomasInputEnvelope
    set?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    disconnect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    delete?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    connect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    update?: DestinosUpdateWithWhereUniqueWithoutIdiomasInput | DestinosUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: DestinosUpdateManyWithWhereWithoutIdiomasInput | DestinosUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: DestinosScalarWhereInput | DestinosScalarWhereInput[]
  }

  export type ItemTraduzidoUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput> | ItemTraduzidoCreateWithoutIdiomasInput[] | ItemTraduzidoUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutIdiomasInput | ItemTraduzidoCreateOrConnectWithoutIdiomasInput[]
    upsert?: ItemTraduzidoUpsertWithWhereUniqueWithoutIdiomasInput | ItemTraduzidoUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: ItemTraduzidoCreateManyIdiomasInputEnvelope
    set?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    disconnect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    delete?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    update?: ItemTraduzidoUpdateWithWhereUniqueWithoutIdiomasInput | ItemTraduzidoUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: ItemTraduzidoUpdateManyWithWhereWithoutIdiomasInput | ItemTraduzidoUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
  }

  export type DestinosUncheckedUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput> | DestinosCreateWithoutIdiomasInput[] | DestinosUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: DestinosCreateOrConnectWithoutIdiomasInput | DestinosCreateOrConnectWithoutIdiomasInput[]
    upsert?: DestinosUpsertWithWhereUniqueWithoutIdiomasInput | DestinosUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: DestinosCreateManyIdiomasInputEnvelope
    set?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    disconnect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    delete?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    connect?: DestinosWhereUniqueInput | DestinosWhereUniqueInput[]
    update?: DestinosUpdateWithWhereUniqueWithoutIdiomasInput | DestinosUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: DestinosUpdateManyWithWhereWithoutIdiomasInput | DestinosUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: DestinosScalarWhereInput | DestinosScalarWhereInput[]
  }

  export type ItemTraduzidoUncheckedUpdateManyWithoutIdiomasNestedInput = {
    create?: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput> | ItemTraduzidoCreateWithoutIdiomasInput[] | ItemTraduzidoUncheckedCreateWithoutIdiomasInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutIdiomasInput | ItemTraduzidoCreateOrConnectWithoutIdiomasInput[]
    upsert?: ItemTraduzidoUpsertWithWhereUniqueWithoutIdiomasInput | ItemTraduzidoUpsertWithWhereUniqueWithoutIdiomasInput[]
    createMany?: ItemTraduzidoCreateManyIdiomasInputEnvelope
    set?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    disconnect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    delete?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    update?: ItemTraduzidoUpdateWithWhereUniqueWithoutIdiomasInput | ItemTraduzidoUpdateWithWhereUniqueWithoutIdiomasInput[]
    updateMany?: ItemTraduzidoUpdateManyWithWhereWithoutIdiomasInput | ItemTraduzidoUpdateManyWithWhereWithoutIdiomasInput[]
    deleteMany?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
  }

  export type ConteudoCreateNestedManyWithoutItemInput = {
    create?: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput> | ConteudoCreateWithoutItemInput[] | ConteudoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutItemInput | ConteudoCreateOrConnectWithoutItemInput[]
    createMany?: ConteudoCreateManyItemInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ItemTraduzidoCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput> | ItemTraduzidoCreateWithoutItemInput[] | ItemTraduzidoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutItemInput | ItemTraduzidoCreateOrConnectWithoutItemInput[]
    createMany?: ItemTraduzidoCreateManyItemInputEnvelope
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
  }

  export type TipoContainerCreateNestedOneWithoutItemInput = {
    create?: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutItemInput
    connect?: TipoContainerWhereUniqueInput
  }

  export type ConteudoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput> | ConteudoCreateWithoutItemInput[] | ConteudoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutItemInput | ConteudoCreateOrConnectWithoutItemInput[]
    createMany?: ConteudoCreateManyItemInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ItemTraduzidoUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput> | ItemTraduzidoCreateWithoutItemInput[] | ItemTraduzidoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutItemInput | ItemTraduzidoCreateOrConnectWithoutItemInput[]
    createMany?: ItemTraduzidoCreateManyItemInputEnvelope
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
  }

  export type TipoContainerUncheckedCreateNestedOneWithoutItemInput = {
    create?: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutItemInput
    connect?: TipoContainerWhereUniqueInput
  }

  export type ConteudoUpdateManyWithoutItemNestedInput = {
    create?: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput> | ConteudoCreateWithoutItemInput[] | ConteudoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutItemInput | ConteudoCreateOrConnectWithoutItemInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutItemInput | ConteudoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ConteudoCreateManyItemInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutItemInput | ConteudoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutItemInput | ConteudoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ItemTraduzidoUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput> | ItemTraduzidoCreateWithoutItemInput[] | ItemTraduzidoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutItemInput | ItemTraduzidoCreateOrConnectWithoutItemInput[]
    upsert?: ItemTraduzidoUpsertWithWhereUniqueWithoutItemInput | ItemTraduzidoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemTraduzidoCreateManyItemInputEnvelope
    set?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    disconnect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    delete?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    update?: ItemTraduzidoUpdateWithWhereUniqueWithoutItemInput | ItemTraduzidoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemTraduzidoUpdateManyWithWhereWithoutItemInput | ItemTraduzidoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
  }

  export type TipoContainerUpdateOneWithoutItemNestedInput = {
    create?: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutItemInput
    upsert?: TipoContainerUpsertWithoutItemInput
    disconnect?: TipoContainerWhereInput | boolean
    delete?: TipoContainerWhereInput | boolean
    connect?: TipoContainerWhereUniqueInput
    update?: XOR<XOR<TipoContainerUpdateToOneWithWhereWithoutItemInput, TipoContainerUpdateWithoutItemInput>, TipoContainerUncheckedUpdateWithoutItemInput>
  }

  export type ConteudoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput> | ConteudoCreateWithoutItemInput[] | ConteudoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutItemInput | ConteudoCreateOrConnectWithoutItemInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutItemInput | ConteudoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ConteudoCreateManyItemInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutItemInput | ConteudoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutItemInput | ConteudoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ItemTraduzidoUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput> | ItemTraduzidoCreateWithoutItemInput[] | ItemTraduzidoUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemTraduzidoCreateOrConnectWithoutItemInput | ItemTraduzidoCreateOrConnectWithoutItemInput[]
    upsert?: ItemTraduzidoUpsertWithWhereUniqueWithoutItemInput | ItemTraduzidoUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemTraduzidoCreateManyItemInputEnvelope
    set?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    disconnect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    delete?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    connect?: ItemTraduzidoWhereUniqueInput | ItemTraduzidoWhereUniqueInput[]
    update?: ItemTraduzidoUpdateWithWhereUniqueWithoutItemInput | ItemTraduzidoUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemTraduzidoUpdateManyWithWhereWithoutItemInput | ItemTraduzidoUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
  }

  export type TipoContainerUncheckedUpdateOneWithoutItemNestedInput = {
    create?: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
    connectOrCreate?: TipoContainerCreateOrConnectWithoutItemInput
    upsert?: TipoContainerUpsertWithoutItemInput
    disconnect?: TipoContainerWhereInput | boolean
    delete?: TipoContainerWhereInput | boolean
    connect?: TipoContainerWhereUniqueInput
    update?: XOR<XOR<TipoContainerUpdateToOneWithWhereWithoutItemInput, TipoContainerUpdateWithoutItemInput>, TipoContainerUncheckedUpdateWithoutItemInput>
  }

  export type IdiomasCreateNestedOneWithoutItemTraduzidoInput = {
    create?: XOR<IdiomasCreateWithoutItemTraduzidoInput, IdiomasUncheckedCreateWithoutItemTraduzidoInput>
    connectOrCreate?: IdiomasCreateOrConnectWithoutItemTraduzidoInput
    connect?: IdiomasWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutItemTraduzidoInput = {
    create?: XOR<ItemCreateWithoutItemTraduzidoInput, ItemUncheckedCreateWithoutItemTraduzidoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemTraduzidoInput
    connect?: ItemWhereUniqueInput
  }

  export type IdiomasUpdateOneRequiredWithoutItemTraduzidoNestedInput = {
    create?: XOR<IdiomasCreateWithoutItemTraduzidoInput, IdiomasUncheckedCreateWithoutItemTraduzidoInput>
    connectOrCreate?: IdiomasCreateOrConnectWithoutItemTraduzidoInput
    upsert?: IdiomasUpsertWithoutItemTraduzidoInput
    connect?: IdiomasWhereUniqueInput
    update?: XOR<XOR<IdiomasUpdateToOneWithWhereWithoutItemTraduzidoInput, IdiomasUpdateWithoutItemTraduzidoInput>, IdiomasUncheckedUpdateWithoutItemTraduzidoInput>
  }

  export type ItemUpdateOneRequiredWithoutItemTraduzidoNestedInput = {
    create?: XOR<ItemCreateWithoutItemTraduzidoInput, ItemUncheckedCreateWithoutItemTraduzidoInput>
    connectOrCreate?: ItemCreateOrConnectWithoutItemTraduzidoInput
    upsert?: ItemUpsertWithoutItemTraduzidoInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutItemTraduzidoInput, ItemUpdateWithoutItemTraduzidoInput>, ItemUncheckedUpdateWithoutItemTraduzidoInput>
  }

  export type ContainerCreateNestedManyWithoutTipoContainerInput = {
    create?: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput> | ContainerCreateWithoutTipoContainerInput[] | ContainerUncheckedCreateWithoutTipoContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutTipoContainerInput | ContainerCreateOrConnectWithoutTipoContainerInput[]
    createMany?: ContainerCreateManyTipoContainerInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type ItemCreateNestedOneWithoutTipoContainerInput = {
    create?: XOR<ItemCreateWithoutTipoContainerInput, ItemUncheckedCreateWithoutTipoContainerInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTipoContainerInput
    connect?: ItemWhereUniqueInput
  }

  export type ContainerUncheckedCreateNestedManyWithoutTipoContainerInput = {
    create?: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput> | ContainerCreateWithoutTipoContainerInput[] | ContainerUncheckedCreateWithoutTipoContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutTipoContainerInput | ContainerCreateOrConnectWithoutTipoContainerInput[]
    createMany?: ContainerCreateManyTipoContainerInputEnvelope
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
  }

  export type ContainerUpdateManyWithoutTipoContainerNestedInput = {
    create?: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput> | ContainerCreateWithoutTipoContainerInput[] | ContainerUncheckedCreateWithoutTipoContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutTipoContainerInput | ContainerCreateOrConnectWithoutTipoContainerInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutTipoContainerInput | ContainerUpsertWithWhereUniqueWithoutTipoContainerInput[]
    createMany?: ContainerCreateManyTipoContainerInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutTipoContainerInput | ContainerUpdateWithWhereUniqueWithoutTipoContainerInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutTipoContainerInput | ContainerUpdateManyWithWhereWithoutTipoContainerInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type ItemUpdateOneRequiredWithoutTipoContainerNestedInput = {
    create?: XOR<ItemCreateWithoutTipoContainerInput, ItemUncheckedCreateWithoutTipoContainerInput>
    connectOrCreate?: ItemCreateOrConnectWithoutTipoContainerInput
    upsert?: ItemUpsertWithoutTipoContainerInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutTipoContainerInput, ItemUpdateWithoutTipoContainerInput>, ItemUncheckedUpdateWithoutTipoContainerInput>
  }

  export type ContainerUncheckedUpdateManyWithoutTipoContainerNestedInput = {
    create?: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput> | ContainerCreateWithoutTipoContainerInput[] | ContainerUncheckedCreateWithoutTipoContainerInput[]
    connectOrCreate?: ContainerCreateOrConnectWithoutTipoContainerInput | ContainerCreateOrConnectWithoutTipoContainerInput[]
    upsert?: ContainerUpsertWithWhereUniqueWithoutTipoContainerInput | ContainerUpsertWithWhereUniqueWithoutTipoContainerInput[]
    createMany?: ContainerCreateManyTipoContainerInputEnvelope
    set?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    disconnect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    delete?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    connect?: ContainerWhereUniqueInput | ContainerWhereUniqueInput[]
    update?: ContainerUpdateWithWhereUniqueWithoutTipoContainerInput | ContainerUpdateWithWhereUniqueWithoutTipoContainerInput[]
    updateMany?: ContainerUpdateManyWithWhereWithoutTipoContainerInput | ContainerUpdateManyWithWhereWithoutTipoContainerInput[]
    deleteMany?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
  }

  export type IdiomasCreateNestedOneWithoutDestinosInput = {
    create?: XOR<IdiomasCreateWithoutDestinosInput, IdiomasUncheckedCreateWithoutDestinosInput>
    connectOrCreate?: IdiomasCreateOrConnectWithoutDestinosInput
    connect?: IdiomasWhereUniqueInput
  }

  export type EnvioCreateNestedManyWithoutDestinosInput = {
    create?: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput> | EnvioCreateWithoutDestinosInput[] | EnvioUncheckedCreateWithoutDestinosInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDestinosInput | EnvioCreateOrConnectWithoutDestinosInput[]
    createMany?: EnvioCreateManyDestinosInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type EnvioUncheckedCreateNestedManyWithoutDestinosInput = {
    create?: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput> | EnvioCreateWithoutDestinosInput[] | EnvioUncheckedCreateWithoutDestinosInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDestinosInput | EnvioCreateOrConnectWithoutDestinosInput[]
    createMany?: EnvioCreateManyDestinosInputEnvelope
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
  }

  export type IdiomasUpdateOneRequiredWithoutDestinosNestedInput = {
    create?: XOR<IdiomasCreateWithoutDestinosInput, IdiomasUncheckedCreateWithoutDestinosInput>
    connectOrCreate?: IdiomasCreateOrConnectWithoutDestinosInput
    upsert?: IdiomasUpsertWithoutDestinosInput
    connect?: IdiomasWhereUniqueInput
    update?: XOR<XOR<IdiomasUpdateToOneWithWhereWithoutDestinosInput, IdiomasUpdateWithoutDestinosInput>, IdiomasUncheckedUpdateWithoutDestinosInput>
  }

  export type EnvioUpdateManyWithoutDestinosNestedInput = {
    create?: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput> | EnvioCreateWithoutDestinosInput[] | EnvioUncheckedCreateWithoutDestinosInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDestinosInput | EnvioCreateOrConnectWithoutDestinosInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutDestinosInput | EnvioUpsertWithWhereUniqueWithoutDestinosInput[]
    createMany?: EnvioCreateManyDestinosInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutDestinosInput | EnvioUpdateWithWhereUniqueWithoutDestinosInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutDestinosInput | EnvioUpdateManyWithWhereWithoutDestinosInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type EnvioUncheckedUpdateManyWithoutDestinosNestedInput = {
    create?: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput> | EnvioCreateWithoutDestinosInput[] | EnvioUncheckedCreateWithoutDestinosInput[]
    connectOrCreate?: EnvioCreateOrConnectWithoutDestinosInput | EnvioCreateOrConnectWithoutDestinosInput[]
    upsert?: EnvioUpsertWithWhereUniqueWithoutDestinosInput | EnvioUpsertWithWhereUniqueWithoutDestinosInput[]
    createMany?: EnvioCreateManyDestinosInputEnvelope
    set?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    disconnect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    delete?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    connect?: EnvioWhereUniqueInput | EnvioWhereUniqueInput[]
    update?: EnvioUpdateWithWhereUniqueWithoutDestinosInput | EnvioUpdateWithWhereUniqueWithoutDestinosInput[]
    updateMany?: EnvioUpdateManyWithWhereWithoutDestinosInput | EnvioUpdateManyWithWhereWithoutDestinosInput[]
    deleteMany?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
  }

  export type ContainerCreateNestedOneWithoutContainerOpInput = {
    create?: XOR<ContainerCreateWithoutContainerOpInput, ContainerUncheckedCreateWithoutContainerOpInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerOpInput
    connect?: ContainerWhereUniqueInput
  }

  export type OpCreateNestedOneWithoutContainerOpInput = {
    create?: XOR<OpCreateWithoutContainerOpInput, OpUncheckedCreateWithoutContainerOpInput>
    connectOrCreate?: OpCreateOrConnectWithoutContainerOpInput
    connect?: OpWhereUniqueInput
  }

  export type ContainerOpTamCreateNestedManyWithoutContainerOpInput = {
    create?: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput> | ContainerOpTamCreateWithoutContainerOpInput[] | ContainerOpTamUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutContainerOpInput | ContainerOpTamCreateOrConnectWithoutContainerOpInput[]
    createMany?: ContainerOpTamCreateManyContainerOpInputEnvelope
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
  }

  export type ConteudoCreateNestedManyWithoutContainerOpInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput> | ConteudoCreateWithoutContainerOpInput[] | ConteudoUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpInput | ConteudoCreateOrConnectWithoutContainerOpInput[]
    createMany?: ConteudoCreateManyContainerOpInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ContainerOpTamUncheckedCreateNestedManyWithoutContainerOpInput = {
    create?: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput> | ContainerOpTamCreateWithoutContainerOpInput[] | ContainerOpTamUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutContainerOpInput | ContainerOpTamCreateOrConnectWithoutContainerOpInput[]
    createMany?: ContainerOpTamCreateManyContainerOpInputEnvelope
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
  }

  export type ConteudoUncheckedCreateNestedManyWithoutContainerOpInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput> | ConteudoCreateWithoutContainerOpInput[] | ConteudoUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpInput | ConteudoCreateOrConnectWithoutContainerOpInput[]
    createMany?: ConteudoCreateManyContainerOpInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ContainerUpdateOneRequiredWithoutContainerOpNestedInput = {
    create?: XOR<ContainerCreateWithoutContainerOpInput, ContainerUncheckedCreateWithoutContainerOpInput>
    connectOrCreate?: ContainerCreateOrConnectWithoutContainerOpInput
    upsert?: ContainerUpsertWithoutContainerOpInput
    connect?: ContainerWhereUniqueInput
    update?: XOR<XOR<ContainerUpdateToOneWithWhereWithoutContainerOpInput, ContainerUpdateWithoutContainerOpInput>, ContainerUncheckedUpdateWithoutContainerOpInput>
  }

  export type OpUpdateOneRequiredWithoutContainerOpNestedInput = {
    create?: XOR<OpCreateWithoutContainerOpInput, OpUncheckedCreateWithoutContainerOpInput>
    connectOrCreate?: OpCreateOrConnectWithoutContainerOpInput
    upsert?: OpUpsertWithoutContainerOpInput
    connect?: OpWhereUniqueInput
    update?: XOR<XOR<OpUpdateToOneWithWhereWithoutContainerOpInput, OpUpdateWithoutContainerOpInput>, OpUncheckedUpdateWithoutContainerOpInput>
  }

  export type ContainerOpTamUpdateManyWithoutContainerOpNestedInput = {
    create?: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput> | ContainerOpTamCreateWithoutContainerOpInput[] | ContainerOpTamUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutContainerOpInput | ContainerOpTamCreateOrConnectWithoutContainerOpInput[]
    upsert?: ContainerOpTamUpsertWithWhereUniqueWithoutContainerOpInput | ContainerOpTamUpsertWithWhereUniqueWithoutContainerOpInput[]
    createMany?: ContainerOpTamCreateManyContainerOpInputEnvelope
    set?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    disconnect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    delete?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    update?: ContainerOpTamUpdateWithWhereUniqueWithoutContainerOpInput | ContainerOpTamUpdateWithWhereUniqueWithoutContainerOpInput[]
    updateMany?: ContainerOpTamUpdateManyWithWhereWithoutContainerOpInput | ContainerOpTamUpdateManyWithWhereWithoutContainerOpInput[]
    deleteMany?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
  }

  export type ConteudoUpdateManyWithoutContainerOpNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput> | ConteudoCreateWithoutContainerOpInput[] | ConteudoUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpInput | ConteudoCreateOrConnectWithoutContainerOpInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerOpInput | ConteudoUpsertWithWhereUniqueWithoutContainerOpInput[]
    createMany?: ConteudoCreateManyContainerOpInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerOpInput | ConteudoUpdateWithWhereUniqueWithoutContainerOpInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerOpInput | ConteudoUpdateManyWithWhereWithoutContainerOpInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ContainerOpTamUncheckedUpdateManyWithoutContainerOpNestedInput = {
    create?: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput> | ContainerOpTamCreateWithoutContainerOpInput[] | ContainerOpTamUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutContainerOpInput | ContainerOpTamCreateOrConnectWithoutContainerOpInput[]
    upsert?: ContainerOpTamUpsertWithWhereUniqueWithoutContainerOpInput | ContainerOpTamUpsertWithWhereUniqueWithoutContainerOpInput[]
    createMany?: ContainerOpTamCreateManyContainerOpInputEnvelope
    set?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    disconnect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    delete?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    update?: ContainerOpTamUpdateWithWhereUniqueWithoutContainerOpInput | ContainerOpTamUpdateWithWhereUniqueWithoutContainerOpInput[]
    updateMany?: ContainerOpTamUpdateManyWithWhereWithoutContainerOpInput | ContainerOpTamUpdateManyWithWhereWithoutContainerOpInput[]
    deleteMany?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerOpNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput> | ConteudoCreateWithoutContainerOpInput[] | ConteudoUncheckedCreateWithoutContainerOpInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpInput | ConteudoCreateOrConnectWithoutContainerOpInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerOpInput | ConteudoUpsertWithWhereUniqueWithoutContainerOpInput[]
    createMany?: ConteudoCreateManyContainerOpInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerOpInput | ConteudoUpdateWithWhereUniqueWithoutContainerOpInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerOpInput | ConteudoUpdateManyWithWhereWithoutContainerOpInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ContainerOpCreateNestedOneWithoutContainerOpTamInput = {
    create?: XOR<ContainerOpCreateWithoutContainerOpTamInput, ContainerOpUncheckedCreateWithoutContainerOpTamInput>
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerOpTamInput
    connect?: ContainerOpWhereUniqueInput
  }

  export type OpTamanhoCreateNestedOneWithoutContainerOpTamInput = {
    create?: XOR<OpTamanhoCreateWithoutContainerOpTamInput, OpTamanhoUncheckedCreateWithoutContainerOpTamInput>
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutContainerOpTamInput
    connect?: OpTamanhoWhereUniqueInput
  }

  export type ConteudoCreateNestedManyWithoutContainerOpTamInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput> | ConteudoCreateWithoutContainerOpTamInput[] | ConteudoUncheckedCreateWithoutContainerOpTamInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpTamInput | ConteudoCreateOrConnectWithoutContainerOpTamInput[]
    createMany?: ConteudoCreateManyContainerOpTamInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ConteudoUncheckedCreateNestedManyWithoutContainerOpTamInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput> | ConteudoCreateWithoutContainerOpTamInput[] | ConteudoUncheckedCreateWithoutContainerOpTamInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpTamInput | ConteudoCreateOrConnectWithoutContainerOpTamInput[]
    createMany?: ConteudoCreateManyContainerOpTamInputEnvelope
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
  }

  export type ContainerOpUpdateOneRequiredWithoutContainerOpTamNestedInput = {
    create?: XOR<ContainerOpCreateWithoutContainerOpTamInput, ContainerOpUncheckedCreateWithoutContainerOpTamInput>
    connectOrCreate?: ContainerOpCreateOrConnectWithoutContainerOpTamInput
    upsert?: ContainerOpUpsertWithoutContainerOpTamInput
    connect?: ContainerOpWhereUniqueInput
    update?: XOR<XOR<ContainerOpUpdateToOneWithWhereWithoutContainerOpTamInput, ContainerOpUpdateWithoutContainerOpTamInput>, ContainerOpUncheckedUpdateWithoutContainerOpTamInput>
  }

  export type OpTamanhoUpdateOneRequiredWithoutContainerOpTamNestedInput = {
    create?: XOR<OpTamanhoCreateWithoutContainerOpTamInput, OpTamanhoUncheckedCreateWithoutContainerOpTamInput>
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutContainerOpTamInput
    upsert?: OpTamanhoUpsertWithoutContainerOpTamInput
    connect?: OpTamanhoWhereUniqueInput
    update?: XOR<XOR<OpTamanhoUpdateToOneWithWhereWithoutContainerOpTamInput, OpTamanhoUpdateWithoutContainerOpTamInput>, OpTamanhoUncheckedUpdateWithoutContainerOpTamInput>
  }

  export type ConteudoUpdateManyWithoutContainerOpTamNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput> | ConteudoCreateWithoutContainerOpTamInput[] | ConteudoUncheckedCreateWithoutContainerOpTamInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpTamInput | ConteudoCreateOrConnectWithoutContainerOpTamInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerOpTamInput | ConteudoUpsertWithWhereUniqueWithoutContainerOpTamInput[]
    createMany?: ConteudoCreateManyContainerOpTamInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerOpTamInput | ConteudoUpdateWithWhereUniqueWithoutContainerOpTamInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerOpTamInput | ConteudoUpdateManyWithWhereWithoutContainerOpTamInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerOpTamNestedInput = {
    create?: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput> | ConteudoCreateWithoutContainerOpTamInput[] | ConteudoUncheckedCreateWithoutContainerOpTamInput[]
    connectOrCreate?: ConteudoCreateOrConnectWithoutContainerOpTamInput | ConteudoCreateOrConnectWithoutContainerOpTamInput[]
    upsert?: ConteudoUpsertWithWhereUniqueWithoutContainerOpTamInput | ConteudoUpsertWithWhereUniqueWithoutContainerOpTamInput[]
    createMany?: ConteudoCreateManyContainerOpTamInputEnvelope
    set?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    disconnect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    delete?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    connect?: ConteudoWhereUniqueInput | ConteudoWhereUniqueInput[]
    update?: ConteudoUpdateWithWhereUniqueWithoutContainerOpTamInput | ConteudoUpdateWithWhereUniqueWithoutContainerOpTamInput[]
    updateMany?: ConteudoUpdateManyWithWhereWithoutContainerOpTamInput | ConteudoUpdateManyWithWhereWithoutContainerOpTamInput[]
    deleteMany?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
  }

  export type ContainerOpCreateNestedManyWithoutOpInput = {
    create?: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput> | ContainerOpCreateWithoutOpInput[] | ContainerOpUncheckedCreateWithoutOpInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutOpInput | ContainerOpCreateOrConnectWithoutOpInput[]
    createMany?: ContainerOpCreateManyOpInputEnvelope
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
  }

  export type OpTamanhoCreateNestedManyWithoutOpInput = {
    create?: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput> | OpTamanhoCreateWithoutOpInput[] | OpTamanhoUncheckedCreateWithoutOpInput[]
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutOpInput | OpTamanhoCreateOrConnectWithoutOpInput[]
    createMany?: OpTamanhoCreateManyOpInputEnvelope
    connect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
  }

  export type ContainerOpUncheckedCreateNestedManyWithoutOpInput = {
    create?: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput> | ContainerOpCreateWithoutOpInput[] | ContainerOpUncheckedCreateWithoutOpInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutOpInput | ContainerOpCreateOrConnectWithoutOpInput[]
    createMany?: ContainerOpCreateManyOpInputEnvelope
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
  }

  export type OpTamanhoUncheckedCreateNestedManyWithoutOpInput = {
    create?: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput> | OpTamanhoCreateWithoutOpInput[] | OpTamanhoUncheckedCreateWithoutOpInput[]
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutOpInput | OpTamanhoCreateOrConnectWithoutOpInput[]
    createMany?: OpTamanhoCreateManyOpInputEnvelope
    connect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
  }

  export type ContainerOpUpdateManyWithoutOpNestedInput = {
    create?: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput> | ContainerOpCreateWithoutOpInput[] | ContainerOpUncheckedCreateWithoutOpInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutOpInput | ContainerOpCreateOrConnectWithoutOpInput[]
    upsert?: ContainerOpUpsertWithWhereUniqueWithoutOpInput | ContainerOpUpsertWithWhereUniqueWithoutOpInput[]
    createMany?: ContainerOpCreateManyOpInputEnvelope
    set?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    disconnect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    delete?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    update?: ContainerOpUpdateWithWhereUniqueWithoutOpInput | ContainerOpUpdateWithWhereUniqueWithoutOpInput[]
    updateMany?: ContainerOpUpdateManyWithWhereWithoutOpInput | ContainerOpUpdateManyWithWhereWithoutOpInput[]
    deleteMany?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
  }

  export type OpTamanhoUpdateManyWithoutOpNestedInput = {
    create?: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput> | OpTamanhoCreateWithoutOpInput[] | OpTamanhoUncheckedCreateWithoutOpInput[]
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutOpInput | OpTamanhoCreateOrConnectWithoutOpInput[]
    upsert?: OpTamanhoUpsertWithWhereUniqueWithoutOpInput | OpTamanhoUpsertWithWhereUniqueWithoutOpInput[]
    createMany?: OpTamanhoCreateManyOpInputEnvelope
    set?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    disconnect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    delete?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    connect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    update?: OpTamanhoUpdateWithWhereUniqueWithoutOpInput | OpTamanhoUpdateWithWhereUniqueWithoutOpInput[]
    updateMany?: OpTamanhoUpdateManyWithWhereWithoutOpInput | OpTamanhoUpdateManyWithWhereWithoutOpInput[]
    deleteMany?: OpTamanhoScalarWhereInput | OpTamanhoScalarWhereInput[]
  }

  export type ContainerOpUncheckedUpdateManyWithoutOpNestedInput = {
    create?: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput> | ContainerOpCreateWithoutOpInput[] | ContainerOpUncheckedCreateWithoutOpInput[]
    connectOrCreate?: ContainerOpCreateOrConnectWithoutOpInput | ContainerOpCreateOrConnectWithoutOpInput[]
    upsert?: ContainerOpUpsertWithWhereUniqueWithoutOpInput | ContainerOpUpsertWithWhereUniqueWithoutOpInput[]
    createMany?: ContainerOpCreateManyOpInputEnvelope
    set?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    disconnect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    delete?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    connect?: ContainerOpWhereUniqueInput | ContainerOpWhereUniqueInput[]
    update?: ContainerOpUpdateWithWhereUniqueWithoutOpInput | ContainerOpUpdateWithWhereUniqueWithoutOpInput[]
    updateMany?: ContainerOpUpdateManyWithWhereWithoutOpInput | ContainerOpUpdateManyWithWhereWithoutOpInput[]
    deleteMany?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
  }

  export type OpTamanhoUncheckedUpdateManyWithoutOpNestedInput = {
    create?: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput> | OpTamanhoCreateWithoutOpInput[] | OpTamanhoUncheckedCreateWithoutOpInput[]
    connectOrCreate?: OpTamanhoCreateOrConnectWithoutOpInput | OpTamanhoCreateOrConnectWithoutOpInput[]
    upsert?: OpTamanhoUpsertWithWhereUniqueWithoutOpInput | OpTamanhoUpsertWithWhereUniqueWithoutOpInput[]
    createMany?: OpTamanhoCreateManyOpInputEnvelope
    set?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    disconnect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    delete?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    connect?: OpTamanhoWhereUniqueInput | OpTamanhoWhereUniqueInput[]
    update?: OpTamanhoUpdateWithWhereUniqueWithoutOpInput | OpTamanhoUpdateWithWhereUniqueWithoutOpInput[]
    updateMany?: OpTamanhoUpdateManyWithWhereWithoutOpInput | OpTamanhoUpdateManyWithWhereWithoutOpInput[]
    deleteMany?: OpTamanhoScalarWhereInput | OpTamanhoScalarWhereInput[]
  }

  export type ContainerOpTamCreateNestedManyWithoutOpTamanhoInput = {
    create?: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput> | ContainerOpTamCreateWithoutOpTamanhoInput[] | ContainerOpTamUncheckedCreateWithoutOpTamanhoInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutOpTamanhoInput | ContainerOpTamCreateOrConnectWithoutOpTamanhoInput[]
    createMany?: ContainerOpTamCreateManyOpTamanhoInputEnvelope
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
  }

  export type OpCreateNestedOneWithoutOpTamanhoInput = {
    create?: XOR<OpCreateWithoutOpTamanhoInput, OpUncheckedCreateWithoutOpTamanhoInput>
    connectOrCreate?: OpCreateOrConnectWithoutOpTamanhoInput
    connect?: OpWhereUniqueInput
  }

  export type ContainerOpTamUncheckedCreateNestedManyWithoutOpTamanhoInput = {
    create?: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput> | ContainerOpTamCreateWithoutOpTamanhoInput[] | ContainerOpTamUncheckedCreateWithoutOpTamanhoInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutOpTamanhoInput | ContainerOpTamCreateOrConnectWithoutOpTamanhoInput[]
    createMany?: ContainerOpTamCreateManyOpTamanhoInputEnvelope
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
  }

  export type ContainerOpTamUpdateManyWithoutOpTamanhoNestedInput = {
    create?: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput> | ContainerOpTamCreateWithoutOpTamanhoInput[] | ContainerOpTamUncheckedCreateWithoutOpTamanhoInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutOpTamanhoInput | ContainerOpTamCreateOrConnectWithoutOpTamanhoInput[]
    upsert?: ContainerOpTamUpsertWithWhereUniqueWithoutOpTamanhoInput | ContainerOpTamUpsertWithWhereUniqueWithoutOpTamanhoInput[]
    createMany?: ContainerOpTamCreateManyOpTamanhoInputEnvelope
    set?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    disconnect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    delete?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    update?: ContainerOpTamUpdateWithWhereUniqueWithoutOpTamanhoInput | ContainerOpTamUpdateWithWhereUniqueWithoutOpTamanhoInput[]
    updateMany?: ContainerOpTamUpdateManyWithWhereWithoutOpTamanhoInput | ContainerOpTamUpdateManyWithWhereWithoutOpTamanhoInput[]
    deleteMany?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
  }

  export type OpUpdateOneRequiredWithoutOpTamanhoNestedInput = {
    create?: XOR<OpCreateWithoutOpTamanhoInput, OpUncheckedCreateWithoutOpTamanhoInput>
    connectOrCreate?: OpCreateOrConnectWithoutOpTamanhoInput
    upsert?: OpUpsertWithoutOpTamanhoInput
    connect?: OpWhereUniqueInput
    update?: XOR<XOR<OpUpdateToOneWithWhereWithoutOpTamanhoInput, OpUpdateWithoutOpTamanhoInput>, OpUncheckedUpdateWithoutOpTamanhoInput>
  }

  export type ContainerOpTamUncheckedUpdateManyWithoutOpTamanhoNestedInput = {
    create?: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput> | ContainerOpTamCreateWithoutOpTamanhoInput[] | ContainerOpTamUncheckedCreateWithoutOpTamanhoInput[]
    connectOrCreate?: ContainerOpTamCreateOrConnectWithoutOpTamanhoInput | ContainerOpTamCreateOrConnectWithoutOpTamanhoInput[]
    upsert?: ContainerOpTamUpsertWithWhereUniqueWithoutOpTamanhoInput | ContainerOpTamUpsertWithWhereUniqueWithoutOpTamanhoInput[]
    createMany?: ContainerOpTamCreateManyOpTamanhoInputEnvelope
    set?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    disconnect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    delete?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    connect?: ContainerOpTamWhereUniqueInput | ContainerOpTamWhereUniqueInput[]
    update?: ContainerOpTamUpdateWithWhereUniqueWithoutOpTamanhoInput | ContainerOpTamUpdateWithWhereUniqueWithoutOpTamanhoInput[]
    updateMany?: ContainerOpTamUpdateManyWithWhereWithoutOpTamanhoInput | ContainerOpTamUpdateManyWithWhereWithoutOpTamanhoInput[]
    deleteMany?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserPapeisCreateWithoutPapeisInput = {
    User: UserCreateNestedOneWithoutUserPapeisInput
  }

  export type UserPapeisUncheckedCreateWithoutPapeisInput = {
    nomeUser: string
  }

  export type UserPapeisCreateOrConnectWithoutPapeisInput = {
    where: UserPapeisWhereUniqueInput
    create: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput>
  }

  export type UserPapeisCreateManyPapeisInputEnvelope = {
    data: UserPapeisCreateManyPapeisInput | UserPapeisCreateManyPapeisInput[]
  }

  export type UserPapeisUpsertWithWhereUniqueWithoutPapeisInput = {
    where: UserPapeisWhereUniqueInput
    update: XOR<UserPapeisUpdateWithoutPapeisInput, UserPapeisUncheckedUpdateWithoutPapeisInput>
    create: XOR<UserPapeisCreateWithoutPapeisInput, UserPapeisUncheckedCreateWithoutPapeisInput>
  }

  export type UserPapeisUpdateWithWhereUniqueWithoutPapeisInput = {
    where: UserPapeisWhereUniqueInput
    data: XOR<UserPapeisUpdateWithoutPapeisInput, UserPapeisUncheckedUpdateWithoutPapeisInput>
  }

  export type UserPapeisUpdateManyWithWhereWithoutPapeisInput = {
    where: UserPapeisScalarWhereInput
    data: XOR<UserPapeisUpdateManyMutationInput, UserPapeisUncheckedUpdateManyWithoutPapeisInput>
  }

  export type UserPapeisScalarWhereInput = {
    AND?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
    OR?: UserPapeisScalarWhereInput[]
    NOT?: UserPapeisScalarWhereInput | UserPapeisScalarWhereInput[]
    idPapel?: StringFilter<"UserPapeis"> | string
    nomeUser?: StringFilter<"UserPapeis"> | string
  }

  export type UserPapeisCreateWithoutUserInput = {
    Papeis: PapeisCreateNestedOneWithoutUserPapeisInput
  }

  export type UserPapeisUncheckedCreateWithoutUserInput = {
    idPapel: string
  }

  export type UserPapeisCreateOrConnectWithoutUserInput = {
    where: UserPapeisWhereUniqueInput
    create: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput>
  }

  export type UserPapeisCreateManyUserInputEnvelope = {
    data: UserPapeisCreateManyUserInput | UserPapeisCreateManyUserInput[]
  }

  export type UserPapeisUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPapeisWhereUniqueInput
    update: XOR<UserPapeisUpdateWithoutUserInput, UserPapeisUncheckedUpdateWithoutUserInput>
    create: XOR<UserPapeisCreateWithoutUserInput, UserPapeisUncheckedCreateWithoutUserInput>
  }

  export type UserPapeisUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPapeisWhereUniqueInput
    data: XOR<UserPapeisUpdateWithoutUserInput, UserPapeisUncheckedUpdateWithoutUserInput>
  }

  export type UserPapeisUpdateManyWithWhereWithoutUserInput = {
    where: UserPapeisScalarWhereInput
    data: XOR<UserPapeisUpdateManyMutationInput, UserPapeisUncheckedUpdateManyWithoutUserInput>
  }

  export type PapeisCreateWithoutUserPapeisInput = {
    idPapel?: string
    descPapel: string
  }

  export type PapeisUncheckedCreateWithoutUserPapeisInput = {
    idPapel?: string
    descPapel: string
  }

  export type PapeisCreateOrConnectWithoutUserPapeisInput = {
    where: PapeisWhereUniqueInput
    create: XOR<PapeisCreateWithoutUserPapeisInput, PapeisUncheckedCreateWithoutUserPapeisInput>
  }

  export type UserCreateWithoutUserPapeisInput = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken?: string | null
    nome: string
    apelido: string
    email: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UserUncheckedCreateWithoutUserPapeisInput = {
    nomeUser: string
    pHashed: string
    hashedRefreshToken?: string | null
    nome: string
    apelido: string
    email: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type UserCreateOrConnectWithoutUserPapeisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPapeisInput, UserUncheckedCreateWithoutUserPapeisInput>
  }

  export type PapeisUpsertWithoutUserPapeisInput = {
    update: XOR<PapeisUpdateWithoutUserPapeisInput, PapeisUncheckedUpdateWithoutUserPapeisInput>
    create: XOR<PapeisCreateWithoutUserPapeisInput, PapeisUncheckedCreateWithoutUserPapeisInput>
    where?: PapeisWhereInput
  }

  export type PapeisUpdateToOneWithWhereWithoutUserPapeisInput = {
    where?: PapeisWhereInput
    data: XOR<PapeisUpdateWithoutUserPapeisInput, PapeisUncheckedUpdateWithoutUserPapeisInput>
  }

  export type PapeisUpdateWithoutUserPapeisInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
  }

  export type PapeisUncheckedUpdateWithoutUserPapeisInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
    descPapel?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutUserPapeisInput = {
    update: XOR<UserUpdateWithoutUserPapeisInput, UserUncheckedUpdateWithoutUserPapeisInput>
    create: XOR<UserCreateWithoutUserPapeisInput, UserUncheckedCreateWithoutUserPapeisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPapeisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPapeisInput, UserUncheckedUpdateWithoutUserPapeisInput>
  }

  export type UserUpdateWithoutUserPapeisInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserPapeisInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
    pHashed?: StringFieldUpdateOperationsInput | string
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: StringFieldUpdateOperationsInput | string
    apelido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContainerCreateWithoutOther_ContainerInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutOther_ContainerInput = {
    idContainer?: number
    idContainerPai?: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutOther_ContainerInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutOther_ContainerInput, ContainerUncheckedCreateWithoutOther_ContainerInput>
  }

  export type ContainerCreateWithoutContainerInput = {
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutContainerInput = {
    idContainer?: number
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutContainerInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput>
  }

  export type ContainerCreateManyContainerInputEnvelope = {
    data: ContainerCreateManyContainerInput | ContainerCreateManyContainerInput[]
  }

  export type EnvioCreateWithoutContainerInput = {
    nomeEnvio: string
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
    Destinos: DestinosCreateNestedOneWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutContainerInput = {
    idEnvio?: number
    nomeEnvio: string
    idDestino: number
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
  }

  export type EnvioCreateOrConnectWithoutContainerInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutContainerInput, EnvioUncheckedCreateWithoutContainerInput>
  }

  export type TipoContainerCreateWithoutContainerInput = {
    permiteSubContainer?: boolean
    Item: ItemCreateNestedOneWithoutTipoContainerInput
  }

  export type TipoContainerUncheckedCreateWithoutContainerInput = {
    idTipoContainer?: number
    idItem: number
    permiteSubContainer?: boolean
  }

  export type TipoContainerCreateOrConnectWithoutContainerInput = {
    where: TipoContainerWhereUniqueInput
    create: XOR<TipoContainerCreateWithoutContainerInput, TipoContainerUncheckedCreateWithoutContainerInput>
  }

  export type ContainerOpCreateWithoutContainerInput = {
    Op: OpCreateNestedOneWithoutContainerOpInput
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUncheckedCreateWithoutContainerInput = {
    op: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpCreateOrConnectWithoutContainerInput = {
    where: ContainerOpWhereUniqueInput
    create: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput>
  }

  export type ContainerOpCreateManyContainerInputEnvelope = {
    data: ContainerOpCreateManyContainerInput | ContainerOpCreateManyContainerInput[]
  }

  export type ConteudoCreateWithoutContainerInput = {
    idConteudo?: number
    qtt: number
    peso: number
    ContainerOp: ContainerOpCreateNestedOneWithoutConteudoInput
    ContainerOpTam: ContainerOpTamCreateNestedOneWithoutConteudoInput
    Item: ItemCreateNestedOneWithoutConteudoInput
  }

  export type ConteudoUncheckedCreateWithoutContainerInput = {
    idConteudo?: number
    idItem: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ConteudoCreateOrConnectWithoutContainerInput = {
    where: ConteudoWhereUniqueInput
    create: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput>
  }

  export type ConteudoCreateManyContainerInputEnvelope = {
    data: ConteudoCreateManyContainerInput | ConteudoCreateManyContainerInput[]
  }

  export type ContainerUpsertWithoutOther_ContainerInput = {
    update: XOR<ContainerUpdateWithoutOther_ContainerInput, ContainerUncheckedUpdateWithoutOther_ContainerInput>
    create: XOR<ContainerCreateWithoutOther_ContainerInput, ContainerUncheckedCreateWithoutOther_ContainerInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutOther_ContainerInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutOther_ContainerInput, ContainerUncheckedUpdateWithoutOther_ContainerInput>
  }

  export type ContainerUpdateWithoutOther_ContainerInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutOther_ContainerInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUpsertWithWhereUniqueWithoutContainerInput = {
    where: ContainerWhereUniqueInput
    update: XOR<ContainerUpdateWithoutContainerInput, ContainerUncheckedUpdateWithoutContainerInput>
    create: XOR<ContainerCreateWithoutContainerInput, ContainerUncheckedCreateWithoutContainerInput>
  }

  export type ContainerUpdateWithWhereUniqueWithoutContainerInput = {
    where: ContainerWhereUniqueInput
    data: XOR<ContainerUpdateWithoutContainerInput, ContainerUncheckedUpdateWithoutContainerInput>
  }

  export type ContainerUpdateManyWithWhereWithoutContainerInput = {
    where: ContainerScalarWhereInput
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyWithoutContainerInput>
  }

  export type ContainerScalarWhereInput = {
    AND?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    OR?: ContainerScalarWhereInput[]
    NOT?: ContainerScalarWhereInput | ContainerScalarWhereInput[]
    idContainer?: IntFilter<"Container"> | number
    idContainerPai?: IntNullableFilter<"Container"> | number | null
    idEnvio?: IntFilter<"Container"> | number
    idTipoContainer?: IntFilter<"Container"> | number
    ordem?: IntFilter<"Container"> | number
    nContainer?: IntFilter<"Container"> | number
    altura?: FloatFilter<"Container"> | number
  }

  export type EnvioUpsertWithoutContainerInput = {
    update: XOR<EnvioUpdateWithoutContainerInput, EnvioUncheckedUpdateWithoutContainerInput>
    create: XOR<EnvioCreateWithoutContainerInput, EnvioUncheckedCreateWithoutContainerInput>
    where?: EnvioWhereInput
  }

  export type EnvioUpdateToOneWithWhereWithoutContainerInput = {
    where?: EnvioWhereInput
    data: XOR<EnvioUpdateWithoutContainerInput, EnvioUncheckedUpdateWithoutContainerInput>
  }

  export type EnvioUpdateWithoutContainerInput = {
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
    Destinos?: DestinosUpdateOneRequiredWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutContainerInput = {
    idEnvio?: IntFieldUpdateOperationsInput | number
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    idDestino?: IntFieldUpdateOperationsInput | number
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type TipoContainerUpsertWithoutContainerInput = {
    update: XOR<TipoContainerUpdateWithoutContainerInput, TipoContainerUncheckedUpdateWithoutContainerInput>
    create: XOR<TipoContainerCreateWithoutContainerInput, TipoContainerUncheckedCreateWithoutContainerInput>
    where?: TipoContainerWhereInput
  }

  export type TipoContainerUpdateToOneWithWhereWithoutContainerInput = {
    where?: TipoContainerWhereInput
    data: XOR<TipoContainerUpdateWithoutContainerInput, TipoContainerUncheckedUpdateWithoutContainerInput>
  }

  export type TipoContainerUpdateWithoutContainerInput = {
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
    Item?: ItemUpdateOneRequiredWithoutTipoContainerNestedInput
  }

  export type TipoContainerUncheckedUpdateWithoutContainerInput = {
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContainerOpUpsertWithWhereUniqueWithoutContainerInput = {
    where: ContainerOpWhereUniqueInput
    update: XOR<ContainerOpUpdateWithoutContainerInput, ContainerOpUncheckedUpdateWithoutContainerInput>
    create: XOR<ContainerOpCreateWithoutContainerInput, ContainerOpUncheckedCreateWithoutContainerInput>
  }

  export type ContainerOpUpdateWithWhereUniqueWithoutContainerInput = {
    where: ContainerOpWhereUniqueInput
    data: XOR<ContainerOpUpdateWithoutContainerInput, ContainerOpUncheckedUpdateWithoutContainerInput>
  }

  export type ContainerOpUpdateManyWithWhereWithoutContainerInput = {
    where: ContainerOpScalarWhereInput
    data: XOR<ContainerOpUpdateManyMutationInput, ContainerOpUncheckedUpdateManyWithoutContainerInput>
  }

  export type ContainerOpScalarWhereInput = {
    AND?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
    OR?: ContainerOpScalarWhereInput[]
    NOT?: ContainerOpScalarWhereInput | ContainerOpScalarWhereInput[]
    idContainer?: IntFilter<"ContainerOp"> | number
    op?: IntFilter<"ContainerOp"> | number
  }

  export type ConteudoUpsertWithWhereUniqueWithoutContainerInput = {
    where: ConteudoWhereUniqueInput
    update: XOR<ConteudoUpdateWithoutContainerInput, ConteudoUncheckedUpdateWithoutContainerInput>
    create: XOR<ConteudoCreateWithoutContainerInput, ConteudoUncheckedCreateWithoutContainerInput>
  }

  export type ConteudoUpdateWithWhereUniqueWithoutContainerInput = {
    where: ConteudoWhereUniqueInput
    data: XOR<ConteudoUpdateWithoutContainerInput, ConteudoUncheckedUpdateWithoutContainerInput>
  }

  export type ConteudoUpdateManyWithWhereWithoutContainerInput = {
    where: ConteudoScalarWhereInput
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyWithoutContainerInput>
  }

  export type ConteudoScalarWhereInput = {
    AND?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
    OR?: ConteudoScalarWhereInput[]
    NOT?: ConteudoScalarWhereInput | ConteudoScalarWhereInput[]
    idConteudo?: IntFilter<"Conteudo"> | number
    idContainer?: IntFilter<"Conteudo"> | number
    idItem?: IntFilter<"Conteudo"> | number
    op?: IntFilter<"Conteudo"> | number
    tam?: StringFilter<"Conteudo"> | string
    qtt?: FloatFilter<"Conteudo"> | number
    peso?: FloatFilter<"Conteudo"> | number
  }

  export type ContainerCreateWithoutConteudoInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutConteudoInput = {
    idContainer?: number
    idContainerPai?: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutConteudoInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutConteudoInput, ContainerUncheckedCreateWithoutConteudoInput>
  }

  export type ContainerOpCreateWithoutConteudoInput = {
    Container: ContainerCreateNestedOneWithoutContainerOpInput
    Op: OpCreateNestedOneWithoutContainerOpInput
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUncheckedCreateWithoutConteudoInput = {
    idContainer: number
    op: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpCreateOrConnectWithoutConteudoInput = {
    where: ContainerOpWhereUniqueInput
    create: XOR<ContainerOpCreateWithoutConteudoInput, ContainerOpUncheckedCreateWithoutConteudoInput>
  }

  export type ContainerOpTamCreateWithoutConteudoInput = {
    ContainerOp: ContainerOpCreateNestedOneWithoutContainerOpTamInput
    OpTamanho: OpTamanhoCreateNestedOneWithoutContainerOpTamInput
  }

  export type ContainerOpTamUncheckedCreateWithoutConteudoInput = {
    idContainer: number
    op: number
    tam: string
  }

  export type ContainerOpTamCreateOrConnectWithoutConteudoInput = {
    where: ContainerOpTamWhereUniqueInput
    create: XOR<ContainerOpTamCreateWithoutConteudoInput, ContainerOpTamUncheckedCreateWithoutConteudoInput>
  }

  export type ItemCreateWithoutConteudoInput = {
    Descricao: string
    ItemTraduzido?: ItemTraduzidoCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutConteudoInput = {
    idItem?: number
    Descricao: string
    ItemTraduzido?: ItemTraduzidoUncheckedCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutConteudoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutConteudoInput, ItemUncheckedCreateWithoutConteudoInput>
  }

  export type ContainerUpsertWithoutConteudoInput = {
    update: XOR<ContainerUpdateWithoutConteudoInput, ContainerUncheckedUpdateWithoutConteudoInput>
    create: XOR<ContainerCreateWithoutConteudoInput, ContainerUncheckedCreateWithoutConteudoInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutConteudoInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutConteudoInput, ContainerUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerUpdateWithoutConteudoInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutConteudoInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerOpUpsertWithoutConteudoInput = {
    update: XOR<ContainerOpUpdateWithoutConteudoInput, ContainerOpUncheckedUpdateWithoutConteudoInput>
    create: XOR<ContainerOpCreateWithoutConteudoInput, ContainerOpUncheckedCreateWithoutConteudoInput>
    where?: ContainerOpWhereInput
  }

  export type ContainerOpUpdateToOneWithWhereWithoutConteudoInput = {
    where?: ContainerOpWhereInput
    data: XOR<ContainerOpUpdateWithoutConteudoInput, ContainerOpUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerOpUpdateWithoutConteudoInput = {
    Container?: ContainerUpdateOneRequiredWithoutContainerOpNestedInput
    Op?: OpUpdateOneRequiredWithoutContainerOpNestedInput
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateWithoutConteudoInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpTamUpsertWithoutConteudoInput = {
    update: XOR<ContainerOpTamUpdateWithoutConteudoInput, ContainerOpTamUncheckedUpdateWithoutConteudoInput>
    create: XOR<ContainerOpTamCreateWithoutConteudoInput, ContainerOpTamUncheckedCreateWithoutConteudoInput>
    where?: ContainerOpTamWhereInput
  }

  export type ContainerOpTamUpdateToOneWithWhereWithoutConteudoInput = {
    where?: ContainerOpTamWhereInput
    data: XOR<ContainerOpTamUpdateWithoutConteudoInput, ContainerOpTamUncheckedUpdateWithoutConteudoInput>
  }

  export type ContainerOpTamUpdateWithoutConteudoInput = {
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutContainerOpTamNestedInput
    OpTamanho?: OpTamanhoUpdateOneRequiredWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateWithoutConteudoInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUpsertWithoutConteudoInput = {
    update: XOR<ItemUpdateWithoutConteudoInput, ItemUncheckedUpdateWithoutConteudoInput>
    create: XOR<ItemCreateWithoutConteudoInput, ItemUncheckedCreateWithoutConteudoInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutConteudoInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutConteudoInput, ItemUncheckedUpdateWithoutConteudoInput>
  }

  export type ItemUpdateWithoutConteudoInput = {
    Descricao?: StringFieldUpdateOperationsInput | string
    ItemTraduzido?: ItemTraduzidoUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutConteudoInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    Descricao?: StringFieldUpdateOperationsInput | string
    ItemTraduzido?: ItemTraduzidoUncheckedUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ContainerCreateWithoutEnvioInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutEnvioInput = {
    idContainer?: number
    idContainerPai?: number | null
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutEnvioInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput>
  }

  export type ContainerCreateManyEnvioInputEnvelope = {
    data: ContainerCreateManyEnvioInput | ContainerCreateManyEnvioInput[]
  }

  export type DestinosCreateWithoutEnvioInput = {
    nomeDestino: string
    Idiomas: IdiomasCreateNestedOneWithoutDestinosInput
  }

  export type DestinosUncheckedCreateWithoutEnvioInput = {
    idDestino?: number
    idIdioma: number
    nomeDestino: string
  }

  export type DestinosCreateOrConnectWithoutEnvioInput = {
    where: DestinosWhereUniqueInput
    create: XOR<DestinosCreateWithoutEnvioInput, DestinosUncheckedCreateWithoutEnvioInput>
  }

  export type ContainerUpsertWithWhereUniqueWithoutEnvioInput = {
    where: ContainerWhereUniqueInput
    update: XOR<ContainerUpdateWithoutEnvioInput, ContainerUncheckedUpdateWithoutEnvioInput>
    create: XOR<ContainerCreateWithoutEnvioInput, ContainerUncheckedCreateWithoutEnvioInput>
  }

  export type ContainerUpdateWithWhereUniqueWithoutEnvioInput = {
    where: ContainerWhereUniqueInput
    data: XOR<ContainerUpdateWithoutEnvioInput, ContainerUncheckedUpdateWithoutEnvioInput>
  }

  export type ContainerUpdateManyWithWhereWithoutEnvioInput = {
    where: ContainerScalarWhereInput
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyWithoutEnvioInput>
  }

  export type DestinosUpsertWithoutEnvioInput = {
    update: XOR<DestinosUpdateWithoutEnvioInput, DestinosUncheckedUpdateWithoutEnvioInput>
    create: XOR<DestinosCreateWithoutEnvioInput, DestinosUncheckedCreateWithoutEnvioInput>
    where?: DestinosWhereInput
  }

  export type DestinosUpdateToOneWithWhereWithoutEnvioInput = {
    where?: DestinosWhereInput
    data: XOR<DestinosUpdateWithoutEnvioInput, DestinosUncheckedUpdateWithoutEnvioInput>
  }

  export type DestinosUpdateWithoutEnvioInput = {
    nomeDestino?: StringFieldUpdateOperationsInput | string
    Idiomas?: IdiomasUpdateOneRequiredWithoutDestinosNestedInput
  }

  export type DestinosUncheckedUpdateWithoutEnvioInput = {
    idDestino?: IntFieldUpdateOperationsInput | number
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeDestino?: StringFieldUpdateOperationsInput | string
  }

  export type DestinosCreateWithoutIdiomasInput = {
    nomeDestino: string
    Envio?: EnvioCreateNestedManyWithoutDestinosInput
  }

  export type DestinosUncheckedCreateWithoutIdiomasInput = {
    idDestino?: number
    nomeDestino: string
    Envio?: EnvioUncheckedCreateNestedManyWithoutDestinosInput
  }

  export type DestinosCreateOrConnectWithoutIdiomasInput = {
    where: DestinosWhereUniqueInput
    create: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput>
  }

  export type DestinosCreateManyIdiomasInputEnvelope = {
    data: DestinosCreateManyIdiomasInput | DestinosCreateManyIdiomasInput[]
  }

  export type ItemTraduzidoCreateWithoutIdiomasInput = {
    descItem: string
    Item: ItemCreateNestedOneWithoutItemTraduzidoInput
  }

  export type ItemTraduzidoUncheckedCreateWithoutIdiomasInput = {
    idItem: number
    descItem: string
  }

  export type ItemTraduzidoCreateOrConnectWithoutIdiomasInput = {
    where: ItemTraduzidoWhereUniqueInput
    create: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput>
  }

  export type ItemTraduzidoCreateManyIdiomasInputEnvelope = {
    data: ItemTraduzidoCreateManyIdiomasInput | ItemTraduzidoCreateManyIdiomasInput[]
  }

  export type DestinosUpsertWithWhereUniqueWithoutIdiomasInput = {
    where: DestinosWhereUniqueInput
    update: XOR<DestinosUpdateWithoutIdiomasInput, DestinosUncheckedUpdateWithoutIdiomasInput>
    create: XOR<DestinosCreateWithoutIdiomasInput, DestinosUncheckedCreateWithoutIdiomasInput>
  }

  export type DestinosUpdateWithWhereUniqueWithoutIdiomasInput = {
    where: DestinosWhereUniqueInput
    data: XOR<DestinosUpdateWithoutIdiomasInput, DestinosUncheckedUpdateWithoutIdiomasInput>
  }

  export type DestinosUpdateManyWithWhereWithoutIdiomasInput = {
    where: DestinosScalarWhereInput
    data: XOR<DestinosUpdateManyMutationInput, DestinosUncheckedUpdateManyWithoutIdiomasInput>
  }

  export type DestinosScalarWhereInput = {
    AND?: DestinosScalarWhereInput | DestinosScalarWhereInput[]
    OR?: DestinosScalarWhereInput[]
    NOT?: DestinosScalarWhereInput | DestinosScalarWhereInput[]
    idDestino?: IntFilter<"Destinos"> | number
    idIdioma?: IntFilter<"Destinos"> | number
    nomeDestino?: StringFilter<"Destinos"> | string
  }

  export type ItemTraduzidoUpsertWithWhereUniqueWithoutIdiomasInput = {
    where: ItemTraduzidoWhereUniqueInput
    update: XOR<ItemTraduzidoUpdateWithoutIdiomasInput, ItemTraduzidoUncheckedUpdateWithoutIdiomasInput>
    create: XOR<ItemTraduzidoCreateWithoutIdiomasInput, ItemTraduzidoUncheckedCreateWithoutIdiomasInput>
  }

  export type ItemTraduzidoUpdateWithWhereUniqueWithoutIdiomasInput = {
    where: ItemTraduzidoWhereUniqueInput
    data: XOR<ItemTraduzidoUpdateWithoutIdiomasInput, ItemTraduzidoUncheckedUpdateWithoutIdiomasInput>
  }

  export type ItemTraduzidoUpdateManyWithWhereWithoutIdiomasInput = {
    where: ItemTraduzidoScalarWhereInput
    data: XOR<ItemTraduzidoUpdateManyMutationInput, ItemTraduzidoUncheckedUpdateManyWithoutIdiomasInput>
  }

  export type ItemTraduzidoScalarWhereInput = {
    AND?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
    OR?: ItemTraduzidoScalarWhereInput[]
    NOT?: ItemTraduzidoScalarWhereInput | ItemTraduzidoScalarWhereInput[]
    idIdioma?: IntFilter<"ItemTraduzido"> | number
    idItem?: IntFilter<"ItemTraduzido"> | number
    descItem?: StringFilter<"ItemTraduzido"> | string
  }

  export type ConteudoCreateWithoutItemInput = {
    idConteudo?: number
    qtt: number
    peso: number
    Container: ContainerCreateNestedOneWithoutConteudoInput
    ContainerOp: ContainerOpCreateNestedOneWithoutConteudoInput
    ContainerOpTam: ContainerOpTamCreateNestedOneWithoutConteudoInput
  }

  export type ConteudoUncheckedCreateWithoutItemInput = {
    idConteudo?: number
    idContainer: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ConteudoCreateOrConnectWithoutItemInput = {
    where: ConteudoWhereUniqueInput
    create: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput>
  }

  export type ConteudoCreateManyItemInputEnvelope = {
    data: ConteudoCreateManyItemInput | ConteudoCreateManyItemInput[]
  }

  export type ItemTraduzidoCreateWithoutItemInput = {
    descItem: string
    Idiomas: IdiomasCreateNestedOneWithoutItemTraduzidoInput
  }

  export type ItemTraduzidoUncheckedCreateWithoutItemInput = {
    idIdioma: number
    descItem: string
  }

  export type ItemTraduzidoCreateOrConnectWithoutItemInput = {
    where: ItemTraduzidoWhereUniqueInput
    create: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput>
  }

  export type ItemTraduzidoCreateManyItemInputEnvelope = {
    data: ItemTraduzidoCreateManyItemInput | ItemTraduzidoCreateManyItemInput[]
  }

  export type TipoContainerCreateWithoutItemInput = {
    permiteSubContainer?: boolean
    Container?: ContainerCreateNestedManyWithoutTipoContainerInput
  }

  export type TipoContainerUncheckedCreateWithoutItemInput = {
    idTipoContainer?: number
    permiteSubContainer?: boolean
    Container?: ContainerUncheckedCreateNestedManyWithoutTipoContainerInput
  }

  export type TipoContainerCreateOrConnectWithoutItemInput = {
    where: TipoContainerWhereUniqueInput
    create: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
  }

  export type ConteudoUpsertWithWhereUniqueWithoutItemInput = {
    where: ConteudoWhereUniqueInput
    update: XOR<ConteudoUpdateWithoutItemInput, ConteudoUncheckedUpdateWithoutItemInput>
    create: XOR<ConteudoCreateWithoutItemInput, ConteudoUncheckedCreateWithoutItemInput>
  }

  export type ConteudoUpdateWithWhereUniqueWithoutItemInput = {
    where: ConteudoWhereUniqueInput
    data: XOR<ConteudoUpdateWithoutItemInput, ConteudoUncheckedUpdateWithoutItemInput>
  }

  export type ConteudoUpdateManyWithWhereWithoutItemInput = {
    where: ConteudoScalarWhereInput
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemTraduzidoUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemTraduzidoWhereUniqueInput
    update: XOR<ItemTraduzidoUpdateWithoutItemInput, ItemTraduzidoUncheckedUpdateWithoutItemInput>
    create: XOR<ItemTraduzidoCreateWithoutItemInput, ItemTraduzidoUncheckedCreateWithoutItemInput>
  }

  export type ItemTraduzidoUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemTraduzidoWhereUniqueInput
    data: XOR<ItemTraduzidoUpdateWithoutItemInput, ItemTraduzidoUncheckedUpdateWithoutItemInput>
  }

  export type ItemTraduzidoUpdateManyWithWhereWithoutItemInput = {
    where: ItemTraduzidoScalarWhereInput
    data: XOR<ItemTraduzidoUpdateManyMutationInput, ItemTraduzidoUncheckedUpdateManyWithoutItemInput>
  }

  export type TipoContainerUpsertWithoutItemInput = {
    update: XOR<TipoContainerUpdateWithoutItemInput, TipoContainerUncheckedUpdateWithoutItemInput>
    create: XOR<TipoContainerCreateWithoutItemInput, TipoContainerUncheckedCreateWithoutItemInput>
    where?: TipoContainerWhereInput
  }

  export type TipoContainerUpdateToOneWithWhereWithoutItemInput = {
    where?: TipoContainerWhereInput
    data: XOR<TipoContainerUpdateWithoutItemInput, TipoContainerUncheckedUpdateWithoutItemInput>
  }

  export type TipoContainerUpdateWithoutItemInput = {
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
    Container?: ContainerUpdateManyWithoutTipoContainerNestedInput
  }

  export type TipoContainerUncheckedUpdateWithoutItemInput = {
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    permiteSubContainer?: BoolFieldUpdateOperationsInput | boolean
    Container?: ContainerUncheckedUpdateManyWithoutTipoContainerNestedInput
  }

  export type IdiomasCreateWithoutItemTraduzidoInput = {
    nomeIdioma: string
    Destinos?: DestinosCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasUncheckedCreateWithoutItemTraduzidoInput = {
    idIdioma?: number
    nomeIdioma: string
    Destinos?: DestinosUncheckedCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasCreateOrConnectWithoutItemTraduzidoInput = {
    where: IdiomasWhereUniqueInput
    create: XOR<IdiomasCreateWithoutItemTraduzidoInput, IdiomasUncheckedCreateWithoutItemTraduzidoInput>
  }

  export type ItemCreateWithoutItemTraduzidoInput = {
    Descricao: string
    Conteudo?: ConteudoCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutItemTraduzidoInput = {
    idItem?: number
    Descricao: string
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutItemInput
    TipoContainer?: TipoContainerUncheckedCreateNestedOneWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutItemTraduzidoInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItemTraduzidoInput, ItemUncheckedCreateWithoutItemTraduzidoInput>
  }

  export type IdiomasUpsertWithoutItemTraduzidoInput = {
    update: XOR<IdiomasUpdateWithoutItemTraduzidoInput, IdiomasUncheckedUpdateWithoutItemTraduzidoInput>
    create: XOR<IdiomasCreateWithoutItemTraduzidoInput, IdiomasUncheckedCreateWithoutItemTraduzidoInput>
    where?: IdiomasWhereInput
  }

  export type IdiomasUpdateToOneWithWhereWithoutItemTraduzidoInput = {
    where?: IdiomasWhereInput
    data: XOR<IdiomasUpdateWithoutItemTraduzidoInput, IdiomasUncheckedUpdateWithoutItemTraduzidoInput>
  }

  export type IdiomasUpdateWithoutItemTraduzidoInput = {
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    Destinos?: DestinosUpdateManyWithoutIdiomasNestedInput
  }

  export type IdiomasUncheckedUpdateWithoutItemTraduzidoInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    Destinos?: DestinosUncheckedUpdateManyWithoutIdiomasNestedInput
  }

  export type ItemUpsertWithoutItemTraduzidoInput = {
    update: XOR<ItemUpdateWithoutItemTraduzidoInput, ItemUncheckedUpdateWithoutItemTraduzidoInput>
    create: XOR<ItemCreateWithoutItemTraduzidoInput, ItemUncheckedCreateWithoutItemTraduzidoInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutItemTraduzidoInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutItemTraduzidoInput, ItemUncheckedUpdateWithoutItemTraduzidoInput>
  }

  export type ItemUpdateWithoutItemTraduzidoInput = {
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutItemTraduzidoInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUncheckedUpdateManyWithoutItemNestedInput
    TipoContainer?: TipoContainerUncheckedUpdateOneWithoutItemNestedInput
  }

  export type ContainerCreateWithoutTipoContainerInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    ContainerOp?: ContainerOpCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutTipoContainerInput = {
    idContainer?: number
    idContainerPai?: number | null
    idEnvio: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutTipoContainerInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput>
  }

  export type ContainerCreateManyTipoContainerInputEnvelope = {
    data: ContainerCreateManyTipoContainerInput | ContainerCreateManyTipoContainerInput[]
  }

  export type ItemCreateWithoutTipoContainerInput = {
    Descricao: string
    Conteudo?: ConteudoCreateNestedManyWithoutItemInput
    ItemTraduzido?: ItemTraduzidoCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutTipoContainerInput = {
    idItem?: number
    Descricao: string
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutItemInput
    ItemTraduzido?: ItemTraduzidoUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutTipoContainerInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutTipoContainerInput, ItemUncheckedCreateWithoutTipoContainerInput>
  }

  export type ContainerUpsertWithWhereUniqueWithoutTipoContainerInput = {
    where: ContainerWhereUniqueInput
    update: XOR<ContainerUpdateWithoutTipoContainerInput, ContainerUncheckedUpdateWithoutTipoContainerInput>
    create: XOR<ContainerCreateWithoutTipoContainerInput, ContainerUncheckedCreateWithoutTipoContainerInput>
  }

  export type ContainerUpdateWithWhereUniqueWithoutTipoContainerInput = {
    where: ContainerWhereUniqueInput
    data: XOR<ContainerUpdateWithoutTipoContainerInput, ContainerUncheckedUpdateWithoutTipoContainerInput>
  }

  export type ContainerUpdateManyWithWhereWithoutTipoContainerInput = {
    where: ContainerScalarWhereInput
    data: XOR<ContainerUpdateManyMutationInput, ContainerUncheckedUpdateManyWithoutTipoContainerInput>
  }

  export type ItemUpsertWithoutTipoContainerInput = {
    update: XOR<ItemUpdateWithoutTipoContainerInput, ItemUncheckedUpdateWithoutTipoContainerInput>
    create: XOR<ItemCreateWithoutTipoContainerInput, ItemUncheckedCreateWithoutTipoContainerInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutTipoContainerInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutTipoContainerInput, ItemUncheckedUpdateWithoutTipoContainerInput>
  }

  export type ItemUpdateWithoutTipoContainerInput = {
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUpdateManyWithoutItemNestedInput
    ItemTraduzido?: ItemTraduzidoUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutTipoContainerInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    Descricao?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUncheckedUpdateManyWithoutItemNestedInput
    ItemTraduzido?: ItemTraduzidoUncheckedUpdateManyWithoutItemNestedInput
  }

  export type IdiomasCreateWithoutDestinosInput = {
    nomeIdioma: string
    ItemTraduzido?: ItemTraduzidoCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasUncheckedCreateWithoutDestinosInput = {
    idIdioma?: number
    nomeIdioma: string
    ItemTraduzido?: ItemTraduzidoUncheckedCreateNestedManyWithoutIdiomasInput
  }

  export type IdiomasCreateOrConnectWithoutDestinosInput = {
    where: IdiomasWhereUniqueInput
    create: XOR<IdiomasCreateWithoutDestinosInput, IdiomasUncheckedCreateWithoutDestinosInput>
  }

  export type EnvioCreateWithoutDestinosInput = {
    nomeEnvio: string
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
    Container?: ContainerCreateNestedManyWithoutEnvioInput
  }

  export type EnvioUncheckedCreateWithoutDestinosInput = {
    idEnvio?: number
    nomeEnvio: string
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
    Container?: ContainerUncheckedCreateNestedManyWithoutEnvioInput
  }

  export type EnvioCreateOrConnectWithoutDestinosInput = {
    where: EnvioWhereUniqueInput
    create: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput>
  }

  export type EnvioCreateManyDestinosInputEnvelope = {
    data: EnvioCreateManyDestinosInput | EnvioCreateManyDestinosInput[]
  }

  export type IdiomasUpsertWithoutDestinosInput = {
    update: XOR<IdiomasUpdateWithoutDestinosInput, IdiomasUncheckedUpdateWithoutDestinosInput>
    create: XOR<IdiomasCreateWithoutDestinosInput, IdiomasUncheckedCreateWithoutDestinosInput>
    where?: IdiomasWhereInput
  }

  export type IdiomasUpdateToOneWithWhereWithoutDestinosInput = {
    where?: IdiomasWhereInput
    data: XOR<IdiomasUpdateWithoutDestinosInput, IdiomasUncheckedUpdateWithoutDestinosInput>
  }

  export type IdiomasUpdateWithoutDestinosInput = {
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    ItemTraduzido?: ItemTraduzidoUpdateManyWithoutIdiomasNestedInput
  }

  export type IdiomasUncheckedUpdateWithoutDestinosInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    nomeIdioma?: StringFieldUpdateOperationsInput | string
    ItemTraduzido?: ItemTraduzidoUncheckedUpdateManyWithoutIdiomasNestedInput
  }

  export type EnvioUpsertWithWhereUniqueWithoutDestinosInput = {
    where: EnvioWhereUniqueInput
    update: XOR<EnvioUpdateWithoutDestinosInput, EnvioUncheckedUpdateWithoutDestinosInput>
    create: XOR<EnvioCreateWithoutDestinosInput, EnvioUncheckedCreateWithoutDestinosInput>
  }

  export type EnvioUpdateWithWhereUniqueWithoutDestinosInput = {
    where: EnvioWhereUniqueInput
    data: XOR<EnvioUpdateWithoutDestinosInput, EnvioUncheckedUpdateWithoutDestinosInput>
  }

  export type EnvioUpdateManyWithWhereWithoutDestinosInput = {
    where: EnvioScalarWhereInput
    data: XOR<EnvioUpdateManyMutationInput, EnvioUncheckedUpdateManyWithoutDestinosInput>
  }

  export type EnvioScalarWhereInput = {
    AND?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
    OR?: EnvioScalarWhereInput[]
    NOT?: EnvioScalarWhereInput | EnvioScalarWhereInput[]
    idEnvio?: IntFilter<"Envio"> | number
    nomeEnvio?: StringFilter<"Envio"> | string
    idDestino?: IntFilter<"Envio"> | number
    fechado?: BoolFilter<"Envio"> | boolean
    createdAt?: DateTimeFilter<"Envio"> | Date | string
    endDate?: DateTimeNullableFilter<"Envio"> | Date | string | null
    obs?: StringNullableFilter<"Envio"> | string | null
    nomeUser?: StringFilter<"Envio"> | string
  }

  export type ContainerCreateWithoutContainerOpInput = {
    ordem: number
    nContainer: number
    altura?: number
    Container?: ContainerCreateNestedOneWithoutOther_ContainerInput
    other_Container?: ContainerCreateNestedManyWithoutContainerInput
    Envio: EnvioCreateNestedOneWithoutContainerInput
    TipoContainer: TipoContainerCreateNestedOneWithoutContainerInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerInput
  }

  export type ContainerUncheckedCreateWithoutContainerOpInput = {
    idContainer?: number
    idContainerPai?: number | null
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
    other_Container?: ContainerUncheckedCreateNestedManyWithoutContainerInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerInput
  }

  export type ContainerCreateOrConnectWithoutContainerOpInput = {
    where: ContainerWhereUniqueInput
    create: XOR<ContainerCreateWithoutContainerOpInput, ContainerUncheckedCreateWithoutContainerOpInput>
  }

  export type OpCreateWithoutContainerOpInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    OpTamanho?: OpTamanhoCreateNestedManyWithoutOpInput
  }

  export type OpUncheckedCreateWithoutContainerOpInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    OpTamanho?: OpTamanhoUncheckedCreateNestedManyWithoutOpInput
  }

  export type OpCreateOrConnectWithoutContainerOpInput = {
    where: OpWhereUniqueInput
    create: XOR<OpCreateWithoutContainerOpInput, OpUncheckedCreateWithoutContainerOpInput>
  }

  export type ContainerOpTamCreateWithoutContainerOpInput = {
    OpTamanho: OpTamanhoCreateNestedOneWithoutContainerOpTamInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamUncheckedCreateWithoutContainerOpInput = {
    tam: string
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamCreateOrConnectWithoutContainerOpInput = {
    where: ContainerOpTamWhereUniqueInput
    create: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput>
  }

  export type ContainerOpTamCreateManyContainerOpInputEnvelope = {
    data: ContainerOpTamCreateManyContainerOpInput | ContainerOpTamCreateManyContainerOpInput[]
  }

  export type ConteudoCreateWithoutContainerOpInput = {
    idConteudo?: number
    qtt: number
    peso: number
    Container: ContainerCreateNestedOneWithoutConteudoInput
    ContainerOpTam: ContainerOpTamCreateNestedOneWithoutConteudoInput
    Item: ItemCreateNestedOneWithoutConteudoInput
  }

  export type ConteudoUncheckedCreateWithoutContainerOpInput = {
    idConteudo?: number
    idItem: number
    tam: string
    qtt: number
    peso: number
  }

  export type ConteudoCreateOrConnectWithoutContainerOpInput = {
    where: ConteudoWhereUniqueInput
    create: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput>
  }

  export type ConteudoCreateManyContainerOpInputEnvelope = {
    data: ConteudoCreateManyContainerOpInput | ConteudoCreateManyContainerOpInput[]
  }

  export type ContainerUpsertWithoutContainerOpInput = {
    update: XOR<ContainerUpdateWithoutContainerOpInput, ContainerUncheckedUpdateWithoutContainerOpInput>
    create: XOR<ContainerCreateWithoutContainerOpInput, ContainerUncheckedCreateWithoutContainerOpInput>
    where?: ContainerWhereInput
  }

  export type ContainerUpdateToOneWithWhereWithoutContainerOpInput = {
    where?: ContainerWhereInput
    data: XOR<ContainerUpdateWithoutContainerOpInput, ContainerUncheckedUpdateWithoutContainerOpInput>
  }

  export type ContainerUpdateWithoutContainerOpInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutContainerOpInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type OpUpsertWithoutContainerOpInput = {
    update: XOR<OpUpdateWithoutContainerOpInput, OpUncheckedUpdateWithoutContainerOpInput>
    create: XOR<OpCreateWithoutContainerOpInput, OpUncheckedCreateWithoutContainerOpInput>
    where?: OpWhereInput
  }

  export type OpUpdateToOneWithWhereWithoutContainerOpInput = {
    where?: OpWhereInput
    data: XOR<OpUpdateWithoutContainerOpInput, OpUncheckedUpdateWithoutContainerOpInput>
  }

  export type OpUpdateWithoutContainerOpInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    OpTamanho?: OpTamanhoUpdateManyWithoutOpNestedInput
  }

  export type OpUncheckedUpdateWithoutContainerOpInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    OpTamanho?: OpTamanhoUncheckedUpdateManyWithoutOpNestedInput
  }

  export type ContainerOpTamUpsertWithWhereUniqueWithoutContainerOpInput = {
    where: ContainerOpTamWhereUniqueInput
    update: XOR<ContainerOpTamUpdateWithoutContainerOpInput, ContainerOpTamUncheckedUpdateWithoutContainerOpInput>
    create: XOR<ContainerOpTamCreateWithoutContainerOpInput, ContainerOpTamUncheckedCreateWithoutContainerOpInput>
  }

  export type ContainerOpTamUpdateWithWhereUniqueWithoutContainerOpInput = {
    where: ContainerOpTamWhereUniqueInput
    data: XOR<ContainerOpTamUpdateWithoutContainerOpInput, ContainerOpTamUncheckedUpdateWithoutContainerOpInput>
  }

  export type ContainerOpTamUpdateManyWithWhereWithoutContainerOpInput = {
    where: ContainerOpTamScalarWhereInput
    data: XOR<ContainerOpTamUpdateManyMutationInput, ContainerOpTamUncheckedUpdateManyWithoutContainerOpInput>
  }

  export type ContainerOpTamScalarWhereInput = {
    AND?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
    OR?: ContainerOpTamScalarWhereInput[]
    NOT?: ContainerOpTamScalarWhereInput | ContainerOpTamScalarWhereInput[]
    idContainer?: IntFilter<"ContainerOpTam"> | number
    op?: IntFilter<"ContainerOpTam"> | number
    tam?: StringFilter<"ContainerOpTam"> | string
  }

  export type ConteudoUpsertWithWhereUniqueWithoutContainerOpInput = {
    where: ConteudoWhereUniqueInput
    update: XOR<ConteudoUpdateWithoutContainerOpInput, ConteudoUncheckedUpdateWithoutContainerOpInput>
    create: XOR<ConteudoCreateWithoutContainerOpInput, ConteudoUncheckedCreateWithoutContainerOpInput>
  }

  export type ConteudoUpdateWithWhereUniqueWithoutContainerOpInput = {
    where: ConteudoWhereUniqueInput
    data: XOR<ConteudoUpdateWithoutContainerOpInput, ConteudoUncheckedUpdateWithoutContainerOpInput>
  }

  export type ConteudoUpdateManyWithWhereWithoutContainerOpInput = {
    where: ConteudoScalarWhereInput
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyWithoutContainerOpInput>
  }

  export type ContainerOpCreateWithoutContainerOpTamInput = {
    Container: ContainerCreateNestedOneWithoutContainerOpInput
    Op: OpCreateNestedOneWithoutContainerOpInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUncheckedCreateWithoutContainerOpTamInput = {
    idContainer: number
    op: number
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpCreateOrConnectWithoutContainerOpTamInput = {
    where: ContainerOpWhereUniqueInput
    create: XOR<ContainerOpCreateWithoutContainerOpTamInput, ContainerOpUncheckedCreateWithoutContainerOpTamInput>
  }

  export type OpTamanhoCreateWithoutContainerOpTamInput = {
    tam: string
    ordem: number
    qtt: number
    Op: OpCreateNestedOneWithoutOpTamanhoInput
  }

  export type OpTamanhoUncheckedCreateWithoutContainerOpTamInput = {
    op: number
    tam: string
    ordem: number
    qtt: number
  }

  export type OpTamanhoCreateOrConnectWithoutContainerOpTamInput = {
    where: OpTamanhoWhereUniqueInput
    create: XOR<OpTamanhoCreateWithoutContainerOpTamInput, OpTamanhoUncheckedCreateWithoutContainerOpTamInput>
  }

  export type ConteudoCreateWithoutContainerOpTamInput = {
    idConteudo?: number
    qtt: number
    peso: number
    Container: ContainerCreateNestedOneWithoutConteudoInput
    ContainerOp: ContainerOpCreateNestedOneWithoutConteudoInput
    Item: ItemCreateNestedOneWithoutConteudoInput
  }

  export type ConteudoUncheckedCreateWithoutContainerOpTamInput = {
    idConteudo?: number
    idItem: number
    qtt: number
    peso: number
  }

  export type ConteudoCreateOrConnectWithoutContainerOpTamInput = {
    where: ConteudoWhereUniqueInput
    create: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput>
  }

  export type ConteudoCreateManyContainerOpTamInputEnvelope = {
    data: ConteudoCreateManyContainerOpTamInput | ConteudoCreateManyContainerOpTamInput[]
  }

  export type ContainerOpUpsertWithoutContainerOpTamInput = {
    update: XOR<ContainerOpUpdateWithoutContainerOpTamInput, ContainerOpUncheckedUpdateWithoutContainerOpTamInput>
    create: XOR<ContainerOpCreateWithoutContainerOpTamInput, ContainerOpUncheckedCreateWithoutContainerOpTamInput>
    where?: ContainerOpWhereInput
  }

  export type ContainerOpUpdateToOneWithWhereWithoutContainerOpTamInput = {
    where?: ContainerOpWhereInput
    data: XOR<ContainerOpUpdateWithoutContainerOpTamInput, ContainerOpUncheckedUpdateWithoutContainerOpTamInput>
  }

  export type ContainerOpUpdateWithoutContainerOpTamInput = {
    Container?: ContainerUpdateOneRequiredWithoutContainerOpNestedInput
    Op?: OpUpdateOneRequiredWithoutContainerOpNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateWithoutContainerOpTamInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpNestedInput
  }

  export type OpTamanhoUpsertWithoutContainerOpTamInput = {
    update: XOR<OpTamanhoUpdateWithoutContainerOpTamInput, OpTamanhoUncheckedUpdateWithoutContainerOpTamInput>
    create: XOR<OpTamanhoCreateWithoutContainerOpTamInput, OpTamanhoUncheckedCreateWithoutContainerOpTamInput>
    where?: OpTamanhoWhereInput
  }

  export type OpTamanhoUpdateToOneWithWhereWithoutContainerOpTamInput = {
    where?: OpTamanhoWhereInput
    data: XOR<OpTamanhoUpdateWithoutContainerOpTamInput, OpTamanhoUncheckedUpdateWithoutContainerOpTamInput>
  }

  export type OpTamanhoUpdateWithoutContainerOpTamInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
    Op?: OpUpdateOneRequiredWithoutOpTamanhoNestedInput
  }

  export type OpTamanhoUncheckedUpdateWithoutContainerOpTamInput = {
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
  }

  export type ConteudoUpsertWithWhereUniqueWithoutContainerOpTamInput = {
    where: ConteudoWhereUniqueInput
    update: XOR<ConteudoUpdateWithoutContainerOpTamInput, ConteudoUncheckedUpdateWithoutContainerOpTamInput>
    create: XOR<ConteudoCreateWithoutContainerOpTamInput, ConteudoUncheckedCreateWithoutContainerOpTamInput>
  }

  export type ConteudoUpdateWithWhereUniqueWithoutContainerOpTamInput = {
    where: ConteudoWhereUniqueInput
    data: XOR<ConteudoUpdateWithoutContainerOpTamInput, ConteudoUncheckedUpdateWithoutContainerOpTamInput>
  }

  export type ConteudoUpdateManyWithWhereWithoutContainerOpTamInput = {
    where: ConteudoScalarWhereInput
    data: XOR<ConteudoUpdateManyMutationInput, ConteudoUncheckedUpdateManyWithoutContainerOpTamInput>
  }

  export type ContainerOpCreateWithoutOpInput = {
    Container: ContainerCreateNestedOneWithoutContainerOpInput
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpUncheckedCreateWithoutOpInput = {
    idContainer: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutContainerOpInput
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpInput
  }

  export type ContainerOpCreateOrConnectWithoutOpInput = {
    where: ContainerOpWhereUniqueInput
    create: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput>
  }

  export type ContainerOpCreateManyOpInputEnvelope = {
    data: ContainerOpCreateManyOpInput | ContainerOpCreateManyOpInput[]
  }

  export type OpTamanhoCreateWithoutOpInput = {
    tam: string
    ordem: number
    qtt: number
    ContainerOpTam?: ContainerOpTamCreateNestedManyWithoutOpTamanhoInput
  }

  export type OpTamanhoUncheckedCreateWithoutOpInput = {
    tam: string
    ordem: number
    qtt: number
    ContainerOpTam?: ContainerOpTamUncheckedCreateNestedManyWithoutOpTamanhoInput
  }

  export type OpTamanhoCreateOrConnectWithoutOpInput = {
    where: OpTamanhoWhereUniqueInput
    create: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput>
  }

  export type OpTamanhoCreateManyOpInputEnvelope = {
    data: OpTamanhoCreateManyOpInput | OpTamanhoCreateManyOpInput[]
  }

  export type ContainerOpUpsertWithWhereUniqueWithoutOpInput = {
    where: ContainerOpWhereUniqueInput
    update: XOR<ContainerOpUpdateWithoutOpInput, ContainerOpUncheckedUpdateWithoutOpInput>
    create: XOR<ContainerOpCreateWithoutOpInput, ContainerOpUncheckedCreateWithoutOpInput>
  }

  export type ContainerOpUpdateWithWhereUniqueWithoutOpInput = {
    where: ContainerOpWhereUniqueInput
    data: XOR<ContainerOpUpdateWithoutOpInput, ContainerOpUncheckedUpdateWithoutOpInput>
  }

  export type ContainerOpUpdateManyWithWhereWithoutOpInput = {
    where: ContainerOpScalarWhereInput
    data: XOR<ContainerOpUpdateManyMutationInput, ContainerOpUncheckedUpdateManyWithoutOpInput>
  }

  export type OpTamanhoUpsertWithWhereUniqueWithoutOpInput = {
    where: OpTamanhoWhereUniqueInput
    update: XOR<OpTamanhoUpdateWithoutOpInput, OpTamanhoUncheckedUpdateWithoutOpInput>
    create: XOR<OpTamanhoCreateWithoutOpInput, OpTamanhoUncheckedCreateWithoutOpInput>
  }

  export type OpTamanhoUpdateWithWhereUniqueWithoutOpInput = {
    where: OpTamanhoWhereUniqueInput
    data: XOR<OpTamanhoUpdateWithoutOpInput, OpTamanhoUncheckedUpdateWithoutOpInput>
  }

  export type OpTamanhoUpdateManyWithWhereWithoutOpInput = {
    where: OpTamanhoScalarWhereInput
    data: XOR<OpTamanhoUpdateManyMutationInput, OpTamanhoUncheckedUpdateManyWithoutOpInput>
  }

  export type OpTamanhoScalarWhereInput = {
    AND?: OpTamanhoScalarWhereInput | OpTamanhoScalarWhereInput[]
    OR?: OpTamanhoScalarWhereInput[]
    NOT?: OpTamanhoScalarWhereInput | OpTamanhoScalarWhereInput[]
    op?: IntFilter<"OpTamanho"> | number
    tam?: StringFilter<"OpTamanho"> | string
    ordem?: IntFilter<"OpTamanho"> | number
    qtt?: IntFilter<"OpTamanho"> | number
  }

  export type ContainerOpTamCreateWithoutOpTamanhoInput = {
    ContainerOp: ContainerOpCreateNestedOneWithoutContainerOpTamInput
    Conteudo?: ConteudoCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamUncheckedCreateWithoutOpTamanhoInput = {
    idContainer: number
    Conteudo?: ConteudoUncheckedCreateNestedManyWithoutContainerOpTamInput
  }

  export type ContainerOpTamCreateOrConnectWithoutOpTamanhoInput = {
    where: ContainerOpTamWhereUniqueInput
    create: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput>
  }

  export type ContainerOpTamCreateManyOpTamanhoInputEnvelope = {
    data: ContainerOpTamCreateManyOpTamanhoInput | ContainerOpTamCreateManyOpTamanhoInput[]
  }

  export type OpCreateWithoutOpTamanhoInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    ContainerOp?: ContainerOpCreateNestedManyWithoutOpInput
  }

  export type OpUncheckedCreateWithoutOpTamanhoInput = {
    op: number
    ref: string
    modeloDesc: string
    modelo: string
    cor: string
    pedido: string
    norma: string
    ContainerOp?: ContainerOpUncheckedCreateNestedManyWithoutOpInput
  }

  export type OpCreateOrConnectWithoutOpTamanhoInput = {
    where: OpWhereUniqueInput
    create: XOR<OpCreateWithoutOpTamanhoInput, OpUncheckedCreateWithoutOpTamanhoInput>
  }

  export type ContainerOpTamUpsertWithWhereUniqueWithoutOpTamanhoInput = {
    where: ContainerOpTamWhereUniqueInput
    update: XOR<ContainerOpTamUpdateWithoutOpTamanhoInput, ContainerOpTamUncheckedUpdateWithoutOpTamanhoInput>
    create: XOR<ContainerOpTamCreateWithoutOpTamanhoInput, ContainerOpTamUncheckedCreateWithoutOpTamanhoInput>
  }

  export type ContainerOpTamUpdateWithWhereUniqueWithoutOpTamanhoInput = {
    where: ContainerOpTamWhereUniqueInput
    data: XOR<ContainerOpTamUpdateWithoutOpTamanhoInput, ContainerOpTamUncheckedUpdateWithoutOpTamanhoInput>
  }

  export type ContainerOpTamUpdateManyWithWhereWithoutOpTamanhoInput = {
    where: ContainerOpTamScalarWhereInput
    data: XOR<ContainerOpTamUpdateManyMutationInput, ContainerOpTamUncheckedUpdateManyWithoutOpTamanhoInput>
  }

  export type OpUpsertWithoutOpTamanhoInput = {
    update: XOR<OpUpdateWithoutOpTamanhoInput, OpUncheckedUpdateWithoutOpTamanhoInput>
    create: XOR<OpCreateWithoutOpTamanhoInput, OpUncheckedCreateWithoutOpTamanhoInput>
    where?: OpWhereInput
  }

  export type OpUpdateToOneWithWhereWithoutOpTamanhoInput = {
    where?: OpWhereInput
    data: XOR<OpUpdateWithoutOpTamanhoInput, OpUncheckedUpdateWithoutOpTamanhoInput>
  }

  export type OpUpdateWithoutOpTamanhoInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    ContainerOp?: ContainerOpUpdateManyWithoutOpNestedInput
  }

  export type OpUncheckedUpdateWithoutOpTamanhoInput = {
    op?: IntFieldUpdateOperationsInput | number
    ref?: StringFieldUpdateOperationsInput | string
    modeloDesc?: StringFieldUpdateOperationsInput | string
    modelo?: StringFieldUpdateOperationsInput | string
    cor?: StringFieldUpdateOperationsInput | string
    pedido?: StringFieldUpdateOperationsInput | string
    norma?: StringFieldUpdateOperationsInput | string
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutOpNestedInput
  }

  export type UserPapeisCreateManyPapeisInput = {
    nomeUser: string
  }

  export type UserPapeisUpdateWithoutPapeisInput = {
    User?: UserUpdateOneRequiredWithoutUserPapeisNestedInput
  }

  export type UserPapeisUncheckedUpdateWithoutPapeisInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type UserPapeisUncheckedUpdateManyWithoutPapeisInput = {
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type UserPapeisCreateManyUserInput = {
    idPapel: string
  }

  export type UserPapeisUpdateWithoutUserInput = {
    Papeis?: PapeisUpdateOneRequiredWithoutUserPapeisNestedInput
  }

  export type UserPapeisUncheckedUpdateWithoutUserInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
  }

  export type UserPapeisUncheckedUpdateManyWithoutUserInput = {
    idPapel?: StringFieldUpdateOperationsInput | string
  }

  export type ContainerCreateManyContainerInput = {
    idEnvio: number
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
  }

  export type ContainerOpCreateManyContainerInput = {
    op: number
  }

  export type ConteudoCreateManyContainerInput = {
    idItem: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ContainerUpdateWithoutContainerInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutContainerInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateManyWithoutContainerInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idEnvio?: IntFieldUpdateOperationsInput | number
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type ContainerOpUpdateWithoutContainerInput = {
    Op?: OpUpdateOneRequiredWithoutContainerOpNestedInput
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateWithoutContainerInput = {
    op?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateManyWithoutContainerInput = {
    op?: IntFieldUpdateOperationsInput | number
  }

  export type ConteudoUpdateWithoutContainerInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOpTam?: ContainerOpTamUpdateOneRequiredWithoutConteudoNestedInput
    Item?: ItemUpdateOneRequiredWithoutConteudoNestedInput
  }

  export type ConteudoUncheckedUpdateWithoutContainerInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ContainerCreateManyEnvioInput = {
    idContainerPai?: number | null
    idTipoContainer: number
    ordem: number
    nContainer: number
    altura?: number
  }

  export type ContainerUpdateWithoutEnvioInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    TipoContainer?: TipoContainerUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutEnvioInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateManyWithoutEnvioInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idTipoContainer?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type DestinosCreateManyIdiomasInput = {
    nomeDestino: string
  }

  export type ItemTraduzidoCreateManyIdiomasInput = {
    idItem: number
    descItem: string
  }

  export type DestinosUpdateWithoutIdiomasInput = {
    nomeDestino?: StringFieldUpdateOperationsInput | string
    Envio?: EnvioUpdateManyWithoutDestinosNestedInput
  }

  export type DestinosUncheckedUpdateWithoutIdiomasInput = {
    idDestino?: IntFieldUpdateOperationsInput | number
    nomeDestino?: StringFieldUpdateOperationsInput | string
    Envio?: EnvioUncheckedUpdateManyWithoutDestinosNestedInput
  }

  export type DestinosUncheckedUpdateManyWithoutIdiomasInput = {
    idDestino?: IntFieldUpdateOperationsInput | number
    nomeDestino?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoUpdateWithoutIdiomasInput = {
    descItem?: StringFieldUpdateOperationsInput | string
    Item?: ItemUpdateOneRequiredWithoutItemTraduzidoNestedInput
  }

  export type ItemTraduzidoUncheckedUpdateWithoutIdiomasInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoUncheckedUpdateManyWithoutIdiomasInput = {
    idItem?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ConteudoCreateManyItemInput = {
    idContainer: number
    op: number
    tam: string
    qtt: number
    peso: number
  }

  export type ItemTraduzidoCreateManyItemInput = {
    idIdioma: number
    descItem: string
  }

  export type ConteudoUpdateWithoutItemInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOpTam?: ContainerOpTamUpdateOneRequiredWithoutConteudoNestedInput
  }

  export type ConteudoUncheckedUpdateWithoutItemInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoUncheckedUpdateManyWithoutItemInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idContainer?: IntFieldUpdateOperationsInput | number
    op?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ItemTraduzidoUpdateWithoutItemInput = {
    descItem?: StringFieldUpdateOperationsInput | string
    Idiomas?: IdiomasUpdateOneRequiredWithoutItemTraduzidoNestedInput
  }

  export type ItemTraduzidoUncheckedUpdateWithoutItemInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ItemTraduzidoUncheckedUpdateManyWithoutItemInput = {
    idIdioma?: IntFieldUpdateOperationsInput | number
    descItem?: StringFieldUpdateOperationsInput | string
  }

  export type ContainerCreateManyTipoContainerInput = {
    idContainerPai?: number | null
    idEnvio: number
    ordem: number
    nContainer: number
    altura?: number
  }

  export type ContainerUpdateWithoutTipoContainerInput = {
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneWithoutOther_ContainerNestedInput
    other_Container?: ContainerUpdateManyWithoutContainerNestedInput
    Envio?: EnvioUpdateOneRequiredWithoutContainerNestedInput
    ContainerOp?: ContainerOpUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateWithoutTipoContainerInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
    other_Container?: ContainerUncheckedUpdateManyWithoutContainerNestedInput
    ContainerOp?: ContainerOpUncheckedUpdateManyWithoutContainerNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerNestedInput
  }

  export type ContainerUncheckedUpdateManyWithoutTipoContainerInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    idContainerPai?: NullableIntFieldUpdateOperationsInput | number | null
    idEnvio?: IntFieldUpdateOperationsInput | number
    ordem?: IntFieldUpdateOperationsInput | number
    nContainer?: IntFieldUpdateOperationsInput | number
    altura?: FloatFieldUpdateOperationsInput | number
  }

  export type EnvioCreateManyDestinosInput = {
    nomeEnvio: string
    fechado?: boolean
    createdAt?: Date | string
    endDate?: Date | string | null
    obs?: string | null
    nomeUser: string
  }

  export type EnvioUpdateWithoutDestinosInput = {
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
    Container?: ContainerUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateWithoutDestinosInput = {
    idEnvio?: IntFieldUpdateOperationsInput | number
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
    Container?: ContainerUncheckedUpdateManyWithoutEnvioNestedInput
  }

  export type EnvioUncheckedUpdateManyWithoutDestinosInput = {
    idEnvio?: IntFieldUpdateOperationsInput | number
    nomeEnvio?: StringFieldUpdateOperationsInput | string
    fechado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    nomeUser?: StringFieldUpdateOperationsInput | string
  }

  export type ContainerOpTamCreateManyContainerOpInput = {
    tam: string
  }

  export type ConteudoCreateManyContainerOpInput = {
    idItem: number
    tam: string
    qtt: number
    peso: number
  }

  export type ContainerOpTamUpdateWithoutContainerOpInput = {
    OpTamanho?: OpTamanhoUpdateOneRequiredWithoutContainerOpTamNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateWithoutContainerOpInput = {
    tam?: StringFieldUpdateOperationsInput | string
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateManyWithoutContainerOpInput = {
    tam?: StringFieldUpdateOperationsInput | string
  }

  export type ConteudoUpdateWithoutContainerOpInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOpTam?: ContainerOpTamUpdateOneRequiredWithoutConteudoNestedInput
    Item?: ItemUpdateOneRequiredWithoutConteudoNestedInput
  }

  export type ConteudoUncheckedUpdateWithoutContainerOpInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerOpInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    tam?: StringFieldUpdateOperationsInput | string
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoCreateManyContainerOpTamInput = {
    idItem: number
    qtt: number
    peso: number
  }

  export type ConteudoUpdateWithoutContainerOpTamInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
    Container?: ContainerUpdateOneRequiredWithoutConteudoNestedInput
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutConteudoNestedInput
    Item?: ItemUpdateOneRequiredWithoutConteudoNestedInput
  }

  export type ConteudoUncheckedUpdateWithoutContainerOpTamInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ConteudoUncheckedUpdateManyWithoutContainerOpTamInput = {
    idConteudo?: IntFieldUpdateOperationsInput | number
    idItem?: IntFieldUpdateOperationsInput | number
    qtt?: FloatFieldUpdateOperationsInput | number
    peso?: FloatFieldUpdateOperationsInput | number
  }

  export type ContainerOpCreateManyOpInput = {
    idContainer: number
  }

  export type OpTamanhoCreateManyOpInput = {
    tam: string
    ordem: number
    qtt: number
  }

  export type ContainerOpUpdateWithoutOpInput = {
    Container?: ContainerUpdateOneRequiredWithoutContainerOpNestedInput
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateWithoutOpInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutContainerOpNestedInput
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpNestedInput
  }

  export type ContainerOpUncheckedUpdateManyWithoutOpInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
  }

  export type OpTamanhoUpdateWithoutOpInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUpdateManyWithoutOpTamanhoNestedInput
  }

  export type OpTamanhoUncheckedUpdateWithoutOpInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
    ContainerOpTam?: ContainerOpTamUncheckedUpdateManyWithoutOpTamanhoNestedInput
  }

  export type OpTamanhoUncheckedUpdateManyWithoutOpInput = {
    tam?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    qtt?: IntFieldUpdateOperationsInput | number
  }

  export type ContainerOpTamCreateManyOpTamanhoInput = {
    idContainer: number
  }

  export type ContainerOpTamUpdateWithoutOpTamanhoInput = {
    ContainerOp?: ContainerOpUpdateOneRequiredWithoutContainerOpTamNestedInput
    Conteudo?: ConteudoUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateWithoutOpTamanhoInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
    Conteudo?: ConteudoUncheckedUpdateManyWithoutContainerOpTamNestedInput
  }

  export type ContainerOpTamUncheckedUpdateManyWithoutOpTamanhoInput = {
    idContainer?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}