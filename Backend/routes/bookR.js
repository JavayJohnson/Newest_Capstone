const express = require("express");
const router = express.Router();
const bookC = require("../controllers/bookC");



router.get("/:id", bookC.getBook);
router.get("/", bookC.getBooks);
router.post("/", bookC.createBook);
router.put("/:id", bookC.updateBook);
router.delete("/:id", bookC.deleteBook);

module.exports = router;