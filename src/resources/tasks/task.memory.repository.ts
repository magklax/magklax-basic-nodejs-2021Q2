import Task from './task.model';
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from '../../common/inMemoryDB';

const getAll = async (): Promise<Array<Task>> => getAllTasks();

const getById = async (id: string): Promise<Task> => getTask(id);

const create = async (task: Task): Promise<Task> => createTask(task);

const updateById = async (id: string, updatedTask: Task): Promise<Task> => updateTask(id, updatedTask);

const deleteById = async (id: string): Promise<Task> => deleteTask(id);

export { getAll, getById, create, updateById, deleteById };
