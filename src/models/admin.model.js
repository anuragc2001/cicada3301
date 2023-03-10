const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    adminName: {
        type: String,
        required: true
    },
    gameOn: {
        type: Boolean,
        default: false
    }
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin