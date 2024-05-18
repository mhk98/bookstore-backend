const book = require("../../controllers/book/book.controller");
const router = require("express").Router();

router.get("/", book.getAllBook);
router.post("/create-blog", book.createBook);
router.delete("/:id", book.deleteBook);
router.put("/:id", book.updateBook);

module.exports = router;
