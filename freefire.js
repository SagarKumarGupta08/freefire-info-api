const axios = require('axios');

module.exports = async (req, res) => {
    const { uid } = req.query;

    try {
        const response = await axios.get(`https://example.com/freefire/api?uid=${uid}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
