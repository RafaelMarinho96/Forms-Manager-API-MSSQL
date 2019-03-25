const express = require('express');
const formController = require('../controllers/form.controller');

const router = express.Router();

router.get('/', formController.selectAllForms);

module.exports = app => app.use('/form', router);