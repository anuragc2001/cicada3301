const Score = require('../../models/player.model');
const Player = require('../../models/tessarus.model.copy');

const getScore = (req, res) => {
    Score.find({}).sort({level: -1, points: -1})
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
    const {teamName, mail, phone, collegeName, leaderName, mem1, mem2} = req.body;
    const player = new Score(
        {
            teamName: teamName, 
            leaderName: leaderName,
            mail: mail, 
            phone: phone, 
            collegeName: collegeName,
            teamMembers: [
                {
                    mem1: mem1,
                    mem2: mem2       
                }]
        });
    player.save()
        .then(() => {
        res.send({status: "success"}
    )});
}

const checkPlayer = (req, res) => {
    Player.findOne({mail: req.body.mail})
        .then((data) => {
            if(!data){
                res.status(404).send({status: "not found"})
            }else{
                Score.findOne({mail: req.body.mail})
                    .then((data) => {
                        if(!data){
                            res.status(401).send({status: "not registered"})
                        }else{
                            res.status(200).send({status: "registered"})
                        }
                    })
            }
        })
}


module.exports = {
    getScore,
    updateScore,
    registerPlayer,
    checkPlayer
}