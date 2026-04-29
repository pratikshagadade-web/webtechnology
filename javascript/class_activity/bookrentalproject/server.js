const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database
let books = [
  { id: 1, name: "Harrypotter", available: true },
  { id: 2, name: "Python Guide", available: true },
  { id: 3, name: "The ocean", available: false }
];


app.get("/books", (req, res) => {
  res.json(books);
});

// ==========================
// ADD BOOK
// ==========================
app.post("/books", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Book name required" });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    name,
    available: true
  };

  books.push(newBook);

  res.json({
    message: "Book added successfully",
    book: newBook
  });
});

// ==========================
// RENT BOOK
// ==========================
app.post("/rent/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  // 🔴 IMPORTANT FIX: check if book exists
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  setTimeout(() => {
    if (book.available) {
      book.available = false;
      res.json({ message: "Book rented successfully" });
    } else {
      res.status(400).json({ message: "Book already rented" });
    }
  }, 1000);
});

// ==========================
// RETURN BOOK
// ==========================
app.post("/return/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  // 🔴 IMPORTANT FIX
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  setTimeout(() => {
    if (!book.available) {
      book.available = true;
      res.json({ message: "Book returned successfully" });
    } else {
      res.status(400).json({ message: "Book was not rented" });
    }
  }, 1000);
});

// ==========================
// START SERVER
// ==========================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});