import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Task from '../../entities/task.entity';
import * as tasksService from './task.service';

const taskRouter = Router({ mergeParams: true });

taskRouter.route('/').get(async (_req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/').post(async (req, res) => {
  const boardId: string = req.params.boardId;
  const taskData = { ...req.body, boardId };
  const task = await tasksService.create(taskData);
  res.status(StatusCodes.CREATED).json(Task.toResponse(task));
});

taskRouter.route('/:id').put(async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const id = req.params.id;
    const updatedTask = { ...req.body, boardId, id };
    const task = await tasksService.updateById(id, updatedTask);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

taskRouter.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default taskRouter;
