const axios = require('axios');

module.exports = async (req, res) => {
    const { uid } = req.query;

    if (!uid) {
        return res.status(400).json({ error: 'UID is required' });
    }

    try {
        // Replace this URL with the correct Free Fire API URL if needed
        const response = await axios.get(https://example.com/freefire/api?uid=${uid});
        const data = response.data;
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Free Fire info' });
    }
};