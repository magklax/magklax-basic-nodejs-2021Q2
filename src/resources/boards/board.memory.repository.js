const DB = require('../../common/inMemoryDB');
const { errorHandler } = require('../../common/utils');

/**
 * Returns the array of boards
 * @returns {Promise<Array>} Promise object represents the array of all boards
 */

const getAll = async () => DB.getAllBoards();

/**
 * Returns the board by id
 * @param {string} id user id
 * @returns {Promise<Object>} Promise object represents the board
 */

const getById = async (id) => {
  const board = await DB.getBoard(id);

  errorHandler(board, id, 'board');

  return board;
};

/**
 * Returns the created board
 * @param {Object} board new board data 
 * @returns {Promise<Object>} Promise object represents the created board
 */

const create = async (board) => DB.createBoard(board);

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Object} updatedBoard board data
 * @returns {Promise<Object>} Promise object represents the updated board
 */

const updateById = async (id, updatedBoard) => {
  const board = await DB.updateBoard(id, updatedBoard);

  errorHandler(board, id, 'board');

  return board;
};

/**
 * Returns the deleted board
 * @param {string} id board id to delete
 * @returns {Promise<Object>} Promise object represents the deleted board
 */

const deleteById = async (id) => {
  const board = await DB.deleteBoard(id);
  DB.deleteTasks(id);

  errorHandler(board, id, 'board');

  return board;
};

module.exports = { getAll, getById, create, updateById, deleteById };
