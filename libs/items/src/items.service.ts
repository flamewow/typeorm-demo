import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';
import { Repository } from 'typeorm';
import { DB } from '#local/persistence';
import { LabelEntity } from '#local/items/entities/label.entity';
import { TypeEntity } from '#local/items/entities/type.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity, DB.NUMBER_TWO)
    private readonly itemEntityRepository: Repository<ItemEntity>,
    @InjectRepository(LabelEntity, DB.NUMBER_TWO)
    private readonly labelEntityRepository: Repository<LabelEntity>,
    @InjectRepository(TypeEntity, DB.NUMBER_TWO)
    private readonly typeEntityRepository: Repository<TypeEntity>,
  ) {}

  async onModuleInit() {
    // CREATION PART
    const createdItem = await this.itemEntityRepository.save(
      this.itemEntityRepository.create({
        name: 'test',
        price: 1234,
      }),
    );

    const createdType = await this.typeEntityRepository.save(
      this.typeEntityRepository.create({
        name: 'test',
      }),
    );

    await this.labelEntityRepository.save(
      this.labelEntityRepository.create({
        itemId: createdItem.id,
        typeId: createdType.id,
        name: 'test',
      }),
    );

    // UPDATE PART
    const item = await this.itemEntityRepository.findOneBy({
      id: createdItem.id,
    });
    item.name = '12345';
    item.labels = [Object.assign(item.labels[0], { name: '1234567' })];
    await this.itemEntityRepository.save(item);
  }

  async createItem(data: Partial<ItemEntity>): Promise<ItemEntity> {
    const createdItem = this.itemEntityRepository.create(data);
    return this.itemEntityRepository.save(createdItem);
  }

  async getItem(id: number): Promise<ItemEntity> {
    return this.itemEntityRepository.findOne({ where: { id } });
  }
}
