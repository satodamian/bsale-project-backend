//Definimos la conexion
import Sequelize from "sequelize";
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER} from '../config.js'

export const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
});

