const mysql = require('mysql');
const password = require('./secret/donotread');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    // database: 'myData'
})

db.connect();

db.query('CREATE DATABASE myData');
db.query('USE myData');
db.query(`CREATE TABLE IF NOT EXISTS concerts (
    ID Int AUTO_INCREMENT NOT NULL,
    eventDateName varchar(100),
    name varchar(255),
    dateOfShow varchar(63),
    image varchar(255),
    PRIMARY KEY (ID)
)`, (error, results)=> {
        if (error) throw error;
        console.log(results);
    })

db.query(`CREATE TABLE IF NOT EXISTS comment (
    ID Int AUTO_INCREMENT NOT NULL,
    concertsID Int NOT NULL,
    Title varchar(100),
    Text varchar(255),
    PRIMARY KEY (ID),
    FOREIGN KEY (concertsID) REFERENCES concerts(ID)
)`, (error, results)=> {
    if (error) throw error;
    console.log(results);
})