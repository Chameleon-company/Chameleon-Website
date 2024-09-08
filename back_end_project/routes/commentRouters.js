const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/getComments', commentController.getComments);
router.post('/addComment', commentController.addComment);

module.exports = router;
