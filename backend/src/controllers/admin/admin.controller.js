const Score = require('../../models/player.model')

const getAdmin = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({rank: 1}).then((data) => {
        res.render('admin/adminPanel', {adminName, playerData : data })
    })
}

module.exports = {
    getAdmin,
}