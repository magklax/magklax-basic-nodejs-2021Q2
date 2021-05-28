import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import * as userRouter from './resources/users/user.router';
import * as boardRouter from './resources/boards/board.router';
import * as taskRouter from './resources/tasks/task.router';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

app.use('/boards', boardRouter);

boardRouter.use('/:boardId/tasks', taskRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
  next(err);
});

export default app;
