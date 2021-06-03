import { Request, Response, Router } from 'express';
import Task from './task.model';
import * as tasksService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req: Request, res: Response) => {
  try {
    const tasks = await tasksService.getAll();
    res.json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').get(async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    if (id) {
      const task = await tasksService.getById(id);
      if (task) {
        res.json(Task.toResponse(task));
      }
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const { title, order, description, userId, columnId } = req.body;
  const task = await tasksService.create(
    new Task({
      title,
      order,
      description,
      userId,
      columnId,
      boardId,
    })
  );
  res.status(task ? 201 : 400).json(Task.toResponse(task));
});

router.route('/:id').put(async (req: Request, res: Response) => {
  const { boardId, id } = req.params;
  const { title, order, description, userId, columnId } = req.body;

  if (id) {
    try {
      const updatedTask: Task = {
        title,
        order,
        description,
        userId,
        columnId,
        boardId,
        id,
      };

      const task = await tasksService.updateById(id, updatedTask);
      if (task) {
        res.json(Task.toResponse(task));
      }
    } catch (err) {
      res.status(404).send(err.message);
    }
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    if (task) {
      res.json(Task.toResponse(task));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default router;
