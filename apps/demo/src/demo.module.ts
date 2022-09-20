import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from '#local/items';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'demo',
      password: 'demo',
      database: 'demo',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ItemsModule,
  ],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
