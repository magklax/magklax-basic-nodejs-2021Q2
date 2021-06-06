import * as usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = () => usersRepo.getAll();

const getById = (id: string) => usersRepo.getById(id);

const create = (user: User) => usersRepo.create(user);

const updateById = (id: string, updatedUser: User) =>
  usersRepo.updateById(id, updatedUser);

const deleteById = (id: string) => usersRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById };
