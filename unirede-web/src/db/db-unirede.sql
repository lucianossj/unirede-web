CREATE DATABASE unirede;

USE unirede;

CREATE TABLE Users (

    idUser INTEGER NOT NULL AUTO_INCREMENT,
    login VARCHAR(20) NOT NULL, 
    password VARCHAR(20) NOT NULL, 
    permission VARCHAR(15),
    PRIMARY KEY(idUser)

);