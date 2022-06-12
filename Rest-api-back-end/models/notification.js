var mongoose = require("mongoose");

var notificationSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: { type: String },
  mensage: { type: String },
  book: { type: Object }
});

module.exports = mongoose.model("Notification", notificationSchema);
