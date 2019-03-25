const express = require('express');
const atividadeController = require('../controllers/atividade.controller');

const router = express.Router();

router.get('/', atividadeController.selectAll);
//router.post('/', atividadeController.selectAll);

module.exports = app => app.use('/form', router);