const Score = require("../../models/player.model")
const axios = require('axios')

const getTeam = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({level: 1}).then((data) => {
        axios.get(process.env.GAME_STATUS_URI)
            .then((response) => {
                if(response.data.status === "1"){
                    res.render('admin/teamPage', {adminName, playerData : data, gameOn: "On" })
                }else{
                    res.render('admin/teamPage', {adminName, playerData : data, gameOn: "Off" })
                }
            })
    })
}

module.exports = {
    getTeam,
}