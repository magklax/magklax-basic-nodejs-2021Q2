import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const { PORT, NODE_ENV, JWT_SECRET_KEY } = process.env;

export const { AUTH_MODE } = process.env || 'true';
