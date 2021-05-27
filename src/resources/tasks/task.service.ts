const tasksRepo = require('./task.memory.repository');

/**
 * Returns the array of tasks
 * @returns {Promise<Array>} Promise object represents the array of all tasks
 */


const getAll = () => tasksRepo.getAll();

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Object>} Promise object represents the task
 */

const getById = (id) => tasksRepo.getById(id);

/**
 * Returns the created task
 * @param {Object} board new task data 
 * @returns {Promise<Object>} Promise object represents the created task
 */

const create = (task) => tasksRepo.create(task);

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Object} updatedTask task data
 * @returns {Promise<Object>} Promise object represents the updated task
 */

const updateById = (id, updatedTask) => tasksRepo.updateById(id, updatedTask);

/**
 * Returns the deleted task
 * @param {string} id task id to delete
 * @returns {Promise<Object>} Promise object represents the deleted task
 */

const deleteById = (id) => tasksRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
