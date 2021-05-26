const DB = require('../../common/inMemoryDB');
const { errorHandler } = require('../../common/utils');

const getAll = async () => DB.getAllUsers();

const getById = async (id) => {
  const user = await DB.getUser(id);

  errorHandler(user, id, 'user');

  return user;
};

const create = async (user) => DB.createUser(user);

const updateById = async (id, updatedUser) => {
  const user = await DB.updateUser(id, updatedUser);

  errorHandler(user, id, 'user');

  return user;
};

const deleteById = async (id) => {
  const user = await DB.deleteUser(id);

  errorHandler(user, id, 'user');

  DB.unasignTasks(id);

  return user;
};

module.exports = { getAll, getById, create, updateById, deleteById };
