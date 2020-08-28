const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const axios = require('axios');
const AWS = require('aws-sdk');
const bcrypt = require('bcrypt');
const dynamoClient = new AWS.DynamoDB.DocumentClient();

const {verifyToken} = require('../helpers/verfifyToken');

//Get one user by email and password
router.get('/loggin',(req,res)=>{
    const {email,password} = req.body;
    const tableName = 'users';

    const params = {
        TableName:tableName,
        Key:{
            "email":email
        }
    }
    dynamoClient.get(params,async (err,data)=>{
        console.time('getDynamo');

        if(err) return res.json({ok:false});
        const {Item} = data;

        if(!Item) return res.json({ok:false,message:'wrong data'}); //wrong email
        
        const match = await bcrypt.compare(password,Item.password);
        
        if(!match) return res.json({ok:false,message:'wrong data'}); //wrong password 
        
        delete Item.password;
        
        const token = await jwt.sign(Item,process.env.JWTSECRET,{expiresIn:'3d'});

        res.json({ok:true,Item,token});
        console.timeEnd('getDynamo');

    });
});

//Create new user by google autentication
router.post('/loggin-google',(req,res)=>{
    const {idtoken} = req.headers;
    let verifyToken = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idtoken}`;
    axios.get(verifyToken)
    .then(async data=>{
        const {email,name,picture} = data.data;
        const user = {email,name,imgProfile:picture,username:name};
        const token = await jwt.sign(user,process.env.JWTSECRET,{expiresIn:'3d'});
        
        res.json({ok:true,user,token});
        
        const tableName = 'users';
        
        //-------------verify if email is already in database
        const paramsGet = {
            TableName:tableName,
            Key:{
                "email":email
            }
        }
        dynamoClient.get(paramsGet,async (err,data)=>{
            if(err) return console.log(err);
            const {Item} = data;
            if(Item) return console.log('user already in db'); 
        
        
            //--------------saving in dynamodb
            var params ={
                TableName:tableName,
                Item:{
                    "email":email, //Primary partition key (id)
                    "username":name,
                    "name":name,
                    "imgProfile":picture,
                    "autentication":'google',
                    "phoneNumber":''
                }
            }
            dynamoClient.put(params,(err,data)=>{
                if(err)return console.log(err);
                console.log('user saved!!!')
            });
        });
    })
    .catch(e=>{
        console.log(e);
    });    
});


router.get('/verify-token',(req,res)=>{
    const {authorization} = req.headers;
    let valid = verifyToken(authorization);
    if(!valid) return res.json({ok:false,message:'invalid token please signup'});
    let user = {
        name:valid.name,
        username:valid.username,
        imgProfile:valid.imgProfile,
        email:valid.email
    }
    res.json({ok:true,user})    
});




module.exports = router;