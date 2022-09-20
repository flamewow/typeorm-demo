import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
