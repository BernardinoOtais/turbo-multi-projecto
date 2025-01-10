import { PrismaClient as EnviosPrismaClient } from './generated/envios';
import { PrismaClient as QualidadePrismaClient } from './generated/qualidade';

class PrismaSingleton {
  private static enviosPrismaClient: EnviosPrismaClient | null = null;
  private static qualidadePrismaInstance: QualidadePrismaClient | null = null;

  private constructor() {
    // Prevent instantiation
  }

  static getAuthPrisma(): EnviosPrismaClient {
    if (!PrismaSingleton.enviosPrismaClient) {
      PrismaSingleton.enviosPrismaClient = new EnviosPrismaClient();
    }
    return PrismaSingleton.enviosPrismaClient;
  }

  static getEnviosPrisma(): EnviosPrismaClient {
    if (!PrismaSingleton.enviosPrismaClient) {
      PrismaSingleton.enviosPrismaClient = new EnviosPrismaClient();
    }
    return PrismaSingleton.enviosPrismaClient;
  }

  static getQualidadePrisma(): QualidadePrismaClient {
    if (!PrismaSingleton.qualidadePrismaInstance) {
      PrismaSingleton.qualidadePrismaInstance = new QualidadePrismaClient();
    }
    return PrismaSingleton.qualidadePrismaInstance;
  }
}

export default PrismaSingleton;
