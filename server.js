const express = require('express');
const router = require('./routes/index')
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', router)

app.listen(PORT);

module.exports = app;
