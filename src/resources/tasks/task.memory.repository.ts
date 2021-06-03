import errorHandler from '../../common/utils';
import Task from './task.model';
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../../common/inMemoryDB';

const getAll = async () => getAllTasks();

const getById = async (id: string) => {
  const task = await getTask(id);

  errorHandler(task, id, 'task');

  return task;
};

const create = async (task: Task) => createTask(task);


const updateById = async (id: string, updatedTask: Task) => {
  const task = await updateTask(id, updatedTask);

  errorHandler(task, id, 'task');

  return task;
};


const deleteById = async (id: string) => {
  const task = await deleteTask(id);

  errorHandler(task, id, 'task');

  return task;
};

export { getAll, getById, create, updateById, deleteById };
