const { render } = require("ejs");
const { default: mongoose } = require("mongoose");
var Transaction = require("../models/transaction");
var Client = require("../models/client");
var Book = require("../models/book");
const transaction = require("../models/transaction");
var transactionController = {};

transactionController.showAll = (req, res, next) => {
  transaction.find({}).exec(function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(results)
    }
  });
};

transactionController.show = (req, res, next) => {
  transaction.findOne({ _id: req.params.id }).exec(function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(results)
    }
  });
};

//Create Transaction
transactionController.create = (req, res, next) => {
  var transaction = new Transaction(req.body);
  console.log(`Transaction Created: \n ${transaction}`);
  transaction.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      next();
    }
  });
};

transactionController.delete = (req, res, next) => {
  transaction.findByIdAndDelete(
    { _id: req.params.id },
    function (err, results) {
      if (err) {
        console.log("Erro a gravar");
        res.redirect("/error");
      } else {
        res.json(results)
      }
    }
  );
};

//Update Transaction
transactionController.edit = (req, res, next) => {
  transaction.findByIdAndUpdate(req.body._id, req.body, (err, editedTransaction) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(editedTransaction);
    }
  });
};


/*transactionController.search = (req, res, next) =>{
  transaction.find({ [req.body.searchOpt] : {$regex: req.body.search }},(err,transaction) =>{
    if(err){
      res.redirect("/error")
    }else{
      res.render("transactions/transaction",{transactions: transaction});
    }
  });
};*/

module.exports = transactionController;
