var employeeController = require("../controllers/employeeController");
var express = require("express");
var router = express.Router();

router.get("/", employeeController.showAll);
router.get("/info/:id", employeeController.show);
router.get("/delete/:id", employeeController.delete);
router.get("/create", employeeController.create);
router.get("/update/:id", employeeController.edit);
//router.post("/search",employeeController.search);

module.exports = router;
