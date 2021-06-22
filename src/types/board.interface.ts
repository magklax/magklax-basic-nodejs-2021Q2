import { IBoardColumn } from './column.interface';

export interface IBoard {
  id: string;
  title: string;
  columns: IBoardColumn[];
}
