const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
const router = require("./Routers");

var cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));

//database
db.connect();

db.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

app.use(cors());
app.use(express.json());


//routers
app.use("/api", router);
// app.post("/addbook", (req, res) => {
//   console.log(req.body);
//   const name = req.body.name;
//   const author = req.body.author;
//   const description = req.body.description;
//   const genre = req.body.genre;

//   const sqlInsert =
//     "INSERT INTO Books (name,author,description,genre) VALUES (?,?,?,?)";
//   db.query(sqlInsert, [name, author, description, genre], (err, result) => {
//     console.log(err);
//     return;
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
