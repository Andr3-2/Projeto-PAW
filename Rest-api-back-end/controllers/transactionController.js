var Transaction = require("../models/transaction");

var transactionController = {};

//## Read Transaction, Read Transaction, Create Transaction, Update Transaction, Delete Transaction

// mostra todas transactions
transactionController.showAll = function (req, res, next) {
  Transaction.find({}).exec((err, dbTransactions) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbTransactions);
      res.json(dbTransactions);
    }
  });
};

// mostra 1 transaction por id
transactionController.show = function (req, res, next) {
  Transaction.findOne({ _id: req.params.id }).exec((err, dbTransaction) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbTransaction);
      res.json(dbTransaction);
    }
  });
};

// cria 1 transaction
transactionController.create = function (req, res, next) {
  var transaction = new Transaction(req.body);

  transaction.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(transaction);
      res.json(transaction);
    }
  });
};

// edita 1 transaction
transactionController.edit = function (req, res, next) {
  Transaction.findByIdAndUpdate(req.params.id, req.body, (err, editedTransaction) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(editedTransaction);
      res.json(editedTransaction);
    }
  });
};

// elimina 1 transaction
transactionController.delete = function (req, res, next) {
  Transaction.remove({ _id: req.params.id }).exec((err, deletedTransaction) => {
    if (err) {
      next(err);
    } else {
      console.log(deletedTransaction);
      res.json(deletedTransaction);
    }
  });
};

module.exports = transactionController;
