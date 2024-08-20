//File added by Varun Kumar
const express = require('express');
const resourceController = require('../controllers/resourceController');
const router = express.Router();

router.get('/getIotStats', resourceController.getIotStats);
// router.get('/getIotTech', resourceController.getIotTech);
// router.get('/getIotUpdates', resourceController.getIotUpdates);

module.exports = router;
