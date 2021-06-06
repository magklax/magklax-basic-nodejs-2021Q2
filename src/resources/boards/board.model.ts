import { v4 as uuid } from 'uuid';

class Board {
  id: string;

  title: string;

  columns: Array<{
    id: string;
    title: string;
    order: number;
  }>;

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

  static toResponse(board: Board): Board {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

export default Board;
