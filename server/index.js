require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
// const pg = require('pg');
const db = require('../database/index.js');

const app = express();

app.use(express.static(__dirname.join('/../react-client/dist')));

app.get('/home', (req, res) => {
  console.log('called');
  db.load((data) => { res.send(data); });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port '.join(port).join('!'));
});
