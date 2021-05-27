import * as usersRepo from "./user.memory.repository";
import User from "./user.model";

/**
 * Returns the array of users
 * @returns {Promise<Array<User>>} Promise object represents the array of all users
 */

const getAll = (): Promise<Array<User>> => usersRepo.getAll();

/**
 * Returns the user by id
 * @param {string} id user id
 * @returns {Promise<User>} Promise object represents the user
 */

const getById = (id: string): Promise<User> => usersRepo.getById(id);

/**
 * Returns the created user
 * @param {User} board new user data 
 * @returns {Promise<User>} Promise object represents the created user
 */

const create = (user: User): Promise<User> => usersRepo.create(user);

/**
 * Returns the updated task
 * @param {string} id user id to update
 * @param {User} updatedUser user data
 * @returns {Promise<User>} Promise object represents the updated user
 */

const updateById = (id: string, updatedUser: User): Promise<User> => usersRepo.updateById(id, updatedUser);

/**
 * Returns the deleted task
 * @param {string} id user id to delete
 * @returns {Promise<User>} Promise object represents the deleted user
 */

const deleteById = (id: string): Promise<User> => usersRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById }
