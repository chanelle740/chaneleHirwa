import { Column, Entity} from 'typeorm';

@Entity()
export class Token {
  id: number;

  @Column()
  meterNumber: string;

  @Column()
  token: string;

  @Column()
  ammount: number;

  @Column()
  active: boolean;

  @Column()
  createdAt: Date;
}