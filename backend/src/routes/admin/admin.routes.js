const express = require('express');
const auth = require('../../middleware/auth');
const route = new express.Router()

const {getAdmin} = require('../../controllers/admin/admin.controller')

route.get('/admin', auth, getAdmin)

module.exports = route