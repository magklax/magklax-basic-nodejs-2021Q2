const DB = require('../../common/inMemoryDB');
const { errorHandler } = require('../../common/utils');

const getAll = async () => DB.getAllBoards();

const getById = async (id) => {
  const board = await DB.getBoard(id);

  errorHandler(board, id, 'board');

  return board;
};

const create = async (board) => DB.createBoard(board);

const updateById = async (id, updatedBoard) => {
  const board = await DB.updateBoard(id, updatedBoard);

  errorHandler(board, id, 'board');

  return board;
};

const deleteById = async (id) => {
  const board = await DB.deleteBoard(id);
  DB.deleteTasks(id);

  errorHandler(board, id, 'board');

  return board;
};

module.exports = { getAll, getById, create, updateById, deleteById };
