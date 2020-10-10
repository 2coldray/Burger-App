DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int not null auto_increment,
    name VARCHAR(200),
    devour boolean default false,
    PRIMARY KEY (id)
);