const express = require('express');
const router = express.Router();
var helloController = require('../controllers/appController');

router.get('/index', helloController.getIndex);
router.post('/index', helloController.postIndex);

router.post('/remove', helloController.remove);

module.exports = router;
