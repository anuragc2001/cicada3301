const {SHA256} = require('../../../utils/sha.util')

const Admin = require('../../models/admin.model')

const getLoginPage = (req, res) => {
    if(req.session.isLoggedIn === true){
        res.redirect('/admin')
    }else{
        res.render('auth/login')
    }
}

const postLogin = (req, res) => {

    const username = String(req.body.username)
    const password = SHA256(String(req.body.password))

    Admin.findOne({ username: username })
        .then((user) => {

            if (!user) {
                return res.redirect('/login')
            }
            if (user.password === password) {
                req.session.isLoggedIn = true
                req.session.User = user
                req.session.save(err => {
                    if (err) {
                        return console.log(err);
                    }
                    res.redirect('/admin')
                })
            } else {
                res.redirect("/login")
            }
        })
}

const postLogout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/login')
    })
}

module.exports = {
    getLoginPage,
    postLogin,
    postLogout
}