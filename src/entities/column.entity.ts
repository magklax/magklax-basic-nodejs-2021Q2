import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IColumn } from '../types/column.interface';

@Entity({ name: 'columns' })
export class BoardColumn {
  @PrimaryGeneratedColumn('uuid')
  id = uuidv4();

  @Column('varchar')
  title!: string;

  @Column('varchar')
  order!: number | 0;

  static toResponse(column: IColumn) {
    return column;
  }
}
