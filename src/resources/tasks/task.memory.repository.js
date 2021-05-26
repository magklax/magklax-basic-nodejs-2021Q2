const DB = require('../../common/inMemoryDB');
const { errorHandler } = require('../../common/utils');

const getAll = async () => DB.getAllTasks();

const getById = async (id) => {
  const task = await DB.getTask(id);

  errorHandler(task, id, 'task');

  return task;
};

const create = async (task) => DB.createTask(task);

const updateById = async (id, updatedTask) => {
  const task = await DB.updateTask(id, updatedTask);

  errorHandler(task, id, 'task');

  return task;
};

const deleteById = async (id) => {
  const task = await DB.deleteTask(id);

  errorHandler(task, id, 'task');

  return task;
};

module.exports = { getAll, getById, create, updateById, deleteById };
