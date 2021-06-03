import errorHandler from '../../common/utils';
import Board from './board.model';
import {
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  deleteBoard,
  deleteTasks,
} from '../../common/inMemoryDB';

const getAll = async () => getAllBoards();

const getById = async (id: string) => {
  const board = await getBoard(id);

  errorHandler(board, id, 'board');

  return board;
};


const create = async (board: Board) => createBoard(board);

const updateById = async (id: string, updatedBoard: Board) => {
  const board = await updateBoard(id, updatedBoard);

  errorHandler(board, id, 'board');

  return board;
};


const deleteById = async (id: string) => {
  const board = await deleteBoard(id);
  deleteTasks(id);

  errorHandler(board, id, 'board');

  return board;
};

export { getAll, getById, create, updateById, deleteById };
