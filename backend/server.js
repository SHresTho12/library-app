const express = require("express");
const connection = require("./db");
const app = express();
const port = 3000;

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
