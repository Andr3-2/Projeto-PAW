var employeeController = require("../controllers/employeeController");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello Visitor - you're in Employees Router");
});

router.get("/show", employeeController.showAll);
router.get("/show/:id", employeeController.show);
router.post("/create", employeeController.create);
router.put("/edit", employeeController.edit);
router.delete("/delete/:id", employeeController.delete);

//router.post("/search",employeeController.search);

module.exports = router;
