var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  address: String,
  zipcode: String,
  city:String,
  contact: Number,
  NIF: { type: Number, required: true },
  salary: Number,
  activityState: { type: String, default: "Active" },
});

module.exports = mongoose.model("Employee", employeeSchema);
