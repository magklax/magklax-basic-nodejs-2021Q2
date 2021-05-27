const boardsRepo = require('./board.memory.repository');

/**
 * Returns the array of boards
 * @returns {Promise<Array>} Promise object represents the array of all boards
 */

const getAll = () => boardsRepo.getAll();

/**
 * Returns the board by id
 * @param {string} id user id
 * @returns {Promise<Object>} Promise object represents the board
 */

const getById = (id) => boardsRepo.getById(id);

/**
 * Returns the created board
 * @param {Object} board new board data 
 * @returns {Promise<Object>} Promise object represents the created board
 */

const create = (board) => boardsRepo.create(board);

/**
 * Returns the updated board
 * @param {string} id board id to update
 * @param {Object} updatedBoard board data
 * @returns {Promise<Object>} Promise object represents the updated board
 */

const updateById = (id, updatedBoard) =>
  boardsRepo.updateById(id, updatedBoard);

  /**
 * Returns the deleted board
 * @param {string} id board id to delete
 * @returns {Promise<Object>} Promise object represents the deleted board
 */

const deleteById = (id) => boardsRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
