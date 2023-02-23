const Score = require('../../models/player.model')
const Qna = require('../../models/qs.model')

const getScore = (req, res) => {
    Score.find({}).sort({level: 1})
        .then((data) => {
            res.send(data);
        })
}

const getQuestion = (req, res) => {
    Qna.findOne({level: req.body.level})
        .then((data) => {
            // console.log(data);
            res.send({"question": data.question})
        })
}

const getAnswer = (req, res) => {
    Qna.findOne({level: req.body.level})
        .then((data) => {
            if(data.answer.toLocaleLowerCase() === req.body.answer.toLocaleLowerCase()){
                res.send({"status": "correct"})
            }else{
                res.send({"status": "incorrect"})
            }
        })
}



module.exports = {
    getScore,
    getQuestion,
    getAnswer
}