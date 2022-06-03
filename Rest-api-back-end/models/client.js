var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: String,
  zipcode: String,
  city: String,
  contact: Number,
  NIF: { type: Number, required: true },
  points: { type: Number, default: 0 },
  booksSold: Array,
  booksBought: Array,
  activityState: { type: String, required: true, default: "ACTIVE" },
  password: String,
});

module.exports = mongoose.model("Client", clientSchema);
