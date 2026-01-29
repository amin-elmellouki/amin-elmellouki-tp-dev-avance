import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PlayerEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'integer' })
  elo: number;
}
