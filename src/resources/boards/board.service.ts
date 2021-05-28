import Board from './board.model';
import * as boardsRepo from './board.memory.repository';

/**
 * Returns the array of boards
 * @returns {Promise<Array<Board>>} Promise object represents the array of all boards
 */

const getAll = (): Promise<Array<Board>> => boardsRepo.getAll();

/**
 * Returns the board by id
 * @param {string} id user id
 * @returns {Promise<Board>} Promise object represents the board
 */

const getById = (id: string): Promise<Board> => boardsRepo.getById(id);

/**
 * Returns the created board
 * @param {Board} board new board data
 * @returns {Promise<Board>} Promise object represents the created board
 */

const create = (board: Board): Promise<Board> => boardsRepo.create(board);

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Board} updatedBoard board data
 * @returns {Promise<Board>} Promise object represents the updated board
 */

const updateById = (id: string, updatedBoard: Board): Promise<Board> =>
  boardsRepo.updateById(id, updatedBoard);

/**
 * Returns the deleted board
 * @param {string} id board id to delete
 * @returns {Promise<Board>} Promise object represents the deleted board
 */

const deleteById = (id: string): Promise<Board> => boardsRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById };
