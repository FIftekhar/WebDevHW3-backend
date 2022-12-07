/** @format */

import { Sequelize, DataTypes } from "sequelize";
import "./index.js";
const db = require("../config/database");
//make a employee mode which is defined as employee with these attributes
const Employee = db.define(
	"employee",
	{
		first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		department: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}
	// {
	//   dbSequelize,
	//   modelName: "employee",
	//   timestamps: false,
	// }
);
await Employee.sync();

// const results = await Employee.findAll();
//for creating an entry and pass it into employee create func
//await is used because create returns a promise
const first_name = "Roger";
const last_name = "Smith";
const department = "Math";

const result = await Employee.create({ first_name, last_name, department });

module.exports = Employees;
