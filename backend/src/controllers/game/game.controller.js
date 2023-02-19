const Score = require('../../models/score.model')

const getScore = (req, res) => {
    Score.find()
        .then((data) => {
            res.send(data);
        })
}

module.exports = {
    getScore,
}