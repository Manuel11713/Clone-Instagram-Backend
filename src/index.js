require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

//--------------------------SDK AWS--------------------
const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});

//--------------------------MiddleWares----------------------------
app.use(express.json());

//--------------------------Routing----------------------------------
app.use(require('./routes/index.routes.js'));

//--------------------------MongoDb----------------------------------
// const URLMONGO = `mongodb+srv://${process.env.USERMONGODB}:${process.env.PASSWORDMONGODB}@cluster0.qep1s.mongodb.net/${process.env.NAMEDATABASEMDB}?retryWrites=true&w=majority`;

// const optionsMongoose = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true 
// }

// mongoose.connect(URLMONGO,optionsMongoose,err=>{
//     if(err) throw 'Database Access Denied';
//     console.log('Database online');
// });

//--------------------------Cofig port-------------------------------
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server online on port ${port}`);
});

