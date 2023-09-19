-- TABLE USERS
CREATE TABLE users(
    id VARCHAR NOT NULL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR,
    phone VARCHAR(15),
    password VARCHAR,
    photo VARCHAR
);

CREATE TABLE recipes
(
    recipes_id VARCHAR PRIMARY KEY,
    recipes_title VARCHAR(255),
    recipes_ingredients VARCHAR(255) ,
    recipes_photo VARCHAR(255),
    recipes_video VARCHAR(255),
    recipes_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    categorys_name VARCHAR(255),
    users_id VARCHAR(255)
);
CREATE TABLE comments
(
    comment_id VARCHAR PRIMARY KEY,
    recipes_id VARCHAR(255),
    users_id VARCHAR(255),
    comment_text VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likeds
(
    likeds_id VARCHAR PRIMARY KEY,
    recipes_id VARCHAR(255),
    users_id VARCHAR(255)
);

CREATE TABLE bookmarks
(
    bookmarks_id VARCHAR PRIMARY KEY,
    recipes_id VARCHAR(255),
    users_id VARCHAR(255)
);

CREATE TABLE categorys
(
    categorys_id VARCHAR PRIMARY KEY,
    categorys_name VARCHAR(255),
);