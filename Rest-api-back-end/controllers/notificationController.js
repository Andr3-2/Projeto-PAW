const Notification = require("../models/notification");

var notificationController = {};

//## Read Notifications, Read Notification, Create Notification, Update Notification, Delete Notification

// mostra todas notifications
notificationController.showAll = function (req, res, next) {
  Notification.find({}).exec((err, dbNotifications) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbNotifications);
      res.json(dbNotifications);
    }
  });
};

// mostra 1 notification por id
notificationController.show = function (req, res, next) {
  Notification.findOne({ _id: req.params.id }).exec((err, dbNotification) => {
    if (err) {
      console.log("Erro a ler");
      next(err);
    } else {
      console.log(dbNotification);
      res.json(dbNotification);
    }
  });
};

// cria 1 notification
notificationController.create = function (req, res, next) {
  var notification = new Notification(req.body);
  console.log(req.body);

  notification.save((err) => {
    if (err) {
      console.log("Erro a gravar");
      next(err);
    } else {
      console.log(notification);
      res.json(notification);
    }
  });
};

// edita 1 notification
notificationController.edit = function (req, res, next) {
  Notification.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, editedNotification) => {
      if (err) {
        console.log("Erro a gravar");
        next(err);
      } else {
        console.log(editedNotification);
        res.json(editedNotification);
      }
    }
  );
};

// elimina 1 notification
notificationController.delete = function (req, res, next) {
  Notification.remove({ _id: req.params.id }).exec(
    (err, deletedNotification) => {
      if (err) {
        next(err);
      } else {
        console.log(deletedNotification);
        res.json(deletedNotification);
      }
    }
  );
};

/*notificationController.search = (req, res, next) =>{
  transaction.find({ [req.body.searchOpt] : {$regex: req.body.search }},(err,transaction) =>{
    if(err){
      res.redirect("/error")
    }else{
      res.render("transactions/transaction",{transactions: transaction});
    }
  });
};*/

module.exports = notificationController;
