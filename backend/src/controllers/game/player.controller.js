const Score = require('../../models/player.model')

const getScore = (req, res) => {
    Score.find().sort()
        .then((data) => {
            res.send(data);
        })
}

module.exports = {
    getScore,
}