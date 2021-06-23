import { getRepository } from 'typeorm';
import Task from '../../entities/task.entity';

const getAll = async (): Promise<Array<Task>> => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find();
  return tasks;
};

const getById = async (id: string): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.findOne(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return task;
};

const create = async (taskData: Task): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const task = taskRepository.create(taskData);
  return taskRepository.save(task);
};

const updateById = async (id: string, taskData: Task): Promise<Task> => {
  const taskRepository = getRepository(Task);
  const task = await taskRepository.findOne(id);

  if (!task) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  const updatedTask = await taskRepository.update(id, taskData);
  return updatedTask.raw;
};

const deleteById = async (id: string): Promise<Task> => {
  const taskRepository = getRepository(Task);

  const deletedTask = await taskRepository.delete(id);

  if (!deletedTask.affected) {
    throw new Error(`The task with id: ${id} has not been found`);
  }

  return deletedTask.raw;
};

export { getAll, getById, create, updateById, deleteById };
