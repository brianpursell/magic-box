-- Connect to the db
\c eight_bit

-- Make the new prompts table
CREATE TABLE worlds
(
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  creator VARCHAR,
  creator_id INTEGER REFERENCES users(id),
  world_map_url VARCHAR
);

-- Insert Test Genres
INSERT INTO sprites
  (title, creator, creator_id, spritesheet_url)
VALUES
  ('Cole\''s Basement', 'cole', (SELECT id from users WHERE username='cole'), 'madeupurlthatsnotaurl6'),
  ('Tom Waits Basement', 'brian', (SELECT id from users WHERE username='brian'), 'madeupurlthatsnotaurl8'),
  ('Bob Ross\''s Basement', 'josh', (SELECT id from users WHERE username='josh'), 'madeupurlthatsnotaurl9');
