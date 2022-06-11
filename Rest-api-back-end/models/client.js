var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: String,
  zipcode: String,
  city: String,
  contact: Number,
  NIF: { type: Number },
  points: { type: Number, default: 0 },
  booksSold: [Object],
  booksBought: [Object],
  activityState: { type: String, default: "ACTIVE" },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Client", clientSchema);
