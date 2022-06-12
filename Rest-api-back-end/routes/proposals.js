var proposalController = require("../controllers/proposalController");
var authController = require("../controllers/authController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Notifications Router");
});

router.get(
  "/show",
  /*authController.verifyRoleAdmin,*/ proposalController.showAll
);
router.get(
  "/show/:id",
  /*authController.verifyRoleAdmin,*/ proposalController.show
);
router.get(
  "/showFromClient/:id",
  /*authController.verifyRoleAdmin,*/ proposalController.showFromClient
);
router.post(
  "/create",
  /*authController.verifyRoleAdmin,*/ proposalController.create
);
router.put(
  "/edit/:id",
  /*authController.verifyRoleAdmin,*/ proposalController.edit
);
router.delete(
  "/delete/:id",
  /*authController.verifyRoleAdmin,*/ proposalController.delete
);

//router.post("/search",notificationController.search);

module.exports = router;
