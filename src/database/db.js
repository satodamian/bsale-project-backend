//Definimos la conexion
import Sequelize from "sequelize";
import {DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT} from '../config.js'

export const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  port: Number(DB_PORT),
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

