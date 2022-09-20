import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';
import { Repository } from 'typeorm';
import { DB } from '#local/persistence';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity, DB.NUMBER_TWO)
    private readonly itemEntityRepository: Repository<ItemEntity>,
  ) {}

  async onModuleInit() {
    await this.createItem({ name: 'test', price: 1234 });
  }

  async createItem(data: Partial<ItemEntity>): Promise<ItemEntity> {
    const createdItem = this.itemEntityRepository.create(data);
    return this.itemEntityRepository.save(createdItem);
  }

  async getItem(id: number): Promise<ItemEntity> {
    return this.itemEntityRepository.findOne({ where: { id } });
  }
}
