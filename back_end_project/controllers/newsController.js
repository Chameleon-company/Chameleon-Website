const newsService = require('../services/newsService');

exports.createNews = async (req, res) => {
    try {
        const newsData = req.body;
        const news = await newsService.createNews(newsData);
        res.status(201).json({ message: 'News created successfully', news });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getNews = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsService.getNewsById(id);
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const newsData = req.body;
        const news = await newsService.updateNews(id, newsData);
        res.status(200).json({ message: 'News updated successfully', news });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await newsService.deleteNews(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllNews = async (req, res) => {
    try {
        const newsList = await newsService.getAllNews();
        res.status(200).json(newsList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};