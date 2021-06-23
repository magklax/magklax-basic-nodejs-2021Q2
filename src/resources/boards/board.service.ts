import Board from '../../entities/board.entity';
import * as boardsRepo from './board.memory.repository';

export const getAll = (): Promise<Array<Board>> => boardsRepo.getAll();

export const getById = (id: string): Promise<Board> => boardsRepo.getById(id);

export const create = (board: Board): Promise<Board> =>
  boardsRepo.create(board);

export const updateById = (id: string, updatedBoard: Board): Promise<Board> =>
  boardsRepo.updateById(id, updatedBoard);

export const deleteById = (id: string): Promise<Board> =>
  boardsRepo.deleteById(id);
