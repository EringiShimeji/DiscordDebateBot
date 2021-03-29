import { Sequelize } from 'sequelize-typescript';
import * as root from 'app-root-path';
import { Guild } from './models/Guild';

export const sequelize = new Sequelize({
  database: `database`,
  dialect: 'sqlite',
  storage: `${root}/db/database.sqlite3`,
  models: [__dirname + '/models'],
}).addModels([Guild]);
