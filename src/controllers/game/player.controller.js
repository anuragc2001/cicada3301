const Score = require('../../models/player.model');
const Player = require('../../models/register.dev.model');

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

const registerPlayer = (req, res) => {
    const {username, mail} = req.body;
    const player = new Score({username: username, mail: mail});
    player.save()
        .then(() => {
        res.send({status: "success"}
    )});
}

const checkAvialability = (req, res) => {
    Player.findOne({username: req.body.username})
        .then((data) => {
            if(data){
                res.send({status: "0"})
            }else{
                res.send({status: "1"})
            }
        })
}


module.exports = {
    getScore,
    updateScore
}