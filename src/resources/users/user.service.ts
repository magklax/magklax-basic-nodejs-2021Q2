const usersRepo = require('./user.memory.repository');

/**
 * Returns the array of users
 * @returns {Promise<Array>} Promise object represents the array of all users
 */

const getAll = () => usersRepo.getAll();

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<Object>} Promise object represents the user
 */

const getById = (id) => usersRepo.getById(id);

/**
 * Returns the created user
 * @param {Object} board new user data 
 * @returns {Promise<Object>} Promise object represents the created user
 */

const create = (user) => usersRepo.create(user);

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {Object} updatedUser user data
 * @returns {Promise<Object>} Promise object represents the updated user
 */

const updateById = (id, updatedUser) => usersRepo.updateById(id, updatedUser);

/**
 * Returns the deleted task
 * @param {string} id user id to delete
 * @returns {Promise<Object>} Promise object represents the deleted user
 */

const deleteById = (id) => usersRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
