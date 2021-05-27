const DB = require('../../common/inMemoryDB');
const { errorHandler } = require('../../common/utils');

/**
 * Returns the array of users
 * @returns {Promise<Array>} Promise object represents the array of all users
 */

const getAll = async () => DB.getAllUsers();

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<Object>} Promise object represents the user
 */

const getById = async (id) => {
  const user = await DB.getUser(id);

  errorHandler(user, id, 'user');

  return user;
};

/**
 * Returns the created user
 * @param {Object} board new user data 
 * @returns {Promise<Object>} Promise object represents the created user
 */

const create = async (user) => DB.createUser(user);

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {Object} updatedUser user data
 * @returns {Promise<Object>} Promise object represents the updated user
 */

const updateById = async (id, updatedUser) => {
  const user = await DB.updateUser(id, updatedUser);

  errorHandler(user, id, 'user');

  return user;
};

/**
 * Returns the deleted task
 * @param {string} id user id to delete
 * @returns {Promise<Object>} Promise object represents the deleted user
 */

const deleteById = async (id) => {
  const user = await DB.deleteUser(id);

  errorHandler(user, id, 'user');

  DB.unasignTasks(id);

  return user;
};

module.exports = { getAll, getById, create, updateById, deleteById };
