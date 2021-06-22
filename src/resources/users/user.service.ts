import * as usersRepo from './user.memory.repository';
import User from '../../entities/user.entity';

export const getAll = (): Promise<Array<User>> => usersRepo.getAll();

export const getById = (id: string): Promise<User> => usersRepo.getById(id);

export const create = (user: User): Promise<User> => usersRepo.create(user);

export const updateById = (id: string, updatedUser: User): Promise<User> =>
  usersRepo.updateById(id, updatedUser);

export const deleteById = (id: string): Promise<User> =>
  usersRepo.deleteById(id);
