var Client = require("../models/client");
var Employee = require("../models/employee");

var authController = {};

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var config = require("../authconfig");

authController.login = function (req, res) {
  Employee.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Server Error");
    if (!user) return;
    //check if password valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    //if password valid
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //24h
    });
    return res.status(200).send({ auth: true, token: token });
  });

  Client.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send("Server Error");
    if (!user) return res.status(404).send("No User Found");
    //check if password valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });
    //if password valid
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400, //24h
    });
    return res.status(200).send({ auth: true, token: token });
  });
};

authController.logout = function (req, res) {
  res.status(200).send({ auth: false, token: null });
};

authController.register = function (req, res) {
  var client = new Client(req.body);
  var hashedpassword = bcrypt.hashSync(client.password, 8);
  client.save(
    (err) => {
      if (err) {
        console.log("Erro a gravar");
        next(err);
      } else {
        console.log(client);
        res.json(client);
      }
    },
    function (err, user) {
      if (err)
        return res.status(500).send("There was a problem registering the user");
      //register successfuly
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, //24h
      });
      return res.status(200).send({ auth: true, token: token });
    }
  );
};

authController.profile = function (req, res) {
  Employee.findById(req._id, function (err, user) {
    if (err) return res.status(500).send("Probblem findig user");
    if (!user) return;
    return res.status(200).send(user);
  });

  Client.findById(req._id, function (err, user) {
    if (err) return res.status(500).send("Probblem findig user");
    if (!user) return res.status(404).send("No User Found");
    return res.status(200).send(user);
  });
};

module.exports = authController;