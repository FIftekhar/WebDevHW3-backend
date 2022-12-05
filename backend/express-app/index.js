/** @format */

const { userInfo } = require("os");
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/wiki");

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

//sync model to an actual table in database
await Task.sync();
