DROP DATABASE SDC IF EXISTS;

CREATE DATABASE SDC;


CREATE TABLE products (
id integer,
name text,
sex text,
price integer,
reviews integer,
design text,
fabric text,
fit text,
color1 text,
color2 text,
colorId1 text,
colorId2 text,
type text,
img1 text,
img2 text,
img3 text,
img4 text
);

CREATE INDEX id_index ON products (id);

CREATE TABLE cart (
  id integer,
  price integer
);