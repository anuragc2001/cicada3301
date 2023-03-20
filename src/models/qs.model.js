const mongoose = require('mongoose')

const qnaSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    point: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

const Qna = mongoose.model('Prod-qna', qnaSchema)

module.exports = Qna