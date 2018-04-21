const pg = require('pg');
const log = require('node-logger');
// Need to add local connection details
const bodyParser = require('body-parser');

console.log('PGHOST: ', process.env.PGHOST);

const client = new pg.Client();
client
  .connect()
  .then(() => {
    console.log(
      `Connected To ${client.database} at ${client.host}:${client.port}`
    );
  })
  .catch(err => console.error(err));

// get for homepage
const getSongs = callback => {
  client
    .query('SELECT * FROM songs ORDER BY id')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const getGenres = callback => {
  client
    .query('SELECT * FROM genres ORDER BY name')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const addSong = (params, userId, filename, callback) => {
  let uid = 1;
  let gid = 1;
  let artist = 'the blahs';
  client
    .query(
      `INSERT INTO songs (user_id, genre_id, artist, title, url) VALUES('${userId}', '${
        params.genre
      }', '${params.artist}', '${params.title}', '${filename}')`
    )
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(err, null);
    });
};

const altGetSongs = callback => {
  client
    .query(
      'SELECT *, (SELECT COUNT(*) FROM alt_votes WHERE alt_votes.song_id = alt_songs.id AND alt_votes.vote = true) AS up, (SELECT COUNT(*) FROM alt_votes WHERE alt_votes.song_id = alt_songs.id AND alt_votes.vote = false) AS down FROM alt_songs ORDER BY alt_songs.id'
    )
    .then(data => {
      console.log(data);
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};
const loadSprites = callback => {
  client
    .query('SELECT * FROM sprites ORDER BY id')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const loadPrompts = callback => {
  client
    .query('SELECT * FROM prompts ORDER BY id')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const loadWorlds = callback => {
  client
    .query('SELECT * FROM worlds ORDER BY id')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const findById = (id, callback) => {
  client
    .query(`SELECT * FROM users WHERE id = ${id}`)
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      console.error(err, null);
    });
};

const findByUsername = (username, callback) => {
  client
    .query(`SELECT * FROM users WHERE username = '${username}';`)
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      console.log('err: ', err);
      callback(err, null);
    });
};

const users = callback => {
  client
    .query('SELECT * FROM users')
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const signup = (username, password, callback) => {
  client
    .query(
      `INSERT INTO users (username, password) VALUES('${username}', '${password}');`
    )
    .then(success => {
      callback(null, true);
    })
    .catch(err => {
      callback(err, null);
    });
};

const updateVotesQuery = (params, voteId, callback) => {
  client
    .query(`${params} where id = ${voteId};`)
    .then(data => {
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

const updateSongVotesQuery = (params, songId, callback) => {
  client
    .query(`${params} where id = ${songId};`)
    .then(data => {
      callback(data);
    })
    .catch(err => {
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
      updateSongVotesQuery(
        'update songs set upvotes = upvotes - 1',
        songId,
        callback
      );
    } else if (totalVotes === 1 && upVoteCount === 0) {
      updateVotesQuery(
        'update votes set upvote = (case upvote when 1 then 0 when 0 then 1 else upvote end), downvote = (case downvote when 1 then 0 when 0 then 1 else downvote end)',
        voteId,
        callback
      );
      updateSongVotesQuery(
        'update songs set upvotes = upvotes + 1',
        songId,
        callback
      );
      updateSongVotesQuery(
        'update songs set downvotes = downvotes - 1',
        songId,
        callback
      );
    } else if (totalVotes === 0) {
      updateVotesQuery('update votes set upvote = 1', voteId, callback);
      updateSongVotesQuery(
        'update songs set upvotes = upvotes + 1',
        songId,
        callback
      );
    }
  } else if (voteType === 'downvote') {
    if (totalVotes === 1 && downVoteCount === 1) {
      updateVotesQuery('update votes set downvote = 0', voteId, callback);
      updateSongVotesQuery(
        'update songs set downvotes = downvotes - 1',
        songId,
        callback
      );
    } else if (totalVotes === 1 && downVoteCount === 0) {
      updateVotesQuery(
        'update votes set upvote = (case upvote when 1 then 0 when 0 then 1 else upvote end), downvote = (case downvote when 1 then 0 when 0 then 1 else downvote end)',
        voteId,
        callback
      );
      updateSongVotesQuery(
        'update songs set downvotes = downvotes + 1',
        songId,
        callback
      );
      updateSongVotesQuery(
        'update songs set upvotes = upvotes - 1',
        songId,
        callback
      );
    } else if (totalVotes === 0) {
      updateVotesQuery('update votes set downvote = 1', voteId, callback);
      updateSongVotesQuery(
        'update songs set downvotes = downvotes + 1',
        songId,
        callback
      );
    }
  }
};

const didVote = (currentUserId, clickedSongId, callback) => {
  client
    .query(
      `Select * from votes where votes.user_id = ${currentUserId} and votes.song_id = ${clickedSongId};`
    )
    .then(data => {
      console.log('data => ', data);
      callback(data);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports.addSong = addSong;
module.exports.getGenres = getGenres;
module.exports.getSongs = getSongs;
module.exports.altGetSongs = altGetSongs;
module.exports.users = users;
module.exports.signup = signup;
module.exports.client = client;
module.exports.didVote = didVote;
module.exports.toggleVote = toggleVote;
module.exports.findByUsername = findByUsername;
module.exports.findById = findById;
module.exports.loadSprites = loadSprites;
module.exports.loadPrompts = loadPrompts;
module.exports.loadWorlds = loadWorlds;
