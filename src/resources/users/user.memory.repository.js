const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllUsers();

const getById = async (id) => {
  const user = await DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

const create = async (user) => DB.createUser(user);

const updateById = async (id, updatedUser) => {
  const user = await DB.updateUser(id, updatedUser);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

const deleteById = async (id) => {
  const user = await DB.deleteUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  DB.unasignTasks(id);

  return user;
};

module.exports = { getAll, getById, create, updateById, deleteById };
