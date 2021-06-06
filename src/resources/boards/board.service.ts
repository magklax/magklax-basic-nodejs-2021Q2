import Board from './board.model';
import * as boardsRepo from './board.memory.repository';



const getAll = (): Promise<Array<Board>> => boardsRepo.getAll();



const getById = (id: string) => boardsRepo.getById(id);



const create = (board: Board) => boardsRepo.create(board);


const updateById = (id: string, updatedBoard: Board) =>
  boardsRepo.updateById(id, updatedBoard);


const deleteById = (id: string) => boardsRepo.deleteById(id);

export { getAll, getById, create, updateById, deleteById };
