var clientController = require("../controllers/clientController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Clients Router");
});

router.get("/show", clientController.showAll);
router.get("/show/:id", clientController.show);
router.get("/create", clientController.create);
router.get("/edit", clientController.edit);
router.get("/delete/:id", clientController.delete);

//router.post("/search",clientController.search);

module.exports = router;
