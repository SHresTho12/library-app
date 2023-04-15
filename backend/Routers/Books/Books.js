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

//delete a book fromt the database
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM Books WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

//update a book from the database
router.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const author = req.body.author;
  const description = req.body.description;
  const genre = req.body.genre;

  const sqlUpdate =
    "UPDATE Books SET name = ?, author = ?, description = ?, genre = ? WHERE id = ?";
  db.query(sqlUpdate, [name, author, description, genre, id], (err, result) => {
    if (err) console.log(err);
  });
});

//get a book by id
router.get("/get/:id", (req, res) => {
  const id = req.params.id;
  const sqlRetrieve = "SELECT * FROM Books WHERE id = ?";
  db.query(sqlRetrieve, [id], (err, result) => {
    res.send(result);
  });
});

//borrow a book
router.post("/borrow", (req, res) => {
  const bookId = req.body.book_id;
  const userId = req.body.user_id;
  console.log(bookId, userId);
  const sqlInsert = "INSERT INTO Borrow (book_id,user_id) VALUES (?,?)";
  db.query(sqlInsert, [bookId, userId], (err, result) => {
    if (err) console.log(err);
  });
});

module.exports = router;
