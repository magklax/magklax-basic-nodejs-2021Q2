const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAll();
    res.json(tasks.map(Task.toResponse));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      columnId: req.body.columnId,
      boardId: req.params.boardId,
    })
  );
  res.status(task ? 201 : 400).json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedTask = {
      title: req.body.title,
      order: req.body.order,
      description: req.body.description,
      userId: req.body.userId,
      columnId: req.body.columnId,
      boardId: req.params.boardId,
      id: req.params.id,
    };
    const task = await tasksService.updateById(req.params.id, updatedTask);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    const task = await tasksService.deleteById(req.params.id);
    res.json(Task.toResponse(task));
  } catch (err) {
    res.status(404).send(err.message);
  }
});

export default router;
