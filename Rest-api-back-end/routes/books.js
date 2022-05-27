var express = require("express");
var router = express.Router();
var bookController = require("../controllers/bookController");


/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Books Router");
});

router.get("/show", bookController.showAll);
router.get("/show/:id", bookController.show);
router.post("/create", bookController.create);
router.put("/edit/:id", bookController.edit);
router.delete("/delete/:id", bookController.delete);
  
module.exports = router;
