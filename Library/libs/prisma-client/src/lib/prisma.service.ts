import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super({
      log: [
        { emit: 'event', level: 'query' },
        { emit: 'stdout', level: 'info' },
        { emit: 'stdout', level: 'warn' },
        { emit: 'stdout', level: 'error' },
      ],
      transactionOptions: {
        timeout: 30000,
        maxWait: 15000,
      },
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    //   this.logger.log('Conectado a la base de datos satisfactoriamente.');
    } catch (error) {
      this.logger.error('Error connection to the database:', error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    // this.logger.log('Desconectado de la base de datos.');
  }
}
