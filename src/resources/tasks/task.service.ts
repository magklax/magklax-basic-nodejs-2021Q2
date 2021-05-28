import Task from './task.model';
import * as tasksRepo from './task.memory.repository';

/**
 * Returns the array of tasks
 * @returns {Promise<Array<Task>} Promise object represents the array of all tasks
 */

const getAll = (): Promise<Array<Task>> => tasksRepo.getAll();

/**
 * Returns the task by id
 * @param {string} id task id
 * @returns {Promise<Task>} Promise object represents the task
 */

const getById = (id: string): Promise<Task> => tasksRepo.getById(id);

/**
 * Returns the created task
 * @param {Object} task new task data
 * @returns {Promise<Task>} Promise object represents the created task
 */

const create = (task: Task): Promise<Task> => tasksRepo.create(task);

/**
 * Returns the updated task
 * @param {string} id task id to update
 * @param {Object} updatedTask task data
 * @returns {Promise<Task>} Promise object represents the updated task
 */

const updateById = (id: string, updatedTask: Task): Promise<Task> =>
  tasksRepo.updateById(id, updatedTask);

/**
 * Returns the deleted task
 * @param {string} id task id to delete
 * @returns {Promise<Task>} Promise object represents the deleted task
 */

const deleteById = (id: string): Promise<Task> => tasksRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById };
