var mongoose = require("mongoose");
const Client = require("../models/client");
const Employee = require("../models/employee");
const Book = require("../models/book");


var transactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  sender: { type: Object, required: true },
  receiver: { type: Object, required: true },
  books: [Object],
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
