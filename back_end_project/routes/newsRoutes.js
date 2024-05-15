const express = require('express');
const newsController = require('../controllers/newsController');

const router = express.Router();

// create News
router.post('/', newsController.createNews);

// Get a single news
router.get('/:id', newsController.getNews);

// update News
router.put('/:id', newsController.updateNews);

// delete News
router.delete('/:id', newsController.deleteNews);

// Get all news
router.get('/', newsController.getAllNews);

module.exports = router;
