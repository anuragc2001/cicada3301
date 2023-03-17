const Qna = require('../../models/qs.model')
const axios = require('axios')

const getQna = (req, res) => {
    const adminName = req.User.adminName
    Qna.find({}).sort({level: 1})
        .then((data) => {
            axios.get(process.env.GAME_STATUS_URI)
                .then((response) => {
                    if(response.data.status === "1"){
                        res.render('admin/questionAnswer', {adminName, playerData : data, gameOn: "On" })
                    }else{
                        res.render('admin/questionAnswer', {adminName, playerData : data, gameOn: "Off" })
                    }
                })
        })
}

const getQuestion = (req, res) => {
    Qna.findOne({level: req.body.level})
        .then((data) => {
            res.send({"question": data.question})
        })
}
const getPoints = (req, res) => {
    Qna.findOne({level: req.body.level})
        .then((data) => {
            res.send({"point": data.points})
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
    getQna,
    getQuestion,
    getAnswer,
    getPoints
}