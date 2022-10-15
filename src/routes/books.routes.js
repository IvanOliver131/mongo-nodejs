import { Router } from "express";

import BookController from "../controllers/booksController.js";

const booksRoutes = Router();

booksRoutes.get("/books", BookController.listBooks);

export default booksRoutes;
