const express = require("express");
const router = express.Router();
const db = require("../../db");

//create a signup request
router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const sqlInsert =
    "INSERT INTO Users (username,password,email) VALUES (?,?,?)";
  db.query(sqlInsert, [username, password, email], (err, result) => {
    console.log(err);
    return;
  });
});

//create a login request
router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlRetrieve = "SELECT * FROM Users WHERE username = ? AND password = ?";
  db.query(sqlRetrieve, [username, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

module.exports = router;
