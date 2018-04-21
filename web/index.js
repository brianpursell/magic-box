require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const path = require('path');
const db = require('./db/index.js');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const AWS = require('./config/aws');
const fileUpload = require('express-fileupload');

require('./config/passport')(passport);

const app = express();

app.use(fileUpload());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(`${__dirname}/dist`));

app.post('/upload', (req, res) => {
  let file = req.files.song;
  AWS.upload(file, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      let nameParts = file.name.split('.');
      nameParts.pop();
      let filename = nameParts.join('.');
      console.log(filename);
      db.addSong(req.body, filename, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log('added song to db');
        }
      });
    }
    res.end();
  });
});

app.get('/logged-in', (req, res) => {
  if (req.user) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get('/alt-get-songs', (req, res) => {
  db.altGetSongs(data => {
    res.send(data.rows);
  });
});

app.get('/users', (req, res) => {
  db.users(data => {
    res.send(data.rows);
  });
});

app.get('/sprites', (req, res) => {
  console.log('got to home');
  db.loadSprites(data => {
    res.send(data.rows);
  });
});

app.get('/worlds', (req, res) => {
  console.log('got to home');
  db.loadWorlds(data => {
    res.send(data.rows);
  });
});

app.get('/prompts', (req, res) => {
  console.log('got to home');
  db.loadPrompts(data => {
    res.send(data.rows);
  });
});

app.post(
  '/login',
  passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

app.post(
  '/signup',
  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get(
  ['/', '/music', '/home', '/prompts', '/sprites', '/worlds'],
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/api-music', (req, res) => {
  db.getSongs(data => {
    res.send(data.rows);
  });
});

//= ====GOTTA FIX USER INFO BELOW WHEN USERS ARE IMPLEMENTED=======
app.get('/votes', (req, res) => {
  const currentUserId = req.user.rows[0].id;
  const clickedSongId = req.query.clickedSongId;
  // console.log(req.query);

  db.didVote(currentUserId, clickedSongId, data => {
    res.send(data.rows);
  });
});

app.post('/votes', (req, res) => {
  db.toggleVote(req.body, response => {
    console.log('Vote Toggled and heres the response data => ', response);
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
