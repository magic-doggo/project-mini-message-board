const { Pool } = require("pg");

module.exports = new Pool({
  // host: process.env.hostName, 
  // user: process.env.user,
  // database: process.env.databaseName,
  // password: process.env.password,
  // port: 5432 
  connectionString: process.env.EXTERNAL_DB_URL,
    ssl: {
    require: true, //why did this fix "read ECONNRESET"? discord suggestion
  }
});