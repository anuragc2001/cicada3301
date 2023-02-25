const express = require('express');
const auth = require('../../middleware/auth');
const route = new express.Router()

const { getAdmin } = require('../../controllers/admin/admin.controller')
const { getQna } = require('../../controllers/questions/question.controller')
const { getTeam } = require('../../controllers/teamPage/team.page.controller')

route.get('/admin', auth, getAdmin)
route.get('/question', auth, getQna);
route.get('/teamPage', auth, getTeam);

module.exports = route