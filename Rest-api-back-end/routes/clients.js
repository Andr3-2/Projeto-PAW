var clientController = require("../controllers/clientController");
var authController = require("../controllers/authController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Clients Router");
});

router.get("/show", clientController.showAll);
router.get("/show/:id", clientController.show);
router.post("/create",clientController.create);
router.put("/edit",clientController.edit);
router.delete("/delete/:id",authController.verifyRoleAdmin, clientController.delete);

//router.post("/search",clientController.search);

module.exports = router;
