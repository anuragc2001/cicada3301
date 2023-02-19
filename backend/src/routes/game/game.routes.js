const express = require('express');
const auth = require('../../middleware/auth');

const route = new express.Router()

const {getScore} = require('../../controllers/game/game.controller')

route.get('/score', getScore);

module.exports = route