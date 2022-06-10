var Client = require("../models/client");
var Employee = require("../models/employee");

var authController = {};

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var config = require("../authconfig");
const { decode } = require("jsonwebtoken");

authController.role = function (req, res) {
  Employee.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Server Error");
    if (!user) {
      Client.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send("Server Error");
        if (!user) return res.status(404).send("No User Found");
        return res.status(200).send({ role: "user" });
      });
      return;
    }
    return res.status(200).send({ role: "admin" });
  });
};

authController.login = function (req, res) {
  logged = false;
  Employee.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Server Error");
    if (!user) {
      Client.findOne({ email: req.body.email }, function (err, user) {
        if (err) return res.status(500).send("Server Error");
        if (!user) return res.status(404).send("No User Found");
        //check if password valid
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid)
          return res.status(401).send({ auth: false, token: null });
        //if password valid
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400, //24h
        });
        console.log("------------Logged In(Client)------------");
        return res.status(200).send({ auth: true, token: token });
      });
      return;
    }
    //check if password valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    //if password valid
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //24h
    });
    console.log("------------Logged In(Employee)------------");
    logged = true;
    return res.status(200).send({ auth: true, token: token });
  });
};

authController.logout = function (req, res) {
  res.status(200).send({ auth: false, token: null });
};

authController.register = function (req, res) {
  var client = new Client(req.body);
  client.password = bcrypt.hashSync(client.password, 8);
  client.save(function (err, user) {
    if (err)
      return res.status(500).send("There was a problem registering the user");
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //24h
    });
    return res.status(200).send({ auth: true, token: token });
  });
};

authController.profile = function (req, res) {
  Employee.findById(req._id, function (err, user) {
    if (err) return res.status(500).send("Probblem findig user");
    if (!user) {
      Client.findById(req._id, function (err, user) {
        if (err) return res.status(500).send("Probblem findig user");
        if (!user) return res.status(404).send("No User Found");
        return res.status(200).send(user);
      });
    }
    return res.status(200).send(user);
  });
};

authController.verifyToken = function (req, res, next) {
  var token = req.headers["x-acces-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "no token provided." });
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      res
        .status(500)
        .send({ auth: false, message: "failed to autenticate token" });
    req.userId = decoded.id;
    next();
  });
};

authController.verifyRoleAdmin = function (req, res, next) {
  Employee.findById(req.userId, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the blues");
    if (!user) return res.status(401).send("No user found.");
    next();
  });
};

module.exports = authController;
