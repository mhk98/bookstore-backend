const router = require("express").Router();
const book = require("./book");


router.use("/book", book);


module.exports = router;
