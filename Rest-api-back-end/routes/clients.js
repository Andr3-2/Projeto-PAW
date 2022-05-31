var express = require("express");
var router = express.Router();
var clientController = require("../controllers/clientController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Clients Router");
});

router.get("/show", clientController.showAll);
router.get("/show/:id", clientController.show);
router.post("/create", clientController.create);
router.put("/edit/:id", clientController.edit);
router.delete("/delete/:id", clientController.delete);

module.exports = router;
