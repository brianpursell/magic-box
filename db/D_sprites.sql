-- Connect to the db
\c eight_bit

-- Make the new prompts table
CREATE TABLE sprites
(
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  creator VARCHAR,
  creator_id INTEGER REFERENCES users(id),
  spritesheet_url VARCHAR
);

-- Insert Test Genres
INSERT INTO sprites
  (title, creator, creator_id, spritesheet_url)
VALUES
  ('Warioni', 'josh', (SELECT id from users WHERE username='josh'), 'madeupurlthatsnotaurl'),
  ('Walethargy', 'cole', (SELECT id from users WHERE username='cole'), 'madeupurlthatsnotaurl2'),
  ('MonkeyDancer', 'justin', (SELECT id from users WHERE username='justin'), 'madeupurlthatsnotaurl3');
