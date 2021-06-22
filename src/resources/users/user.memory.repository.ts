import { getRepository } from 'typeorm';
import User from '../../entities/user.entity';

export const getAll = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  return users;
};

export const getById = async (id: string): Promise<User> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

export const create = async (userData: User): Promise<User> => {
  const userRepository = getRepository(User);
  const user = userRepository.create(userData);
  return userRepository.save(user);
};

export const updateById = async (id: string, userData: User): Promise<User> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  const updatedUser = await userRepository.update(id, userData);
  return updatedUser.raw;
};

export const deleteById = async (id: string): Promise<User> => {
  const userRepository = getRepository(User);

  const deletedUser = await userRepository.delete(id);

  if (!deletedUser.affected) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return deletedUser.raw;
};
