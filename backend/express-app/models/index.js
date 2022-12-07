/** @format */

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/** @format */

const { userInfo } = require("os");
const Sequelize = require("sequelize");
const dbSequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

//all employees and all tasks
// create and define model with sequelize
//add options to model fields
const Employee = db.define("employee", {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//sync model to an actual table in database
await Employee.sync();

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  priority_level: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completion_status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//sync model to an actual table in database, if it doesn't exist make the table
await Task.sync();
