var notificationController = require("../controllers/notificationController");
var authController = require("../controllers/authController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Notifications Router");
});

router.get(
  "/show",
  /*authController.verifyRoleAdmin,*/ notificationController.showAll
);
router.get(
  "/show/:id",
  /*authController.verifyRoleAdmin,*/ notificationController.show
);
router.post(
  "/create",
  /*authController.verifyRoleAdmin,*/ notificationController.create
);
router.put(
  "/edit/:id",
  /*authController.verifyRoleAdmin,*/ notificationController.edit
);
router.delete(
  "/delete/:id",
  /*authController.verifyRoleAdmin,*/ notificationController.delete
);

//router.post("/search",notificationController.search);

module.exports = router;
