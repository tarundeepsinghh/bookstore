import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Router } from "express";
import { CreateBookDto, UpdateBookDto } from "../dtos/book-req.js";
import Book from "../models/book.js";
import { priceRange } from "../constant.js";

const router = Router();

// Utility function to validate DTO
const validateDto = async (dto, req, res, next) => {
  const errors = await validate(plainToInstance(dto, req.body));
  if (errors.length > 0) {
    return res.status(400).json(errors);
  }
  next();
};

// Add a new book
router.post(
  "/add",
  async (req, res, next) => {
    await validateDto(CreateBookDto, req, res, next);
  },
  async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
);

// Get book by ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: "ID is required" });

    const book = await Book.findById(id.toString());
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search books
router.get("/", async (req, res) => {
  let { keyword, price } = req.query;

  if (!keyword) keyword = "";

  try {
    // Build the query dynamically
    const query = {
      $and: [
        {
          $or: [
            { title: { $regex: keyword, $options: "i" } },
            { author: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
          ],
        },
      ],
    };

    // Add price filter only if 'price' is provided
    if (price && priceRange[price]) {
      query.$and.push({
        price: {
          $gte: parseInt(priceRange[price].min),
          $lte: parseInt(priceRange[price].max),
        },
      });
    }

    const books = await Book.find(query).sort({ title: -1 });
    res.status(200).json(books);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
});

// Update a book
router.patch(
  "/update/:id",
  async (req, res, next) => {
    await validateDto(UpdateBookDto, req, res, next);
  },
  async (req, res) => {
    try {
      const updatedBook = await Book.findOneAndUpdate(
        { _id: req.params.id.toString() },
        req.body,
        { new: true }
      );
      if (!updatedBook)
        return res.status(404).json({ message: "Book not found" });
      res.status(200).json(updatedBook);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Delete a book
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: "ID is required" });

  try {
    const deletedBook = await Book.findOneAndDelete({ _id: id.toString() });
    if (!deletedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
