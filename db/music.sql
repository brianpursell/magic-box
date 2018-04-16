-- -- Get rid of the db if it exists
DROP DATABASE IF EXISTS music;
-- -- Create the db
CREATE DATABASE music;
-- Connect to the db
\c music
-- Make the new users table
CREATE TABLE users
(
  ID INTEGER PRIMARY KEY,
  username VARCHAR,
  password VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR
);
-- Make the new genres table
CREATE TABLE genres
(
  ID INTEGER PRIMARY KEY,
  name VARCHAR
);
-- Make the new songs table
CREATE TABLE songs
(
  ID INTEGER PRIMARY KEY,
  USER_ID INTEGER REFERENCES users(id),
  GENRE_ID INTEGER REFERENCES genres(id),
  artist VARCHAR,
  title VARCHAR,
  url VARCHAR,
  upvotes INTEGER,
  downvotes INTEGER
);
CREATE TABLE votes
(
  ID INTEGER PRIMARY KEY,
  USER_ID INTEGER REFERENCES users(id),
  SONG_ID INTEGER REFERENCES songs(id),
  UPVOTE INTEGER,
  DOWNVOTE INTEGER
);
-- Insert Test Users
INSERT INTO users
  (id, username, password, first_name, last_name)
VALUES
  (10, 'j_phillips', '1234', 'Jim Bob', 'Phillips'),
  (11, 'h_mcgirth', '1234', 'Haygood', 'McGirth'),
  (12, 'r_mcpickles', '1234', 'Rick', 'McPickles');
-- Insert Test Genres
INSERT INTO genres
  (id, name)
VALUES
  (1, 'Hipster'),
  (2, 'Pop'),
  (3, 'Blue-Eyed Soul');
-- Insert Test Songs
INSERT INTO songs
  (id, user_id, genre_id, artist, title, url, upvotes, downvotes)
VALUES
  (1000, 10, 1, 'The Bashing Pythons', 'Big Crumble', 'big_crumble', 3, 10),
  (1001, 11, 2, 'AI', 'Ending', 'ending', 1000000, 80),
  (1002, 12, 3, 'Rick Astley', 'flute', 'flute', 500, 10);
INSERT INTO votes
  (id, user_id, song_id, upvote, downvote)
VALUES
  (1, 10, 1000, 1, 0),
  (2, 11, 1001, 0, 1),
  (3, 12, 1002, 1, 0),
  (4, 10, 1001, 1, 0),
  (5, 10, 1002, 1, 0),
  (6, 11, 1000, 0, 1),
  (7, 11, 1002, 0, 1),
  (8, 12, 1000, 1, 0),
  (9, 12, 1001, 0, 1);

-- Run the below to get into the database and create a user and database on Ubuntu
--  sudo service postgresql start
    -- sudo -u postgres createuser 'name'
    -- sudo -u postgres createdb 'name'
    -- sudo -i -u postgres
    -- psql

-- Run the below in psql to run this sql file
-- psql -U postgres -d music -a -f "/home/justin/Dropbox/+++Coding+++/Hack Reactor/hratx33_projects/magic-box/music.sql" -- Absolute path to .sql file

-- Edit your pg config file 
-- sudo code . --user-data-dir='.'
-- sudo code /etc/postgresql/9.1/main/pg_hba.conf

-- How to install and run pgadmin4
-- sudo apt-get install virtualenv python-pip libpq-dev

-- cd
-- virtualenv pgadmin4
-- cd pgadmin4
-- source bin/activate

-- wget https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v1.4/pip/pgadmin4-1.4-py2.py3-none-any.whl

-- pip install pgadmin4-1.4-py2.py3-none-any.whl

-- gedit lib/python2.7/site-packages/pgadmin4/config_local.py
-- https://askubuntu.com/questions/788457/how-to-install-pgadmin-4-in-server-mode-on-ubuntu-16-04