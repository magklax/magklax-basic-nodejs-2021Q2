import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Task from './task.model';
import * as tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      columnId: req.body.columnId,
      boardId,
    })
  );
  res.status(StatusCodes.CREATED).json(Task.toResponse(task));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { boardId, id } = req.params;
  if (id) {
    try {
      const updatedTask: Task = {
        title: req.body.title,
        order: req.body.order,
        description: req.body.description,
        userId: req.body.userId,
        columnId: req.body.columnId,
        boardId,
        id,
      };
      const task = await tasksService.updateById(id, updatedTask);
      res.json(Task.toResponse(task));
    } catch (err) {
      res.status(StatusCodes.NOT_FOUND).send(err.message);
    }
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default router;
