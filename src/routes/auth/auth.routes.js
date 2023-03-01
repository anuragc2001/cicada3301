

const express = require('express');
const route = new express.Router();
const auth = require('../../middleware/auth')

const {getLoginPage, postLogin, postLogout} = require('../../controllers/auth/auth.controller');
const Score = require('../../models/player.model');


route.get('/login', getLoginPage)
route.post('/login', postLogin)
route.get('/logout', postLogout)

route.get('/delete', auth, (req, res) => {
    Score.deleteMany({})
        .then(() => {
            res.send('deleted')
        })
})


module.exports = route