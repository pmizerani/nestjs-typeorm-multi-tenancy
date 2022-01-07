import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity({name: 'tenants'})
// @Unique(['host'])
export class Tenant {

  @PrimaryColumn()
  id: number;

  @Column()
  host: string;

  @Column()
  name: string;

}
