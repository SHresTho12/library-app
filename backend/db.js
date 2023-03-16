const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: 3307,
  database: "test",
});

module.exports = connection;
