const argon = require("argon2");
const express = require("express");
const router = express.Router();
const db = require("../../db");

//create a signup request
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPass = await argon.hash(password);
  const email = req.body.email;
  console.log(username, hashedPass, email);
  const sqlInsert = "INSERT INTO Users (Name,Password,Email) VALUES (?,?,?)";
  db.query(sqlInsert, [username, hashedPass, email], (err, result) => {
    console.log(err);
    return;
  });
});

//create a login request
router.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const query = `SELECT * FROM Users WHERE email = '${userEmail}'`;
  const password = req.body.password;
  let user;
  db.query(query, async function (error, results, fields) {
    user = results[0];
    console.log(user);
    if (error) throw error;
    if (user) {
      if (await argon.verify(user.Password, password)) {
        delete user.Password;
        //also send the status code
        res.status(200);
        res.json(user);
      } else {
        res.send("Wrong username or password");
      }
    } else {
      res.status(404);
      res.send("No user found");
    }
  });
  //console.log(user);
});

//log out
router.post("/logout", (req, res) => {
  res.send("logged out");
});

//crreate a function to get a user by id
async function getUserById(email) {
  const sqlRetrieve = "SELECT * FROM Users WHERE email = ?";
  const user = db.query(sqlRetrieve, email, (err, result) => {
    if (err) {
      console.log(err);
    }
    return result;
  });
  return user;
}

module.exports = router;
