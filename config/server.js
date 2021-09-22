const express = require('express')
const morgan = require('morgan')
const path = require('path')

// Initalization

const app = express();

// Settings

app.set('port', process.env.PORT || 4000);

// Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('../src/routes/index.routes'));
app.use(require('../src/routes/requests.routes'));

// Static Files

module.exports = app;