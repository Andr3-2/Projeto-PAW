var express = require("express");
var router = express.Router();
var transactionController = require("../controllers/transactionController");

router.get("/", transactionController.showAll);
router.get("/show", transactionController.showAll);
router.get("/show/:id", transactionController.show);
router.get("/info/:id", transactionController.show);
router.post("/create", transactionController.create);
router.get("/edit/:id", transactionController.edit);
//router.post("/search", transactionController.search);
 
module.exports = router;
