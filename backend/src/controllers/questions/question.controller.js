const Qna = require('../../models/qs.model')

const getQna = (req, res) => {
    const adminName = req.User.adminName
    Qna.find()
        .then((data) => {
            res.render('admin/questionAnswer', {adminName, playerData : data })
        })
}

module.exports = {
    getQna,
}