

const express = require('express');
const route = new express.Router();
const auth = require('../../middleware/auth')

const {getLoginPage, postLogin, postLogout} = require('../../controllers/auth/auth.controller');


route.get('/login', getLoginPage)
route.post('/login', postLogin)
route.get('/logout', postLogout)

module.exports = route