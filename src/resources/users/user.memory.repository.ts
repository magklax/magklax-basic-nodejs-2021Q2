import errorHandler from '../../common/utils';
import User from './user.model';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  unasignTasks,
} from '../../common/inMemoryDB';

const getAll = async () => getAllUsers();

const getById = async (id: string) => {
  const user = await getUser(id);

  errorHandler(user, id, 'user');

  return user;
};

const create = async (user: User) => createUser(user);

const updateById = async (id: string, updatedUser: User) => {
  const user = await updateUser(id, updatedUser);

  errorHandler(user, id, 'user');

  return user;
};

const deleteById = async (id: string) => {
  const user = await deleteUser(id);

  errorHandler(user, id, 'user');

  unasignTasks(id);

  return user;
};

export { getAll, getById, create, updateById, deleteById };
