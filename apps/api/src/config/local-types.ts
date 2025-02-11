import type { Prisma, PrismaClient } from '@services/prisma/generated/envios';
import type { DefaultArgs } from '@services/prisma/generated/envios/runtime/library';

export type EnviosPrismaClient = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'
>;
