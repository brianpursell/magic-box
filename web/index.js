require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const db = require('./db/index.js');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.get('/home', (req, res) => {
  db.load((data) => {
    res.send(data.rows);
  });
});

app.get('/users', (req, res) => {
  db.users((data) => {
    res.send(data.rows);
  });
});

app.post('/signup', (req, res) => {
  console.log(req.body);
  db.signup(req.body, (response) => {
    res.send(req.body);
  });
});

app.get(['/', '/home', '/prompts', '/sprites', '/worlds'], (req, res) => {
  // res.send('what???', 404);
  db.load((data) => {
    res.send(data.rows);
  });
});

// app.get('*', (req, res) => {
//   res.send('what???', 404);
// });

app.get('/music', (req, res) => {
  // res.send('what???', 404);
  db.load((data) => {
    res.send(data.rows);
  });
});

//= ====GOTTA FIX USER INFO BELOW WHEN USERS ARE IMPLEMENTED=======
app.get('/votes', (req, res) => {
  const currentUserId = req.query.currentUserId;
  const clickedSongId = req.query.clickedSongId;

  db.didVote(currentUserId, clickedSongId, (data) => {
    res.send(data.rows);
  });
});

app.post('/votes', (req, res) => {
  db.toggleVote(req.body, (response) => {
    console.log('Vote Toggled and heres the response data => ', response);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
