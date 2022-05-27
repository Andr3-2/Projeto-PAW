var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  category: String,
  title: String,
  author: String,
  year: String,
  description: String,
  ISBN: String,
  new_price: String,
  used_price: String,
  new_quantity: String,
  used_quantity: String,
});

module.exports = mongoose.model("Book", bookSchema);
