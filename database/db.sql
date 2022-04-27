CREATE DATABASE database_links;

USE database_links;

CREATE TABLE users(
    user VARCHAR(90) NOT NULL,
    password VARCHAR(120) NOT NULL
) 
ALTER TABLE users 
    ADD PRIMARY KEY (user);

DESCRIBE users