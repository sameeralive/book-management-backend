const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const {getAllAuthors, getAuthorById, createAuthor, updateAuthor} = require("../controllers/authorCtrl");

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);

module.exports = router;