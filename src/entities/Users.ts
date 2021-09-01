import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('email', ['email'], { unique: true })
@Entity('user', { schema: 'court-finder' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', unique: true, length: 30 })
  email: string;

  @Column('varchar', { name: 'nickname', length: 30 })
  nickname: string;

  @Column('varchar', { name: 'token', length: 30 })
  token: string;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt' })
  deletedAt: Date | null;
}
