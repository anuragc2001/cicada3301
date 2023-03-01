const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
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
        default: '0',
        required: true
    },
    level: {
        type: String,
        default: '0',
        required: true
    }
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score