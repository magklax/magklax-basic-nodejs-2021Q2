import errorHandler from '../../common/utils';
import Task from './task.model';
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../../common/inMemoryDB';

/**
 * Returns the array of tasks
 * @returns {Promise<Array<Task>>} Promise object represents the array of all tasks
 */

const getAll = async (): Promise<Array<Task>> => getAllTasks();

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Task>} Promise object represents the task
 */

const getById = async (id: string): Promise<Task> => {
  const task = await getTask(id);

  errorHandler(task.title, id, 'task');

  return task;
};

/**
 * Returns the created task
 * @param {Task} task new task data
 * @returns {Promise<Task>} Promise object represents the created task
 */

const create = async (task: Task): Promise<Task> => createTask(task);

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Task} updatedTask task data
 * @returns {Promise<Task>} Promise object represents the updated task
 */

const updateById = async (id: string, updatedTask: Task): Promise<Task> => {
  const task = await updateTask(id, updatedTask);

  errorHandler(task.title, id, 'task');

  return task;
};

/**
 * Returns the deleted task
 * @param {string} id task id to delete
 * @returns {Promise<Task>} Promise object represents the deleted task
 */

const deleteById = async (id: string): Promise<Task> => {
  const task = await deleteTask(id);

  errorHandler(task.title, id, 'task');

  return task;
};

export { getAll, getById, create, updateById, deleteById };
