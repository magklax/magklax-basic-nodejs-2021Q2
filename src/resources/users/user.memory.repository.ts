import User from './user.model';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  unasignTasks,
} from '../../common/inMemoryDB';

export const getAll = async (): Promise<Array<User>> => getAllUsers();

export const getById = async (id: string): Promise<User> => getUser(id);

export const create = async (user: User): Promise<User> => createUser(user);

export const updateById = async (id: string, updatedUser: User): Promise<User> => updateUser(id, updatedUser);

export const deleteById = async (id: string): Promise<User> => {
  const user = await deleteUser(id);
  unasignTasks(id);
  return user;
};
