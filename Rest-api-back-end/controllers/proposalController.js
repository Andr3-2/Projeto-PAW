const Proposal = require("../models/proposal");

var proposalController = {};

//## Read Proposals, Read Proposal, Create Proposal, Update Proposal, Delete Proposal

// mostra todas proposals
proposalController.showAll = function (req, res, next) {
  Proposal.find({}).exec((err, dbProposals) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbProposals);
      res.json(dbProposals);
    }
  });
};

// mostra 1 proposal por id
proposalController.show = function (req, res, next) {
  Proposal.findOne({ _id: req.params.id }).exec((err, dbProposal) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbProposal);
      res.json(dbProposal);
    }
  });
};

// cria 1 proposal
proposalController.create = function (req, res, next) {
  var proposal = new Proposal(req.body);
  console.log(req.body);

  proposal.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(proposal);
      res.json(proposal);
    }
  });
};

// edita 1 proposal
proposalController.edit = function (req, res, next) {
  Proposal.findByIdAndUpdate(req.params.id, req.body, (err, editedProposal) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(editedProposal);
      res.json(editedProposal);
    }
  });
};

// elimina 1 proposal
proposalController.delete = function (req, res, next) {
  Proposal.remove({ _id: req.params.id }).exec((err, deletedProposal) => {
    if (err) {
      next(err);
    } else {
      console.log(deletedProposal);
      res.json(deletedProposal);
    }
  });
};

/*notificationController.search = (req, res, next) =>{
  Proposal.find({ [req.body.searchOpt] : {$regex: req.body.search }},(err,transaction) =>{
    if(err){
      res.redirect("/error")
    }else{
      res.render("transactions/transaction",{transactions: transaction});
    }
  });
};*/

module.exports = proposalController;
