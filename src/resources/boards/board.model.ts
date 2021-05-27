import { v4 as uuid } from 'uuid';

interface IBoard {
  id: string;
  title: string;
  columns: Array<{
    id: string;
    title: string;
    order: number;
  }>
}

/** Class representing a user board. */
class Board {
  /**
 * Create board
 * @property {string} id - board id
 * @property {string} title - board title
 * @property {Array<{id: string, title: string, order: number}>} columns - array of board columns
 */

  id: string;
  title: string;
  columns: Array<{
    id: string;
    title: string;
    order: number;
  }>

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

  /**
 * Return board object
 * @param {Board} board - created board object
 * @return {Object<Board.id, Board.title, Board.order>} board object 
 */

  static toResponse(board: Board): IBoard {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
