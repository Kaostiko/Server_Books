//requerir librerías
const express = require("express");
const cors = require("cors");
const path = require("path");

//instancio express
const app = express();

//declaro el puerto 4000
const port = 4000;

app.listen(port, () => {
  console.log("Servidor corriendo por el puerto: " + port);
});

// const userRouter = require("./routes/userRoute");
const booksRouter = require("./routes/booksRouter");

//middlewares
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/user", userRouter);
app.use("/books", booksRouter);

module.exports = app;
