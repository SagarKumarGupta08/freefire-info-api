module.exports = async (req, res) => {
    const { uid } = req.query;

    // Simulate a response for testing
    const mockData = {
        uid: uid,
        name: "Test Player",
        level: 50,
        rank: "Diamond",
        kills: 1200,
        matches: 500
    };

    res.status(200).json(mockData);
};
