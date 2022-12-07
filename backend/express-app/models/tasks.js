/** @format */

import { Sequelize, DataTypes } from "sequelize";
import "./index.js";

const Tasks = db.define(
	"tasks",
	{
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		priority_level: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completion_status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}
	//   {
	//     dbSequelize,
	//     modelName: "tasks",
	//     timestamps: false,
	//   }
);
await Tasks.sync();
// const results = await Employee.findAll();
//for creating an entry and pass it into employee create func
//await is used because create returns a promise
const description = "do dishes";
const priority_level = "HIGH";
const completion_status = "NOT_DONE";
const result = await Tasks.create({
	description,
	priority_level,
	completion_status,
});

module.exports = Task;
