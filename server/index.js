require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/home', function(req, res) {
  console.log('called');
  db.load(function callback(data) {res.send(data)});
});



var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
