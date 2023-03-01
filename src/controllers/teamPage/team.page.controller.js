const Score = require('../../models/player.model')

const getTeam = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({level: 1}).then((data) => {
        res.render('admin/teamPage', {adminName, playerData : data })
    })
}

module.exports = {
    getTeam,
}