const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Blue86Jeep12!",
  database: "election",
});

module.exports = db;
