import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { ItemEntity } from '#local/items/entities/item.entity';
import { TypeEntity } from '#local/items/entities/type.entity';

@Entity()
export class LabelEntity {
  @PrimaryColumn()
  itemId: number;

  @PrimaryColumn()
  typeId: number;

  @ManyToOne(() => ItemEntity, (item) => item.id)
  item: ItemEntity;

  @ManyToOne(() => TypeEntity, (type) => type.id, {
    eager: true,
    cascade: true,
  })
  type: TypeEntity;

  @Column()
  name: string;
}
