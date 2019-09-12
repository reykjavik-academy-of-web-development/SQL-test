const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const password = require('./secret/donotread');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'myData'
})
db.connect();

app.get("/",(req,res)=>{
    db.query('SELECT * FROM concerts',(error, results)=> {
        if (error) throw error;
        console.log(results);
        res.send(results)
    });
})

app.listen("3001",()=>{
    console.log("blah 3001");
})

