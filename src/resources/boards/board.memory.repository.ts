import Board from './board.model';
import {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  deleteTasks,
} from '../../common/inMemoryDB';

export const getAll = async (): Promise<Array<Board>> => getAllBoards();

export const getById = async (id: string): Promise<Board> => getBoard(id);


export const create = async (board: Board): Promise<Board> => createBoard(board);

export const updateById = async (id: string, updatedBoard: Board): Promise<Board> => updateBoard(id, updatedBoard);

export const deleteById = async (id: string): Promise<Board> => {
  const board = await deleteBoard(id);
  deleteTasks(id);
  return board;
};
