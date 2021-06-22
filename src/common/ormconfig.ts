import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
} = process.env;

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [path.join(__dirname, '../entities/*.entity.ts')],
  migrationsTableName: 'custom_migration_table',
  migrations: [path.join(__dirname, '../migrations/*.ts')],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
