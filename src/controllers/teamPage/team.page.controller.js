const Player = require("../../models/tessarus.model.copy")

const getTeam = (req, res) => {
    const adminName = req.User.adminName
    Player.find({}).sort({level: 1}).then((data) => {
        res.render('admin/teamPage', {adminName, playerData : data })
    })
}

module.exports = {
    getTeam,
}