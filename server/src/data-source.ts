import dotenv from 'dotenv';
import path from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/user';

dotenv.config({ path: path.join(__dirname, '../../.env') });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ['migration/*.ts'],
  subscribers: [],
})

export default AppDataSource