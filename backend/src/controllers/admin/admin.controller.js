const Score = require('../../models/player.model')

const getAdmin = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({level: -1, points: -1}).then((data) => {
        res.render('admin/adminPanel', {adminName, playerData : data })
    })
}

module.exports = {
    getAdmin,
}