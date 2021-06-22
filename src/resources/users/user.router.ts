import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../../entities/user.entity';
import * as usersService from './user.service';

const userRouter = Router();

userRouter.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

userRouter.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

userRouter.route('/').post(async (req, res) => {
  const userData = req.body;
  const user = await usersService.create(userData);
  res.status(StatusCodes.CREATED).json(User.toResponse(user));
});

userRouter.route('/:id').put(async (req, res) => {
  try {
    const updatedUser: User = req.body;
    const id: string = req.params.id;
    const user = await usersService.updateById(id, updatedUser);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

userRouter.route('/:id').delete(async (req, res) => {
  try {
    const user = await usersService.deleteById(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default userRouter;
