const express = require('express');
const clienteController = require('../controllers/cliente.controller');

const router = express.Router();

router.get('/', clienteController.selectAll);
router.post('/', clienteController.insertNew);

module.exports = app => app.use('/cliente', router);