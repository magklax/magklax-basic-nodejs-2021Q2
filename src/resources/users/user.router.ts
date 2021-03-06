import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    })
  );

  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedUser = {
      id: req.params.id,
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    };
    const user = await usersService.updateById(req.params.id, updatedUser);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const user = await usersService.deleteById(req.params.id);
    res.json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default router;
