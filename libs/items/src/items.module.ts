import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';
import { DB } from '#local/persistence';
import { LabelEntity } from '#local/items/entities/label.entity';
import { TypeEntity } from '#local/items/entities/type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [ItemEntity, LabelEntity, TypeEntity],
      DB.NUMBER_TWO,
    ),
  ],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
