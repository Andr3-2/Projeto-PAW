var express = require("express");
var router = express.Router();
var transactionController = require("../controllers/transactionController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Employees Router");
});

router.get("/show", transactionController.showAll);
router.get("/show/:id", transactionController.show);
router.post("/create", transactionController.create);
router.put("/edit", transactionController.edit);
router.delete("/delete/:id", transactionController.delete);

//router.post("/search", transactionController.search);
 
module.exports = router;
