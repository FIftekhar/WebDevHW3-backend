/** @format */

const pgtools = require("pgtools");

const config = {
  user: "postgres",
  host: "localhost",
  port: 5433,
  password: "rackman",
};

const dbname = require("./dbName.js");

//create the database
// if it exists, db will not be created and it just connects

//same as async function createDB(){} use a try catch if the database exists
const createDB = async () => {
	try {
		let res = await pgtools(config, dbname); //returns promise
		console.log(res);
		//use a format string to add in the database name into the log
		console.log(`Created database ${dbname}`);
	} catch (err) {
		if (err.name == "duplicate_database") {
			console.log(`Database already exists: ${dbname}`);
			return;
		} else {
			console.error(err);
			process.exit(1);
		}
	}
};

module.exports = createDB;
