const express = require('express');
const cors = require('cors');
const fetch = require('isomorphic-fetch');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

fetch('https://apis.is/concerts')
.then(res=>res.json())
.then(json=>{
    console.log(json);
})
