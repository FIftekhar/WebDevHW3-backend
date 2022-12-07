/** @format */

const Sequelize = require("sequelize");
const dbName = require("./dbName.js");

const db = new Sequelize(dbName, "postgres", "rackman", {
	host: "localhost",
	dialect: "postgres",
});

module.exports = db;
