
DROP TABLE IF EXISTS urls CASCADE;


CREATE TABLE urls (
  id SERIAL PRIMARY KEY NOT NULL,
  longURL VARCHAR(255),
  shortURL VARCHAR(6)
);