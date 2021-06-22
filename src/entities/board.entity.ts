import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IBoardColumn } from '../types/column.interface';
import { IBoard } from '../types/board.interface';

@Entity()
class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @Column('varchar')
  title = '';

  @Column('jsonb')
  columns: IBoardColumn[] = [];

  static toResponse(board: Board): IBoard {
    return { ...board };
  }
}

export default Board;
