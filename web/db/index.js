const pg = require('pg');
const log = require('node-logger');
//Need to add local connection details
const bodyParser = require('body-parser');
const client = new pg.Client();
client
  .connect()
  .then(() => {
    console.log(`Connected To ${client.database} at ${client.host}:${client.port}`);
  })
  .catch((err) => console.error(err));

module.exports = {
  query: (text, params, callback) => {
    const sendBack = client.query(text, params, callback);
    return sendBack;
  },
};

// example use of query function below

// ESLINT "QUERY IS NEVER USED!!!!!!!"
// const query = {
//   // give the query a unique name
//   name: 'fetch-user',
//   text: 'SELECT * FROM user WHERE id = $1',
//   values: [1],
// };

// example test db function
// client
//   .query('SELECT NOW() as now')
//   .then(data => {
//     console.log('This is our response Data => ', data);
//   })
//   .catch(err => {
//     console.error(err);
//   });

// get for homepage
const load = (callback) => {
  client
    .query('SELECT * FROM songs')
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const toggleVote = (song, vote, callback) => {
  client
    .query(`select ${vote.upvote}, case when ${vote.upvote}=1 then 0 else 1`)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const didVote = (currentUserId, clickedSongId, callback) => {
  client
    .query(`Select * from votes where votes.user_id = ${currentUserId} and votes.song_id = ${clickedSongId}`)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports.load = load;
module.exports.client = client;
module.exports.didVote = didVote;
module.exports.toggleVote = toggleVote;
