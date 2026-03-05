import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  private static instance: PrismaService;

  constructor() {
    //for sql tests
    // const connectionString = process.env['DATABASE_URL'] ?? 'file:./dev.db';
    // const adapter = new PrismaBetterSqlite3({ url: connectionString });
    super({
      // adapter,
      transactionOptions: {
        timeout: 30000,
        maxWait: 15000,
      },
    });

    if (!PrismaService.instance) {
      PrismaService.instance = this;
    }
    return PrismaService.instance;
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}