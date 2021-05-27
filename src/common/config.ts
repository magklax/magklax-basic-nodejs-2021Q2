import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const AUTH_MODE = process.env.AUTH_MODE === 'true';

export { PORT, NODE_ENV, MONGO_CONNECTION_STRING, AUTH_MODE };
