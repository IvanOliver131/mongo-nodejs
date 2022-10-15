import books from "../models/Book.js";

class BookController {
  static listBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    const book = new books(req.body);
    try {
      books.create(book);
      res.status(201).send(book.toJSON());
    } catch (err) {
      res
        .status(500)
        .send({ message: `${err.message} - Failed to register book` });
    }
  };

  static listBookById = (req, res) => {
    const { id } = req.params;

    books.findById(id, {}, (err, book) => {
      if (!err) {
        res.send(book.toJSON());
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Failed to find book by ID` });
      }
    });
  };

  static updateBookById = (req, res) => {
    const { id } = req.params;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.send({ message: "Book updated successfull" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Failed to update book` });
      }
    });
  };

  static deleteBookById = (req, res) => {
    const { id } = req.params;

    books.findOneAndDelete(id, (err) => {
      if (!err) {
        res.send({ message: "Book deleted successfull" });
      } else {
        res
          .status(500)
          .send({ message: `${err.message} - Failed to delete book` });
      }
    });
  };
}

export default BookController;
