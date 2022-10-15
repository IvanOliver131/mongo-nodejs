import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "Error connection"));
db.once("open", () => {
  console.log("Connection database maked with success ✨");
});

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "Lord of Rings" },
  { id: 2, title: "The Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Course of Node");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const index = findBook(req.params.id);

  res.json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);

  res.status(201).send("Book created with success!");
});

app.put("/books/:id", (req, res) => {
  const index = findBook(req.params.id);

  books[index].title = req.body.title;

  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = findBook(id);

  books.splice(index, 1);

  res.send(`Book ${id} deleted with success!`);
});

function findBook(id) {
  return books.findIndex((book) => book.id == id);
}

export default app;
