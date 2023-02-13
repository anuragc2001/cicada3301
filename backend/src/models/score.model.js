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
    rank: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin