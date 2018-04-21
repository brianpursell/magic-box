-- Connect to the db
\c eight_bit

-- Make the new genres table
CREATE TABLE genres
(
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

-- Make the new songs table
CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  genre_id INTEGER REFERENCES genres(id),
  artist VARCHAR,
  title VARCHAR,
  url VARCHAR,
  upvotes INTEGER,
  downvotes INTEGER
);

CREATE TABLE votes
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  song_id INTEGER REFERENCES songs(id),
  upvote INTEGER,
  downvote INTEGER
);

-- Insert Test Data
-- ==================

-- Insert Test Genres
INSERT INTO genres
  (name)
VALUES
  ('Hipster'),
  ('Pop'),
  ('Blue-Eyed Soul');

-- Insert Test Songs
INSERT INTO songs
  (user_id, genre_id, artist, title, url, upvotes, downvotes)
VALUES
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Hipster'), 'The Bashing Pythons', 'Big Crumble', 'big_crumble', 3, 10),
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Pop'), 'AI', 'Ending', 'ending', 1000000, 80),
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Blue-Eyed Soul'), 'Rick Astley', 'Flute', 'flute', 500, 10);

  -- Insert Test Votes
INSERT INTO votes
  (user_id, song_id, upvote, downvote)
VALUES
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Big Crumble'), 1, 0),
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Ending'), 1, 0),
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Flute'), 1, 0);


-- Make the new songs table
CREATE TABLE alt_songs
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  genre_id INTEGER REFERENCES genres(id),
  artist VARCHAR,
  title VARCHAR,
  url VARCHAR
);

CREATE TABLE alt_votes
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  song_id INTEGER REFERENCES songs(id),
  vote BOOLEAN
);

-- Insert Test Songs
INSERT INTO alt_songs
  (user_id, genre_id, artist, title, url)
VALUES
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Hipster'), 'The Bashing Pythons', 'Big Crumble', 'big_crumble'),
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Pop'), 'AI', 'Ending', 'ending'),
  ((SELECT id from users WHERE username='justin'), (SELECT id from genres WHERE name='Blue-Eyed Soul'), 'Rick Astley', 'Flute', 'flute');

  -- Insert Test Votes
INSERT INTO alt_votes
  (user_id, song_id, vote)
VALUES
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Big Crumble'), true),
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Ending'), true),
  ((SELECT id from users WHERE username='justin'), (SELECT id from songs WHERE title='Flute'), true),
  ((SELECT id from users WHERE username='brian'), (SELECT id from songs WHERE title='Big Crumble'), true),
  ((SELECT id from users WHERE username='brian'), (SELECT id from songs WHERE title='Ending'), false),
  ((SELECT id from users WHERE username='brian'), (SELECT id from songs WHERE title='Flute'), true),
  ((SELECT id from users WHERE username='josh'), (SELECT id from songs WHERE title='Big Crumble'), false),
  ((SELECT id from users WHERE username='josh'), (SELECT id from songs WHERE title='Ending'), true),
  ((SELECT id from users WHERE username='josh'), (SELECT id from songs WHERE title='Flute'), false),
  ((SELECT id from users WHERE username='cole'), (SELECT id from songs WHERE title='Big Crumble'), true),
  ((SELECT id from users WHERE username='cole'), (SELECT id from songs WHERE title='Ending'), true),
  ((SELECT id from users WHERE username='cole'), (SELECT id from songs WHERE title='Flute'), false);
