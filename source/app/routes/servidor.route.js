const express = require('express');
const servidorController = require('../controllers/servidor.controller');

const router = express.Router();

router.get('/', servidorController.selectAll);
router.post('/', servidorController.insertNew);

module.exports = app => app.use('/servidor', router);