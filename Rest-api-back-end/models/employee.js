var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  address: String,
  zipcode: String,
  city: String,
  contact: String,
  NIF: String,
  salary: Number,
  activityState: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
