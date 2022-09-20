import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const persistenceConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'demo',
  password: 'demo',
  database: 'demo',
  synchronize: true,
  autoLoadEntities: true,
};
