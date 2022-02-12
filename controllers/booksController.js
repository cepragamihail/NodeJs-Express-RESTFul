function booksController(Book) {
  function post(req, res) {
    const book = new Book(req.body);
    book.save();
    return res.status(201).json(book);
  }
  function get(req, res) {
    Book.find((err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  }
  return { post, get };
}

module.exports = booksController;
