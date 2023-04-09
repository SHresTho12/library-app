const express = require("express");
const router = express.Router();

const bookRouter = require("./Books/Books");

router.use("/books", bookRouter);

module.exports = router;
