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
INSERT INTO worlds
<<<<<<< HEAD
  (title, creator, creator_id, spritesheet_url)
=======
  (title, creator, creator_id, world_map_url)
>>>>>>> 6c7c211fdae9af144b2dbc00e15923ea6b86641f
VALUES
  ('Cole\''s Basement', 'cole', (SELECT id from users WHERE username='cole'), 'madeupurlthatsnotaurl6'),
  ('Tom Waits Basement', 'brian', (SELECT id from users WHERE username='brian'), 'madeupurlthatsnotaurl8'),
  ('Bob Ross\''s Basement', 'josh', (SELECT id from users WHERE username='josh'), 'madeupurlthatsnotaurl9');
