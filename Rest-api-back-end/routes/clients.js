var clientController = require("../controllers/clientController");
var express = require("express");
var router = express.Router();

//router.get("/", clientController.showIndexPage);
router.get('/show',clientController.showAll)
router.get("/info/:id", clientController.moreInfo);
router.get("/delete/:id", clientController.deleteClient);
router.get("/create", clientController.createClientPage);
router.post("/create/submit", clientController.createClient);
router.get("/update/:id", clientController.updateClientPage);
router.post("/update/submit", clientController.updateClient);
//router.post("/search",clientController.search);

module.exports = router;