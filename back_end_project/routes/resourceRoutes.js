//File added by Varun Kumar
const express = require('express');
const resourceController = require('../controllers/resourceController');
const setContent = require('../models/resourceData/setContent');
const router = express.Router();
//Adding content to the firebase collections for resource pages
setContent.InitializeResourceCollections();

//Handling sub-endpoints for the resource pages
router.get('/getIotStats', resourceController.getIotStats);
router.get('/getIotSecurity', resourceController.getIotSecurity);
router.get('/getIotTech', resourceController.getIotTech);
router.get('/getIotUpdates', resourceController.getIotUpdates);

module.exports = router;
