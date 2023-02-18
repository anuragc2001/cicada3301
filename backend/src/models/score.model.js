const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    rank: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score