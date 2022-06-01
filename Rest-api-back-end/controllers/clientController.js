const Client = require("../models/client");

var clientController = {};

//## Read Clients, Read Client, Create Client, Update Client, Delete Client

// mostra todos clients
clientController.showAll = function (req, res, next) {
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

// mostra 1 client por id
clientController.show = function (req, res, next) {
  Client.findOne({ _id: req.params.id }).exec((err, dbClient) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbClient);
      res.json(dbClient);
    }
  });
};

// cria 1 client
clientController.create = function (req, res, next) {
  var client = new Client(req.body);

  client.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(client);
      res.json(client);
    }
  });
};

// edita 1 client
clientController.edit = function (req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, (err, editedClient) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(editedClient);
      res.json(editedClient);
    }
  });
};

// elimina 1 client
clientController.delete = function (req, res, next) {
  Client.remove({ _id: req.params.id }).exec((err, deletedClient) => {
    if (err) {
      next(err);
    } else {
      console.log(deletedClient);
      res.json(deletedClient);
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
