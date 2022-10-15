import { Router } from "express";

import BookController from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/books", BookController.listBooks);
booksRoutes.get("/books/:id", BookController.listBookById);
booksRoutes.post("/books", BookController.createBook);
booksRoutes.put("/books/:id", BookController.updateBookById);
booksRoutes.delete("/books/:id", BookController.deleteBookById);

export default booksRoutes;
