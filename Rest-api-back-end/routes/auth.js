var express = require('express');
var router = express.Router();
var authController = require('../controllers/authController');
var clientController = require('../controllers/clientController');

router.post('/login',authController.login);
router.post('/register',authController.register);
router.get('/logout',authController.logout);
router.get('/profile',authController.profile);

router.get('/all-users',authController.verifyToken,authController.verifyRoleAdmin,clientController.show);

module.exports = router;