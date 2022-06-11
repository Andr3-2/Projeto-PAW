var mongoose = require("mongoose");

var proposalSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  sender: { type: Object, required: true },
  title: { type: String },
  mensage: { type: String },
  books: [Object]
});

module.exports = mongoose.model("Proposal", proposalSchema);
