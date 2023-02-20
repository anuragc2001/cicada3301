const Qna = require('../../models/qs.model')

const getQna = (req, res) => {
    const adminName = req.User.adminName
    Qna.find({}).sort({level: 1})
        .then((data) => {
            res.render('admin/questionAnswer', {adminName, playerData : data })
        })
}

module.exports = {
    getQna,
}