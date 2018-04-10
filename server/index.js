require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const items = require('../database');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', (req, res) => {
  res.send('welcome');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on port ' + port + '!');
});
