import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../../entities/user.entity';
import * as usersService from './user.service';

const userRouter = Router();

userRouter.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.status(StatusCodes.OK).json(users);
});

userRouter.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.id);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

userRouter.route('/').post(async (req, res) => {
  const userData = req.body;
  const user = await usersService.create(userData);
  res.status(StatusCodes.CREATED).json(user);
});

userRouter.route('/:id').put(async (req, res) => {
  try {
    const updatedUser: User = req.body;
    const { id } = req.params;
    const user = await usersService.updateById(id, updatedUser);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

userRouter.route('/:id').delete(async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersService.deleteById(id);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    res.status(StatusCodes.NOT_FOUND).send(err.message);
  }
});

export default userRouter;
