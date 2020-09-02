require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors')

//--------------------------SDK AWS--------------------
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

//--------------------------MiddleWares----------------------------
//app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));//activate static files

//--------------------------Server Project React--------------------
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//--------------------------Routing----------------------------------
app.use(require('./routes/index.routes.js'));

//--------------------------Cofig port-------------------------------
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server online on port ${port}`);
});

