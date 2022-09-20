import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemsService],
  exports: [ItemsService],
})
export class ItemsModule {}
