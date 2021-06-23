import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IColumn } from '../types/column.interface';
import { IBoard } from "../types/board.interface";

@Entity({ name: 'board' })
class Board implements IBoard {
  @PrimaryColumn('uuid')
  id!: string;

  @Column('varchar')
  title = 'title';

  @Column('json')
  columns: IColumn[] = [];
}

export default Board;
