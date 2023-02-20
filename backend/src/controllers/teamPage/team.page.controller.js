const Score = require('../../models/player.model')

const getTeam = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({rank: 1}).then((data) => {
        res.render('admin/teamPage', {adminName, playerData : data })
    })
}

module.exports = {
    getTeam,
}