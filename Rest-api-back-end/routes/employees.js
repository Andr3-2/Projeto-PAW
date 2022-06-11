var employeeController = require("../controllers/employeeController");
var authController = require("../controllers/authController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Employees Router");
});

router.get("/show",/*authController.verifyRoleAdmin,*/ employeeController.showAll);
router.get("/show/:id",/*authController.verifyRoleAdmin,*/ employeeController.show);
router.post("/create",/*authController.verifyRoleAdmin,*/ employeeController.create);
router.put("/edit/:id",/*authController.verifyRoleAdmin,*/ employeeController.edit);
router.delete("/delete/:id",/*authController.verifyRoleAdmin,*/ employeeController.delete);

//router.post("/search",employeeController.search);

module.exports = router;
