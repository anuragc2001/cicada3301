const Score = require('../../models/player.model')
const Admin = require('../../models/admin.model')

const getAdmin = (req, res) => {
    const adminName = req.User.adminName
    Score.find({}).sort({level: -1, points: -1}).then((data) => {
        res.render('admin/adminPanel', {adminName, playerData : data })
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