const express = require('express');
const auth = require('../../middleware/auth');

const route = new express.Router()

const {getScore} = require('../../controllers/game/player.controller')

route.get('/score', getScore);

module.exports = route