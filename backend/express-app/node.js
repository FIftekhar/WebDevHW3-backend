/** @format */

const user = "<postgres user>";
const host = "localhost";
const database = "<postgres db name>";
const password = "<postgres password>";
const port = "<postgres port>";

import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});
