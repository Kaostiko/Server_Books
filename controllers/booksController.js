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
    try {
      const snapshot = await db.collection("books").get();
      const books = [];
      snapshot.forEach((doc) => {
        books.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json(books);
    } catch (error) {
      console.error("Error al obtener todos los libros:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  getOneBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      console.log("Ver uno", bookId);
      const bookDoc = await db.collection("books").doc(bookId).get();

      if (!bookDoc.exists) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }

      const bookData = bookDoc.data();
      return res.status(200).json(bookData);
    } catch (error) {
      console.error("Error al obtener el libro:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  updateBook = async (req, res) => {
    const { book_id } = req.params;
    const { titulo, autor, estilo, sinopsis } = req.body;

    try {
      const bookRef = db.collection("books").doc(book_id);
      const updatedFields = {};

      // Añadir los campos que se quieren actualizar al objeto
      if (titulo) updatedFields.titulo = titulo;
      if (autor) updatedFields.autor = autor;
      if (estilo) updatedFields.estilo = estilo;
      if (sinopsis) updatedFields.sinopsis = sinopsis;

      // Realizar la actualización
      await bookRef.update(updatedFields);

      // Respuesta de éxito
      return res
        .status(200)
        .json({ message: "Libro actualizado correctamente" });
    } catch (error) {
      console.error("Error al actualizar el libro:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  deleteBook = async (req, res) => {
    try {
      const { bookId } = req.params;
      console.log("BOOKID", bookId);
      const docRef = db.collection("books").doc(bookId);

      const doc = await docRef.get();
      if (!doc.exists) {
        return res.status(404).json({ error: "Libro no encontrado" });
      }

      await docRef.delete();
      console.log("Libro eliminado:", bookId);
      return res.status(200).json({ message: "Libro eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };
}

module.exports = new booksController();
