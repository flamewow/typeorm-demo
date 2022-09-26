import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LabelEntity } from '#local/items/entities/label.entity';

@Entity()
export class TypeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => LabelEntity, (label) => label.type)
  label: LabelEntity;

  @Column()
  name: string;
}
