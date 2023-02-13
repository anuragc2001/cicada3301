const {SHA256} = require('../../../utils/sha.util')

const Admin = require('../../models/admin.model')

const getLoginPage = (req, res) => {
    if(req.session.isLoggedIn === true){
        res.redirect('/')
    }else{
        res.send('logged in')
    }
}

const postLogin = (req, res) => {

    const username = String(req.body.username)
    const password = SHA256(String(req.body.password))

    Admin.findOne({ username: username })
        .then((user) => {

            if (!user) {
                return res.redirect('/')
            }
            if (user.password === password) {
                req.session.isLoggedIn = true
                req.session.User = user
                req.session.save(err => {
                    if (err) {
                        return console.log(err);
                    }
                    res.redirect('/')
                })
            } else {
                res.send("Incorrect password")
            }
        })
}

const postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/')
    })
}

module.exports = {
    getLoginPage,
    postLogin,
    postLogout
}