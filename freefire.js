module.exports = async (req, res) => {
    const { uid } = req.query;

    // Mock response for testing
    const mockData = {
        uid: uid || "Unknown UID",
        name: "Test Player",
        level: 50,
        rank: "Diamond",
        kills: 1200,
        matches: 500
    };

    res.status(200).json(mockData);
};
