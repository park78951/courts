import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('court', { schema: 'court-finder' })
export class Courts {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 50 })
  name: string;

  @Column('varchar', { name: 'address', length: 100 })
  address: string;

  @Column('varchar', { name: 'province', length: 20 })
  province: string | null;

  @Column('varchar', { name: 'city', length: 20 })
  city: string;

  @Column('varchar', { name: 'district_gu', length: 20 })
  district_gu: string;

  @Column('varchar', { name: 'district_dong', length: 20 })
  district_dong: string;

  @Column('geometry', { name: 'latitude' })
  latitude: string;

  @Column('geometry', { name: 'longitude' })
  longitude: string;

  @Column('datetime', { name: 'createdAt' })
  createdAt: Date;

  @Column('datetime', { name: 'updatedAt' })
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt' })
  deletedAt: Date | null;
}
