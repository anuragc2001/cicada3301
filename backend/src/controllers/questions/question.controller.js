const Qna = require('../../models/qs.model')

const getQna = (req, res) => {
    Qna.find()
        .then((data) => {
            res.send('fetched')
        })
}

module.exports = {
    getQna,
}