const Score = require('../../models/player.model')

const getScore = (req, res) => {
    Score.find({}).sort({level: 1})
        .then((data) => {
            res.send(data);
        })
}

const updateScore = (req, res) => {
    const {username, mail, points, level} = req.body;
    Score.findOneAndUpdate({username: username}, {mail: mail, points: points, level: level})
        .then((data) => {
            res.send(data);
        })
}


module.exports = {
    getScore,
    updateScore
}