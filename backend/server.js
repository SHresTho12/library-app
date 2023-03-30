const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;
var cors = require("cors");
app.use(bodyParser.urlencoded({ extended: true }));
db.connect();

db.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

app.use(cors());
app.use(express.json());
app.get("/bookList", (req, res) => {
  const sqlRetrieve = "SELECT * FROM Books ";
  db.query(sqlRetrieve, (err, result) => {
    res.send(result);
  });
});

app.post("/addbook", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const author = req.body.author;
  const genre = req.body.genre;

  const sqlInsert = "INSERT INTO Books (name,author,genre) VALUES (?,?,?)";
  db.query(sqlInsert, [name, author, genre], (err, result) => {
    console.log(err);
    return;
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
