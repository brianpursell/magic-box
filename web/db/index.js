const pg = require('pg');
const log = require('node-logger');
// Need to add local connection details
const bodyParser = require('body-parser');

const client = new pg.Client();
client
  .connect()
  .then(() => {
    console.log(`Connected To ${client.database} at ${client.host}:${client.port}`);
  })
  .catch(err => console.error(err));

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

const users = (callback) => {
  client
    .query('SELECT * FROM users')
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const signup = (values, callback) => {
  const query = {
    text: 'INSERT INTO users (username, password, first_name, last_name) VALUES($1, $2, $3, $4);',
    values,
  };
  client
    .query(query)
    .then((res) => {
      callback(res);
    })
    .catch(err => console.error(err));
};

const updateVotesQuery = (params, voteId, callback) => {
  client
    .query(`${params} where id = ${voteId};`)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const updateSongVotesQuery = (params, songId, callback) => {
  client
    .query(`${params} where id = ${songId};`)
    .then((data) => {
      callback(data);
    })
    .catch((err) => {
      console.error(err);
    });
};

const toggleVote = (vote, callback) => {
  console.log('vote => ', vote);
  // vote = JSON.parse(vote);
  const voteType = vote.voteType;
  vote = vote.vote[0];
  const voteId = vote.id;
  const songId = vote.song_id;
  const upVoteCount = vote.upvote;
  const downVoteCount = vote.downvote;
  const totalVotes = upVoteCount + downVoteCount;

  if (voteType === 'upvote') {
    if (totalVotes === 1 && upVoteCount === 1) {
      updateVotesQuery('update votes set upvote = 0', voteId, callback);
      updateSongVotesQuery('update songs set upvotes = upvotes - 1', songId, callback);
    } else if (totalVotes === 1 && upVoteCount === 0) {
      updateVotesQuery(
        'update votes set upvote = (case upvote when 1 then 0 when 0 then 1 else upvote end), downvote = (case downvote when 1 then 0 when 0 then 1 else downvote end)',
        voteId,
        callback,
      );
      updateSongVotesQuery('update songs set upvotes = upvotes + 1', songId, callback);
      updateSongVotesQuery('update songs set downvotes = downvotes - 1', songId, callback);
    } else if (totalVotes === 0) {
      updateVotesQuery('update votes set upvote = 1', voteId, callback);
      updateSongVotesQuery('update songs set upvotes = upvotes + 1', songId, callback);
    }
  } else if (voteType === 'downvote') {
    if (totalVotes === 1 && downVoteCount === 1) {
      updateVotesQuery('update votes set downvote = 0', voteId, callback);
      updateSongVotesQuery('update songs set downvotes = downvotes - 1', songId, callback);
    } else if (totalVotes === 1 && downVoteCount === 0) {
      updateVotesQuery(
        'update votes set upvote = (case upvote when 1 then 0 when 0 then 1 else upvote end), downvote = (case downvote when 1 then 0 when 0 then 1 else downvote end)',
        voteId,
        callback,
      );
      updateSongVotesQuery('update songs set downvotes = downvotes + 1', songId, callback);
      updateSongVotesQuery('update songs set upvotes = upvotes - 1', songId, callback);
    } else if (totalVotes === 0) {
      updateVotesQuery('update votes set downvote = 1', voteId, callback);
      updateSongVotesQuery('update songs set downvotes = donwvotes + 1', songId, callback);
    }
  }
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
module.exports.users = users;
module.exports.signup = signup;
module.exports.client = client;
module.exports.didVote = didVote;
module.exports.toggleVote = toggleVote;
