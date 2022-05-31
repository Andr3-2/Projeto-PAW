const { next } = require("console-scanner");
const { default: mongoose } = require("mongoose");
const client = require("../models/client");
var Client = require("../models/client");

var clientController = {};

//## Read Clients, Read Client, Delete Client, Create Client, Update Client

//Read Clients
clientController.showAll = (req, res) => {
  Client.find({}).exec((err, dbClients) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbClients);
      res.json(dbClients);
    }
  });
};

//Read Clients
clientController.show = (req, res) => {
  Client.find({ _id: req.params.id }).exec((err, dbClient) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbClient);
      res.json(dbClient);
    }
  });
};

//Delete Client
clientController.delete = (req, res, next) => {
  var id = req.params.id;
  console.log(`ID: \n ${id}`);
  Client.deleteOne({ _id: id }, function (err, deleteClient) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(deleteClient);
    }
  });
};

//Create Client
clientController.create = (req, res, next) => {
  var client = new Client(req.body);
  console.log(`Client Created: \n ${client}`);
  client.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(client);
    }
  });
};

//Update Client
clientController.edit = (req, res, next) => {
  Client.findByIdAndUpdate(req.body._id, req.body, (err, editedClient) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      res.json(client);
    }
  });
};

/*
clientController.search = (req, res, next) => {
  Client.find(
    { [req.body.searchOpt]: { $regex: req.body.search } },
    (err, client) => {
      if (err) {
        res.redirect("/error");
      } else {
        console.log(client);
        res.render("clients/client", { clients: client });
      }
    }
  );
};*/

module.exports = clientController;
