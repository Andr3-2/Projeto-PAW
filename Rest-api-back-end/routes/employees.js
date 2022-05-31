var express = require("express");
var router = express.Router();
var employeeController = require("../controllers/employeeController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Employees Router");
});

router.get("/show", employeeController.showAll);
router.get("/show/:id", employeeController.show);
router.post("/create", employeeController.create);
router.put("/edit/:id", employeeController.edit);
router.delete("/delete/:id", employeeController.delete);

module.exports = router;
