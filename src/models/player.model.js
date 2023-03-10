const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true
    },
    leaderName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    collegeName: {
        type: String,
        required: true
    },
    teamMembers: [
        
        {
            mem1: {
                type: String,
            },
            mem2: {
                type: String,
            }
        },
    ],
    points: {
        type: Number,
        default: 0,
        required: true
    },
    level: {
        type: Number,
        default: 0,
        required: true
    }
})

const Score = mongoose.model('Score', scoreSchema)

module.exports = Score