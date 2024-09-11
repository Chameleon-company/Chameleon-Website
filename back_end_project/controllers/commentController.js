const commentService = require('../services/commentService');

exports.getComments = async (req, res) => {
    try {
        const comments = await commentService.getComments();
        res.status(201).json({ message: 'Comment retrieved successfully', comments });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addComment = async (req, res) => {
    try {
        const newComment = await commentService.addComment(req.body);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};