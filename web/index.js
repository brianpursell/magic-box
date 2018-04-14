require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
const path = require('path');
const db = require('./db/index.js');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/home', (req, res) => {
  db.load(data => {
    res.send(data.rows);
  });
});

app.get('/users', (req, res) => {
  db.users(data => {
    res.send(data.rows);
  });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  db.signup(req.body, response => {
    res.send(req.body);
  });
});

app.get('*', function(req, res) {
  res.send('what???', 404);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
