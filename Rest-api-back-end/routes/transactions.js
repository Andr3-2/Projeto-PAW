var express = require("express");
var router = express.Router();
var transactionController = require("../controllers/transactionController");
var authController = require("../controllers/authController");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Employees Router");
});

router.get(
  "/show",
  authController.verifyRoleAdmin,
  transactionController.showAll
);
router.get(
  "/show/:id",
  authController.verifyRoleAdmin,
  transactionController.show
);
router.post(
  "/create",
  authController.verifyRoleAdmin,
  transactionController.create
);
router.put("/edit", authController.verifyRoleAdmin, transactionController.edit);
router.delete(
  "/delete/:id",
  authController.verifyRoleAdmin,
  transactionController.delete
);

//router.post("/search", transactionController.search);

module.exports = router;
