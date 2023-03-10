const express = require('express');

const route = new express.Router()

const {getScore} = require('../../controllers/game/player.controller')
const {getQuestion} = require('../../controllers/questions/question.controller')
const {getAnswer} = require('../../controllers/questions/question.controller')

const {updateScore} = require('../../controllers/game/player.controller')
const {registerPlayer} = require('../../controllers/game/player.controller')
const {checkPlayer} = require('../../controllers/game/player.controller')

route.get('/score', getScore);

route.post('/fetch_question', getQuestion)
route.post('/check_answer', getAnswer)

route.post('/update_score', updateScore)
route.post('/register_player', registerPlayer)

route.post('/checkPlayer', checkPlayer)


module.exports = route