const Book = require('../models/book');
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        throw new Error(error);
    }
}

const getBookById = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        res.json(book);
    } catch (error) {
        throw new Error(error);
    }
}

const createBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (error) {
        throw new Error(error);
    }
}

const updateBook = async (req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findByIdAndUpdate(id, req.body, {new: true});
        res.json(book);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { getAllBooks, getBookById, createBook, updateBook }
