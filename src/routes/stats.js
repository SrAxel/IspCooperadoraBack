const express = require('express');
const RUTAS_STATS = express.Router();
const { getStats }  = require('../controllers/stats')

RUTAS_STATS
.route('/')
.get(getStats)

module.exports = RUTAS_STATS;