const express = require('express');
const auth = require('../../middleware/auth');
const route = new express.Router()

const {getAdmin} = require('../../controllers/admin/admin.controller')
const {getQna} = require('../../controllers/questions/question.controller')

route.get('/admin', auth, getAdmin)
route.get('/question', auth, getQna);

module.exports = route