const express = require("express");
const booksController = require("../controllers/booksController");
const router = express.Router();

// http://localhost:4000/books

// Crea un nuevo libro
router.post("/", booksController.createBook);

// Devuelve una lista de todos los libros
router.get("/", booksController.getAllBooks);

// Devuelve los detalles de un libro específico segun id
router.get("/:book_id", booksController.getOneBook);

// Actualiza la información de un libro por su id
router.put("/:book_id", booksController.updateBook);

//Elimina un libro según su id
router.delete("/:book_id", booksController.deleteBook);

module.exports = router;
