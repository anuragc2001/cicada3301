const express = require('express');

const route = new express.Router()

const {getScore, getUserScore} = require('../../controllers/game/player.controller')
const {getQuestion} = require('../../controllers/questions/question.controller')
const {getPoints} = require('../../controllers/questions/question.controller')
const {getAnswer} = require('../../controllers/questions/question.controller')

const {updateScore} = require('../../controllers/game/player.controller')
const {registerPlayer} = require('../../controllers/game/player.controller')
const {checkPlayerProd} = require('../../controllers/game/player.controller')

route.get('/score', getScore);

route.post('/fetch_question', getQuestion)

route.post('/fetch_score', getPoints)
route.post('/check_answer', getAnswer)

route.post('/fetch_user_score', getUserScore)

route.post('/update_score', updateScore)
route.post('/register_player', registerPlayer)

route.post('/checkPlayerProd', checkPlayerProd)


module.exports = route