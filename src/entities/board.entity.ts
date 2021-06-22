import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IColumn } from '../types/column.interface';
import { IBoard } from '../types/board.interface';

@Entity({ name: 'boards' })
class Board {
  @PrimaryGeneratedColumn('uuid')
  id = uuid();

  @Column('varchar')
  title = '';

  @Column('jsonb')
  columns: IColumn[] = [];

  static toResponse(board: Board): IBoard {
    return { ...board };
  }
}

export default Board;
