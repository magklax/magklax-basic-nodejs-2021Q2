import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Board from '../../entities/board.entity';
import * as boardsService from './board.service';

const boardRouter = Router();

boardRouter.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAll();
  res.status(StatusCodes.OK).json(boards);
});

boardRouter.route('/:id').get(async (req: Request, res: Response) => {
  try {
    const id: string = req.params['id']!;
    const board = await boardsService.getById(id);
    res.status(StatusCodes.OK).json(board);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

boardRouter.route('/').post(async (req: Request, res: Response) => {
  const boardData = req.body;
  const board = await boardsService.create(boardData);
  res.status(StatusCodes.CREATED).json(board);
});

boardRouter.route('/:id').put(async (req: Request, res: Response) => {
  try {
    const updatedBoard: Board = req.body;
    const id: string = req.params['id']!;
    const board = await boardsService.updateById(id, updatedBoard);
    res.status(StatusCodes.OK).json(board);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

boardRouter.route('/:id').delete(async (req: Request, res: Response) => {
  try {
    const id: string = req.params['id']!;
    const board = await boardsService.deleteById(id);
    res.status(StatusCodes.OK).json(board);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default boardRouter;
