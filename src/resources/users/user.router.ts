import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';

const userRouter = Router();

userRouter.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

userRouter.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

userRouter.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    })
  );

  res.status(user ? 201 : 400).json(User.toResponse(user));
});

userRouter.route('/:id').put(async (req, res) => {
  try {
    const updatedUser = {
      id: req.params.id,
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    };

    const user = await usersService.updateById(req.params.id, updatedUser);
    if (user) {
      res.json(User.toResponse(user));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

userRouter.route('/:id').delete(async (req, res) => {
  try {
    const user = await usersService.deleteById(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default userRouter;
