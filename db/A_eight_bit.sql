-- -- Get rid of the db if it exists
DROP DATABASE IF EXISTS eight_bit;
-- -- Create the db
CREATE DATABASE eight_bit;
-- Connect to the db
\c eight_bit

-- Make the new users table
CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR
);

-- Insert Test Users
INSERT INTO users
  (username, password)
VALUES
  ('brian', '1234'),
  ('justin', '1234'),
  ('josh', '1234'),
  ('cole', '1234');