-- Connect to the db
\c eight_bit

-- Make the new prompts table
CREATE TABLE prompts
(
  id SERIAL PRIMARY KEY,
  title VARCHAR,
  prompt_name VARCHAR
);

-- Insert Test Genres
INSERT INTO prompts
  (title, prompt_name)
VALUES
  ('Friend', 'Let\''s be friends'),
  ('Not Friend', 'Let\''s not be friends'),
  ('Maybe Friend', 'I\''ll think about it');
