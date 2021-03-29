import { Table, Column, Model, PrimaryKey, AllowNull, DataType } from 'sequelize-typescript';

@Table
export class Guild extends Model<Guild> {
  @AllowNull(false)
  @PrimaryKey
  @Column(DataType.TEXT)
  id_discord!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  joined_at!: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  updated_at!: string;
}
