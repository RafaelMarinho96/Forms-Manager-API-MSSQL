const express = require('express');
const bodyparser =  require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());

require('./app/routes/index')(app);

module.exports = app;