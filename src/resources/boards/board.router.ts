import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Board from '../../entities/board.entity';
import * as boardsService from './board.service';

const boardRouter = Router();

boardRouter.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.getById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

boardRouter.route('/').post(async (req, res) => {
  const boardData = req.body;
  const board = await boardsService.create(boardData);
  res.status(StatusCodes.CREATED).json(Board.toResponse(board));
});

boardRouter.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard: Board = req.body;
    const id: string = req.params.id;
    const board = await boardsService.updateById(id, updatedBoard);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

boardRouter.route('/:id').delete(async (req, res) => {
  try {
    const board = await boardsService.deleteById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default boardRouter;
