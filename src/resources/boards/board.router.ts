import { Router } from 'express';
import Board from './board.model';
import * as boardsService from './board.service';

const boardRouter = Router();

boardRouter.route('/').get(async (_req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.getById(req.params.id);
    if (board) {
      res.json(Board.toResponse(board));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

boardRouter.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: [...req.body.columns],
    })
  );

  res.status(board ? 201 : 400).json(Board.toResponse(board));
});

boardRouter.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard = {
      id: req.params.id,
      title: req.body.title,
      columns: [...req.body.columns],
    };

    const board = await boardsService.updateById(req.params.id, updatedBoard);
    if (board) {
      res.json(Board.toResponse(board));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

boardRouter.route('/:id').delete(async (req, res) => {
  try {
    const board = await boardsService.deleteById(req.params.id);
    if (board) {
      res.json(Board.toResponse(board));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default boardRouter;
