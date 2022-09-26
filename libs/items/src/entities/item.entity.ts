import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LabelEntity } from '#local/items/entities/label.entity';

@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany(() => LabelEntity, (label) => label.item, {
    cascade: true,
    eager: true,
  })
  labels: LabelEntity[];
}
