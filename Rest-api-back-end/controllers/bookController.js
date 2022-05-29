const { default: mongoose } = require("mongoose");
var Book = require("../models/book");

var bookController = {};

//## Read Books, Read Book, Delete Book, Create Book, Update Book

// mostra todos books
bookController.showAll = function (req, res, next) {
  Book.find({}).exec((err, dbBooks) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbBooks);
      res.json(dbBooks);
    }
  });
};

// mostra 1 book por id
bookController.show = function (req, res, next) {
  Book.findOne({ _id: req.params.id }).exec((err, dbBook) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      res.json(dbBook);
    }
  });
};

// cria 1 book como resposta a um post de um form
bookController.create = function (req, res, next) {
  var book = new Book(req.body);

  book.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      res.json(book);
    }
  });
};

// edita 1 book como resposta a um post de um form editar
bookController.edit = function (req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, editedBook) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      res.json(editedBook);
    }
  });
};

// elimina 1 book
bookController.delete = function (req, res, next) {
  Book.remove({ _id: req.params.id }).exec((err, deletedBook) => {
    if (err) {
      next(err);
    } else {
      res.json(deletedBook);
    }
  });
};

module.exports = bookController;