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

/**
 * Returns the array of boards
 * @returns {Promise<Array<Board>>} Promise object represents the array of all boards
 */

const getAll = async (): Promise<Array<Board>> => getAllBoards();

/**
 * Returns the board by id
 * @param {string} id user id
 * @returns {Promise<Board>} Promise object represents the board
 */

const getById = async (id: string): Promise<Board> => {
  const board = await getBoard(id);

  errorHandler(board.title, id, 'board');

  return board;
};

/**
 * Returns the created board
 * @param {Board} board new board data
 * @returns {Promise<Board>} Promise object represents the created board
 */

const create = async (board: Board): Promise<Board> => createBoard(board);

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Board} updatedBoard board data
 * @returns {Promise<Board>} Promise object represents the updated board
 */

const updateById = async (id: string, updatedBoard: Board): Promise<Board> => {
  const board = await updateBoard(id, updatedBoard);

  errorHandler(board.title, id, 'board');

  return board;
};

/**
 * Returns the deleted board
 * @param {string} id board id to delete
 * @returns {Promise<Board>} Promise object represents the deleted board
 */

const deleteById = async (id: string): Promise<Board> => {
  const board = await deleteBoard(id);
  deleteTasks(id);

  errorHandler(board.title, id, 'board');

  return board;
};

export { getAll, getById, create, updateById, deleteById };
