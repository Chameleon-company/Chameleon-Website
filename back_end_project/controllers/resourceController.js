//File added by Varun Kumar
const resourceService = require('../services/resourceService');
exports.getIotStats = async (req, res) => {
    try {
        const resources = await resourceService.getIotStats();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};