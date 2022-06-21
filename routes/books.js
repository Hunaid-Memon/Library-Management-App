const express = require('express');
const router = express.Router();

// @route   GET api/books
// @desc    Get all the user's books
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all books')
});

// @route   POST api/books
// @desc    Add a new book
// @access  Private
router.post('/', (req, res) => {
    res.send('Add a book')
});

// @route   PUT api/books/:id
// @desc    Update a book
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update a book')
});

// @route   DELETE api/books/:id
// @desc    Delete a book
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete a book')
});

module.exports = router;