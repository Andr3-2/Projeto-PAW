var mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
  date: String,
  sender: String,
  receiver: String,
  books: [String],
  totalPrice: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
