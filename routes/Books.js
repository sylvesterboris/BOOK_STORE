const express = require("express");
const router = express.Router();
const Book = require("../models/Books");

// GET /books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST /books
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  const savedBook = await newBook.save();
  res.status(201).json(savedBook);
});

// PUT /books/:id
router.put("/:id", async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(updatedBook);
});

// DELETE /books/:id
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
