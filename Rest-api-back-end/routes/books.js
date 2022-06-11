var express = require("express");
const authController = require("../controllers/authController");
var router = express.Router();
var bookController = require("../controllers/bookController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Books Router");
});

router.get("/show", bookController.showAll);
router.get("/show/:id", bookController.show);
router.post("/create", /*authController.verifyRoleAdmin,*/ bookController.create);
router.put("/edit/:id", /*authController.verifyRoleAdmin,*/ bookController.edit);
router.delete(
  "/delete/:id",
  /*authController.verifyRoleAdmin,*/
  bookController.delete
);

//router.post("/search",bookController.search);

module.exports = router;
