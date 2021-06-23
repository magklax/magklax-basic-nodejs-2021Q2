import { getRepository } from 'typeorm';
import Board from '../../entities/board.entity';

export const getAll = async (): Promise<Array<Board>> => {
  const boardRepository = getRepository(Board);
  const boards = await boardRepository.find();
  return boards;
};

export const getById = async (id: string): Promise<Board> => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return board;
};

export const create = async (boardData: Board): Promise<Board> => {
  const boardRepository = getRepository(Board);
  const board = boardRepository.create(boardData);
  return boardRepository.save(board);
};

export const updateById = async (
  id: string,
  boardData: Board
): Promise<Board> => {
  const boardRepository = getRepository(Board);
  const board = await boardRepository.findOne(id);

  if (!board) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  const updatedBoard = await boardRepository.update(id, boardData);
  return updatedBoard.raw;
};

export const deleteById = async (id: string): Promise<Board> => {
  const boardRepository = getRepository(Board);

  const deletedBoard = await boardRepository.delete(id);

  if (!deletedBoard.affected) {
    throw new Error(`The board with id: ${id} has not been found`);
  }

  return deletedBoard.raw;
};
