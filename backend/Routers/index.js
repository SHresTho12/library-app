const express = require("express");
const router = express.Router();

const bookRouter = require("./Books/Books");

router.use("/books", bookRouter);
router.use("/auth", require("./Auth/Auth"));
router.use("/users", require("./Users/Users"));
module.exports = router;
