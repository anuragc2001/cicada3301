const Score = require('../../models/player.model')
const Admin = require('../../models/admin.model')
const axios = require('axios')

const getAdmin = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({level: -1, points: -1}).then((data) => {
        axios.get(process.env.GAME_STATUS_URI)
            .then((response) => {
                if(response.data.status === "1"){
                    res.render('admin/adminPanel', {adminName, playerData : data, gameOn: "On" })
                }else{
                    res.render('admin/adminPanel', {adminName, playerData : data, gameOn: "Off" })
                }
            })
    })
}

const startGame = (req, res) => {
    const Anurag = "Anurag";

    Admin.findOne({adminName: Anurag})
        .then((data) => {
            if(data.gameOn){
                res.redirect('/admin')
            }else{
                Admin.findOneAndUpdate({adminName: Anurag}, {gameOn: true})
                    .then(() => {
                        res.redirect('/admin')
                    })
            }
        })
}

const stopGame = (req, res) => {
    const Anurag = "Anurag";

    Admin.findOne({adminName: Anurag})
        .then((data) => {
            if(data.gameOn){
                Admin.findOneAndUpdate({adminName: Anurag}, {gameOn: false})
                    .then(() => {
                        res.redirect('/admin')
                    })
            }else{
                res.redirect('/admin')
            }
        })
}

const getGameStatus = (req, res) => {
    const Anurag = "Anurag";

    Admin.findOne({adminName: Anurag})
        .then((data) => {
            if(data.gameOn){
                res.send({status: "1"})
            }else{
                res.send({status: "0"})
            }
        })
}


module.exports = {
    getAdmin,
    startGame,
    stopGame,
    getGameStatus
}