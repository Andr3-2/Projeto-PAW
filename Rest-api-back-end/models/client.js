var mongoose = require("mongoose");

var clientSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  address: String,
  zipcode: String,
  city: String,
  contact: String,
  NIF: String,
  points: String,
  booksSold: Array,
  booksBought: Array,
  activityState: String,
});


module.exports = mongoose.model("Client", clientSchema);
