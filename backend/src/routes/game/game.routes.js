const express = require('express');
const auth = require('../../middleware/auth');

const route = new express.Router()

const {getScore} = require('../../controllers/game/player.controller')
const {getQuestion} = require('../../controllers/questions/question.controller')
const {getAnswer} = require('../../controllers/questions/question.controller')


route.get('/score', getScore);

route.post('/fetch_question', getQuestion)
route.post('/check_answer', getAnswer)


module.exports = route