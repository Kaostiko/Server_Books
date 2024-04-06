const db = require("../utils/Firebase");

class booksController {
  createBook = async (req, res) => {
    try {
      // Del req.body destructuro los datos.
      const { titulo, autor, estilo, sinopsis } = req.body;

      console.log(titulo, autor, estilo, sinopsis);
      // poner la validación desde el front
      if (!titulo || !autor || !estilo || !sinopsis) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const newBookRef = await db.collection("books").add({
        // datos de la colección.
        titulo,
        autor,
        estilo,
        sinopsis,
      });
      // Responder con un código de estado 201 y el ID del nuevo libro
      return res
        .status(201)
        .json({ message: "Libro creado - Todo OK", id: newBookRef.id });
    } catch (error) {
      console.error("Error al crear el libro:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  getAllBooks = async (req, res) => {
    // res.send("Estoy en books todos");
    const snapshot = await db.collection("books").get();
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  getOneBook = (req, res) => {
    const book_id = req.params;
    res.send(`Información completa del libro con is: ${book_id}`);
  };

  updateBook = (req, res) => {
    const book_id = req.params;
    res.send(`Actualizar la información del libro: ${book_id}`);
  };

  deleteBook = (req, res) => {
    const book_id = req.params;
    res.send(`Borrar libro concreto con id: ${book_id}`);
  };
}

module.exports = new booksController();
