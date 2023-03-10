const express = require('express');
const auth = require('../../middleware/auth');
const route = new express.Router()

const { getAdmin } = require('../../controllers/admin/admin.controller')
const { getQna } = require('../../controllers/questions/question.controller')
const { getTeam } = require('../../controllers/teamPage/team.page.controller')
const { startGame } = require('../../controllers/admin/admin.controller')
const { stopGame } = require('../../controllers/admin/admin.controller')
const { getGameStatus } = require('../../controllers/admin/admin.controller')

route.get('/admin', auth, getAdmin)
route.get('/question', auth, getQna);
route.get('/teamPage', auth, getTeam);

route.post('/startGame', auth, startGame)
route.post('/stopGame', auth, stopGame)

route.get('/gameStatus', getGameStatus)


module.exports = route