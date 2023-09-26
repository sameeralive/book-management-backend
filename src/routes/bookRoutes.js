const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const {getAllBooks, getBookById, createBook, updateBook} = require("../controllers/bookCtrl");

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);

module.exports = router;