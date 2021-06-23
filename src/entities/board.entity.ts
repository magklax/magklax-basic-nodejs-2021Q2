import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { IBoard } from '../types/board.interface';

@Entity()
class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'json', nullable: true })
  columns: { id: string; title: string; order: number; }[];

  constructor({
    id = uuid(),
    title = 'title',
    columns = [
      {
        id: uuid(),
        title: 'title',
        order: 0,
      },
    ],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: Board): IBoard {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
