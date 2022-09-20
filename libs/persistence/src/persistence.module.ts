import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { persistenceConfig } from './persistence.config';

@Module({})
export class PersistenceModule {
  static forRoot(dbName?: string): DynamicModule {
    return {
      module: PersistenceModule,
      imports: [
        TypeOrmModule.forRoot({
          ...persistenceConfig,
          name: dbName,
        }),
      ],
    };
  }
}
