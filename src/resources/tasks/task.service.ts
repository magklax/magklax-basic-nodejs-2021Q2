import Task from './task.model';
import * as tasksRepo from './task.memory.repository';

export const getAll = (): Promise<Array<Task>> => tasksRepo.getAll();

export const getById = (id: string): Promise<Task> => tasksRepo.getById(id);

export const create = (task: Task): Promise<Task> => tasksRepo.create(task);

export const updateById = (id: string, updatedTask: Task): Promise<Task> =>
  tasksRepo.updateById(id, updatedTask);

export const deleteById = (id: string): Promise<Task> => tasksRepo.deleteById(id);
