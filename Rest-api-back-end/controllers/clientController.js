const { next } = require("console-scanner");
const { default: mongoose } = require("mongoose");
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


//Read Client
clientController.moreInfo = (req, res) => {
  var id = req.params.id;
  console.log(`ID: \n ${id}`);
  Client.findOne({ _id: id }, function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      console.log(results);
      res.render("clients/moreinfo", { client_: results });
    }
  });
};


//Delete Client
clientController.deleteClient = (req, res, next) => {
  var id = req.params.id;
  console.log(`ID: \n ${id}`);
  Client.deleteOne({ _id: id }, function (err, results) {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      next();
    }
  });
};


//Create Client Page
clientController.createClientPage = (req, res) => {
  res.render("clients/client_create");
};
//Create Client
clientController.createClient = (req, res, next) => {
  var client = new Client(req.body);
  console.log(`Client Created: \n ${client}`);
  client.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      next();
    }
  });
};


//Update Client Page
clientController.updateClientPage = (req, res) => {
    var id = req.params.id;
    console.log(`ID: \n ${id}`);
    Client.findOne({ _id: id }, function (err, results) {
      if (err) {
        console.log("Erro a gravar");
        res.redirect("/error");
      } else {
        console.log(results);
        var one = new Client(results.Client);
        res.render("clients/client_update", { _client: results });
      }
    });
  };
//Update Client
clientController.updateClient = (req, res, next) => {
  Client.findByIdAndUpdate(req.body._id, req.body, (err, editedClient) => {
    if (err) {
      console.log("Erro a gravar");
      res.redirect("/error");
    } else {
      next();
    }
  });
};

clientController.search = (req, res, next) =>{
  Client.find({[req.body.searchOpt]: {$regex: req.body.search }},(err,client) =>{
    if(err){
      res.redirect("/error")
    }else{
      console.log(client);
      res.render("clients/client",{clients: client});
    }
  });
};


module.exports = clientController;
