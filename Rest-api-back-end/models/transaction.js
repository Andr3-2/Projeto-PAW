var mongoose = require("mongoose");

var transactionSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  books: [String],
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
