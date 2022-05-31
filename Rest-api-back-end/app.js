var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");



var booksRouter = require('./routes/books');
var clientsRouter = require("./routes/clients");
var employeesRouter = require("./routes/employees");
var transactionsRouter = require("./routes/transactions");



var app = express();

app.use(
  cors(/*{
    origin: "http://localhost:4200/",
  }*/)
);

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://read:read@cluster0.rfsmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log(" connected to DB!"))
  .catch(() => console.log(" error connecting to DB!"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/books", booksRouter);
app.use("/api/v1/clients", clientsRouter);
app.use("/api/v1/employees", employeesRouter);
app.use("/api/v1/transactions", transactionsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log("Listening in http://localhost:3000/api/v1/books");

module.exports = app;
