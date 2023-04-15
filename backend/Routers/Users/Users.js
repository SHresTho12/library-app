const express = require("express");
const router = express.Router();
const db = require("../../db");

//get all users id email and name and return them

router.get("/all", (req, res) => {
  const sqlRetrieve = "SELECT id, email, name FROM Users";
  db.query(sqlRetrieve, (err, result) => {
    res.send(result);
  });
});

//get all the books that a userr has borrowed and had not returned
router.get("/borrowedBooks/:id", (req, res) => {
  const id = req.params.id;
  const sqlRetrieve =
    "SELECT * FROM Books WHERE id IN (SELECT book_id FROM Borrow WHERE user_id = ? AND returned = false)";
  db.query(sqlRetrieve, [id], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

//return a book
router.put("/returnBook", (req, res) => {
  const id = req.body.book_id;
  const user_id = req.body.user_id;
  //update where book_id and user_id matched
  const sqlUpdate =
    "UPDATE Borrow SET returned = 1 WHERE book_id = ? AND user_id = ?";

  db.query(sqlUpdate, [id, user_id], (err, result) => {
    if (err) console.log(err);
  });
});

module.exports = router;
