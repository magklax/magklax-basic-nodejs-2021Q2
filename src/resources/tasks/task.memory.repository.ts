const DB = require('../../common/inMemoryDB');
import errorHandler from "../../common/utils";

/**
 * Returns the array of tasks
 * @returns {Promise<Array>} Promise object represents the array of all tasks
 */

const getAll = async () => DB.getAllTasks();

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Object>} Promise object represents the task
 */

const getById = async (id) => {
  const task = await DB.getTask(id);

  errorHandler(task, id, 'task');

  return task;
};

/**
 * Returns the created task
 * @param {Object} board new task data 
 * @returns {Promise<Object>} Promise object represents the created task
 */

const create = async (task) => DB.createTask(task);

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Object} updatedTask task data
 * @returns {Promise<Object>} Promise object represents the updated task
 */

const updateById = async (id, updatedTask) => {
  const task = await DB.updateTask(id, updatedTask);

  errorHandler(task, id, 'task');

  return task;
};

/**
 * Returns the deleted task
 * @param {string} id task id to delete
 * @returns {Promise<Object>} Promise object represents the deleted task
 */

const deleteById = async (id) => {
  const task = await DB.deleteTask(id);

  errorHandler(task, id, 'task');

  return task;
};

module.exports = { getAll, getById, create, updateById, deleteById };
