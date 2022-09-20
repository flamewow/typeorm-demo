import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { ItemsModule } from '#local/items';
import { PersistenceModule } from '#local/persistence';
import { DB } from '#local/persistence';

@Module({
  imports: [
    PersistenceModule.forRoot(DB.NUMBER_TWO),
    PersistenceModule.forRoot(DB.NUMBER_ONE),
    ItemsModule,
  ],
  controllers: [DemoController],
  providers: [DemoService],
})
export class DemoModule {}
