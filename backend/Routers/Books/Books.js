const express = require("express");
const router = express.Router();
const db = require("../../db");

//create a router for inserting books to the database
router.post("/insert", (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const description = req.body.description;
  const genre = req.body.genre;

  const sqlInsert =
    "INSERT INTO Books (name,author,description,genre) VALUES (?,?,?,?)";
  db.query(sqlInsert, [name, author, description, genre], (err, result) => {
    //console.log(err);
    return;
  });
});

//get requests
router.get("/bookList", (req, res) => {
  const sqlRetrieve = "SELECT * FROM Books ";
  db.query(sqlRetrieve, (err, result) => {
    res.send(result);
  });
});

module.exports = router;
