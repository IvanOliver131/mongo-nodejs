import express, { Router } from "express";

import booksRoutes from "./books.routes.js";

const router = Router();

// Aqui colocamos todas as rotas que iremos utilizar
router.use(express.json(), booksRoutes);

export default router;
