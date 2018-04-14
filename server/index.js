require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../react-client/dist')));
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/home', (req, res) => {
  console.log('called');
  db.load((data) => {
    res.send(data);
  });
});

app.get('/votes', (req, res) => {
  db.didVote(10, 1000, (data) => {
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
