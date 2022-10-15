import "dotenv/config";
import cors from "cors";
import express from "express";
import db from "./config/dbConnect.js";
import router from "./routes/index.js";

db.on("error", console.log.bind(console, "Error connection"));
db.once("open", () => {
  console.log("Database connection successful ✨");
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

// app.get("/", (req, res) => {
//   res.status(200).send("Course of Node");
// });

// app.get("/books/:id", (req, res) => {
//   const index = findBook(req.params.id);

//   res.json(books[index]);
// });

// app.post("/books", (req, res) => {
//   books.push(req.body);

//   res.status(201).send("Book created with success!");
// });

// app.put("/books/:id", (req, res) => {
//   const index = findBook(req.params.id);

//   books[index].title = req.body.title;

//   res.json(books);
// });

// app.delete("/books/:id", (req, res) => {
//   const { id } = req.params;
//   const index = findBook(id);

//   books.splice(index, 1);

//   res.send(`Book ${id} deleted with success!`);
// });

// function findBook(id) {
//   return books.findIndex((book) => book.id == id);
// }

export default app;
