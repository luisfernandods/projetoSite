var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./client'));
app.use(bodyParser.json());

consign({ cwd: 'server' })
    .include('models/daos')
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;


