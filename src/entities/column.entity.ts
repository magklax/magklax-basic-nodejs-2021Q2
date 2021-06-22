import { v4 as uuidv4 } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { IBoardColumn } from '../types/column.interface';

@Entity()
class BoardColumn extends BaseEntity  {
  @PrimaryGeneratedColumn('uuid')
  id = uuidv4();

  @Column('varchar')
  title!: string;

  @Column('varchar')
  order!: number | 0;

  static toResponse(column: BoardColumn): IBoardColumn {
    return column;
  }
}

export default BoardColumn;
