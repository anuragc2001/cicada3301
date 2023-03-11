const Player = require("../../models/tessarus.model.copy")
const axios = require('axios')

const getTeam = (req, res) => {
    const adminName = req.User.adminName
    Player.find({}).sort({level: 1}).then((data) => {
        axios.get('https://cicada3301.onrender.com/gameStatus')
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