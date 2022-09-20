import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';
import { DB } from '#local/persistence';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity], DB.NUMBER_TWO)],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
