import express from 'express';
import path from 'path';
import YAML from 'yamljs';
import swaggerUI from 'swagger-ui-express';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { requestLogger } from './middleware/request-logger';
import { errorMiddleware } from './middleware/error-middleware';
import { logger } from './winston';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(requestLogger);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});



// app.use('/broke', (_req, _res, _next) => {
//   throw Error('Oops');
// });

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

app.use(errorMiddleware);

process.on('uncaughtException', (error) => {
  logger.error(`captured error: ${error.message}`);

  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

// throw Error('Oops!');

process.on('unhandledRejection', (reason, promise) => {
  logger.error(
    `Unhandled rejection detected: ${reason} 'Unhandled Rejection at:' ${promise} `
  );

  setTimeout(() => {
    process.exit(1);
  }, 1000);
});

// Promise.reject(Error('Oops!'));

export default app;
