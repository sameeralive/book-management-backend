const Author = require('../models/author');
const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        throw new Error(error);
    }
}

const getAuthorById = async (req, res) => {
    const {id} = req.params;
    try {
        const author = await Author.findById(id);
        res.json(author);
    } catch (error) {
        throw new Error(error);
    }
}

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.json(author);
    } catch (error) {
        throw new Error(error);
    }
}

const updateAuthor = async (req, res) => {
    const {id} = req.params;
    try {
        const author = await Author.findByIdAndUpdate(id, req.body, {new: true});
        res.json(author);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { getAllAuthors, getAuthorById, createAuthor, updateAuthor }
