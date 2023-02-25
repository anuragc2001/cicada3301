const Score = require('../../models/player.model')

const getScore = (req, res) => {
    Score.find({}).sort({level: 1})
        .then((data) => {
            res.send(data);
        })
}

module.exports = {
    getScore
}