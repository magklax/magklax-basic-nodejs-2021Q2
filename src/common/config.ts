import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const { PORT } = process.env;
const { NODE_ENV } = process.env;
const { MONGO_CONNECTION_STRING } = process.env;
const { AUTH_MODE } = process.env || 'true';

export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, AUTH_MODE };
