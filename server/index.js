require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, res) => {
  req.redirect('/home');
});

app.get('/home', function(req, res) {
  console.log('called');
  db.load(function callback(data) {res.send(data)});
});

app.get('*', function(req, res){
  res.send('what???', 404);
});



var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
