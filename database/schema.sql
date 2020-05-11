DROP DATABASE IF EXISTS lululemon;
CREATE DATABASE lululemon;
USE lululemon;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    price INT NOT NULL, 
    reviews INT(10) NOT NULL,
    design VARCHAR(80) NOT NULL,
    fabric VARCHAR(80) NOT NULL,
    fit VARCHAR(80) NOT NULL,
    color1 VARCHAR(80) NOT NULL, 
    color2 VARCHAR(80) NOT NULL,
    colorId1 VARCHAR(255) NOT NULL,
    colorId2 VARCHAR(255) NOT NULL,
    type VARCHAR(55) NOT NULL,
    img1 VARCHAR(255) NOT NULL,
    img2 VARCHAR(255) NOT NULL,
    img3 VARCHAR(255) NOT NULL,
    img4 VARCHAR(255) NOT NULL
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    price INT NOT NULL
);