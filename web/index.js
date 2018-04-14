require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const db = require('./db/index.js');

const app = express();

app.use(express.static(`${__dirname}/dist`));

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
  console.log('called');
  db.load(data => {
    console.log('data: ', data);
    res.send(data);
  });
});

app.get('*', (req, res) => {
  res.send('what???', 404);
});

app.get('/votes', (req, res) => {
  db.didVote(10, 1000, data => {
    res.send(data.rows);
  });
});

app.post('/votes', (req, res) => {
  console.log('I am the req.body => ', req.body);
  // db.toggleVote(song, vote, (data) => {
  //   res.send(data);
  // });
  res.send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
