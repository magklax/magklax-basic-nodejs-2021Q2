const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.getAllTasks();

const getById = async (id) => {
  const task = await DB.getTask(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return task;
};

const create = async (task) => DB.createTask(task);

const updateById = async (id, updatedTask) => {
  const task = await DB.updateTask(id, updatedTask);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return task;
};

const deleteById = async (id) => {
  const task = await DB.deleteTask(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return task;
};

module.exports = { getAll, getById, create, updateById, deleteById };
