const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getById = (id) => tasksRepo.getById(id);

const create = (task) => tasksRepo.create(task);

const updateById = (id, updatedTask) => tasksRepo.updateById(id, updatedTask);

const deleteById = (id) => tasksRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
