import Task from './task.model';
import * as tasksRepo from './task.memory.repository';

const getAll = () => tasksRepo.getAll();

const getById = (id: string) => tasksRepo.getById(id);


const create = (task: Task) => tasksRepo.create(task);



const updateById = (id: string, updatedTask: Task) =>
  tasksRepo.updateById(id, updatedTask);


const deleteById = (id: string) => tasksRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById };
