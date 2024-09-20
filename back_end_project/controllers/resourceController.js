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
exports.getIotSecurity = async (req, res) => {
    try {
        const resources = await resourceService.getIotSecurity();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getIotTech = async (req, res) => {
    try {
        const resources = await resourceService.getIotTech();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getIotUpdates = async (req, res) => {
    try {
        const resources = await resourceService.getIotUpdates();
        res.status(200).json(resources);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
