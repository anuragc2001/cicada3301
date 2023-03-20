const Score = require('../../models/player.model');
const Player = require('../../models/tessarus.model.copy');

const axios = require('axios');

const getScore = (req, res) => {
    Score.find({}).sort({level: -1, points: -1}).limit(10)
        .then((data) => {
            res.send(data);
        })
}

const updateScore = (req, res) => {
    const {username, points, level} = req.body;
    Score.findOneAndUpdate({mail: username}, {points: points, level: level})
        .then((data) => {
            if(!data){
                res.status(404).send({status: "not found"})
            }else{
                res.status(200).send({status: "updated"})
            }
            
        })
}

const registerPlayer = (req, res) => {
    const {teamName, mail, espektroID, phone, collegeName, leaderName, mem1, mem2} = req.body;
    const player = new Score(
        {
            teamName: teamName, 
            leaderName: leaderName,
            mail: mail, 
            phone: phone, 
            collegeName: collegeName,
            espektroID: espektroID,
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
                            res.status(201).send({status: "not registered"})
                        }else{
                            res.status(200).send({status: "registered"})
                        }
                    })
            }
        })
}

const checkPlayerProd = async (req, res) => {
    try{
        const data = await axios.post(process.env.TESSARUS_URL,{
            "eventId": process.env.EVENT_ID,
            "espektroId": req.body.espektroID,
            "password": req.body.password
        })
        
        const mail = await data.data.user.email;
        // console.log(mail);
       
        Score.findOne({espektroID: espektroID, mail: mail})
            .then((data) => {
                if(!data){
                    res.status(201).send({status: "not registered"})
                }else{
                    res.status(200).send({status: "registered"})
                }
            })
    }catch{
        res.status(404).send({status: "not found"})
    }
}

const getUserScore = (req, res) => {
    const mail = req.body.mail;

    Score.findOne({mail: mail})
        .then((data) => {
            res.send({points: data.points, level: data.level});
        })
}



module.exports = {
    getScore,
    updateScore,
    registerPlayer,
    checkPlayer,
    checkPlayerProd,
    getUserScore
}