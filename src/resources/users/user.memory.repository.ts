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

/**
 * Returns the array of users
 * @returns {Promise<Array<User>>} Promise object represents the array of all users
 */

const getAll = async (): Promise<Array<User>> => getAllUsers();

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<User>} Promise object represents the user
 */

const getById = async (id: string): Promise<User> => {
  const user = await getUser(id);

  errorHandler(user.name, id, 'user');

  return user;
};

/**
 * Returns the created user
 * @param {Object} user new user data
 * @returns {Promise<User>} Promise object represents the created user
 */

const create = async (user: User): Promise<User> => createUser(user);

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {Object} updatedUser user data
 * @returns {Promise<User>} Promise object represents the updated user
 */

const updateById = async (id: string, updatedUser: User): Promise<User> => {
  const user = await updateUser(id, updatedUser);

  errorHandler(user.name, id, 'user');

  return user;
};

/**
 * Returns the deleted task
 * @param {string} id user id to delete
 * @returns {Promise<User>} Promise object represents the deleted user
 */

const deleteById = async (id: string): Promise<User> => {
  const user = await deleteUser(id);

  errorHandler(user.name, id, 'user');

  unasignTasks(id);

  return user;
};

export { getAll, getById, create, updateById, deleteById };
