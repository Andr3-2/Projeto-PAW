var express = require("express");
var router = express.Router();
var authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/role", authController.verifyRoleAdmin);
router.post("/register", authController.register);
router.get("/logout", authController.logout);
router.get("/profile", authController.profile);

module.exports = router;
