const Qna = require('../../models/qs.model')

const getQna = (req, res) => {
    const adminName = req.User.adminName
    Qna.find({}).sort({level: 1})
        .then((data) => {
            res.render('admin/questionAnswer', {adminName, playerData : data })
        })
}

const getQuestion = (req, res) => {
    Qna.findOne({level: req.body.level})
        .then((data) => {
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
    getQna,
    getQuestion,
    getAnswer
}