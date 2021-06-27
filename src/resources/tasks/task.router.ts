import { Router, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as tasksService from './task.service';

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/').get(async (_req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.status(StatusCodes.OK).json(tasks);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.status(StatusCodes.OK).json(task);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/').post(async (req: Request, res) => {
  const boardId: string = req.params['boardId']!;
  const taskData = { ...req.body, boardId };
  const task = await tasksService.create(taskData);
  res.status(StatusCodes.CREATED).json(task);
});

taskRouter.route('/:id').put(async (req: Request, res) => {
  try {
    const boardId: string = req.params['boardId']!;
    const id: string = req.params['id']!;
    const updatedTask = { ...req.body, boardId, id };
    const task = await tasksService.updateById(id, updatedTask);
    res.status(StatusCodes.OK).json(task);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.status(StatusCodes.OK).json(task);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default taskRouter;
