import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Board from './board.model';
import * as boardsService from './board.service';

const router = Router();

router.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.getById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: [...req.body.columns],
    })
  );

  res.status(StatusCodes.CREATED).json(Board.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard = {
      id: req.params.id,
      title: req.body.title,
      columns: [...req.body.columns],
    };

    const board = await boardsService.updateById(req.params.id, updatedBoard);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const board = await boardsService.deleteById(req.params.id);
    res.json(Board.toResponse(board));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default router;
