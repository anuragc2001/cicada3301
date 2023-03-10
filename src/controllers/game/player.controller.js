const Score = require('../../models/player.model');
const Player = require('../../models/tessarus.model.copy');

const getScore = (req, res) => {
    Score.find({}).sort({level: 1})
        .then((data) => {
            res.send(data);
        })
}

const updateScore = (req, res) => {
    const {username, points, level} = req.body;
    Score.findOneAndUpdate({teamName: username}, {points: points, level: level})
        .then((data) => {
            res.send('updated');
        })
}

const registerPlayer = (req, res) => {
    const {username, mail, phone, collegeName, leaderName} = req.body;
    const player = new Score(
        {
            teamName: username, 
            leaderName: leaderName,
            mail: mail, 
            phone: phone, 
            collegeName: collegeName,
            teamMembers: [
                {
                    mem1: req.body.mem1,
                    mem2: req.body.mem2       
                }]
        });
    player.save()
        .then(() => {
        res.send({status: "success"}
    )});
}

const checkAvialability = (req, res) => {
    Player.findOne({mail: req.body.mail})
        .then((data) => {
            if(!data){
                res.send({status: "0"})
            }else{
                res.send({status: "1"})
            }
        })
}


module.exports = {
    getScore,
    updateScore,
    registerPlayer,
    checkAvialability
}