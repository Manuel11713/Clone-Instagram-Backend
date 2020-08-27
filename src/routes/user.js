const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const axios = require('axios');
const jwt = require('jsonwebtoken');
//const UserSModel = require('../Models/UsersModel');
const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();


//Create new user by email and password manually
router.post('/signup-users',async (req,res)=>{
    const {email,name,username,password} = req.body;
    const tableName = 'users';
    
    //-------------verify if email is already in database
    const paramsGet = {
        TableName:tableName,
        Key:{
            "email":email
        }
    }
    dynamoClient.get(paramsGet,async (err,data)=>{
        if(err) return res.json({ok:false});
        const {Item} = data;
        if(Item) return res.json({ok:false,message:'email has been registered'}); //wrong email

        const encoded = await bcrypt.hash(password,Number(process.env.SALTROUNDS));

        var paramsPut ={
            TableName:tableName,
            Item:{
                "email":email, //Primary partition key (id)
                "username":username,
                "name":name,
                "password":encoded,
                "imgProfile":'',
                "autentication":'normal',
                "phoneNumber":''
            }
        }
        dynamoClient.put(paramsPut,async(err,data)=>{
            if(err)return res.json({ok:false,message:"user can't be saved"});
            let user = {
                name,
                email,
                username
            }
            const token = await jwt.sign(user,process.env.JWTSECRET,{expiresIn:'3d'});
            
            res.json({ok:true,message:'user saved successfully!!!',user,token});
        });
    });
});

//Create new user by google autentication
router.post('/signup-google',(req,res)=>{
    const {accesstoken} = req.headers;
    let verifyToken = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${accesstoken}`;
    axios.get(verifyToken)
    .then(data=>{
        
        const {email,name,picture} = data.data;
        const user = {email,name,picture};
        //-------------verify if email is already in database
        const paramsGet = {
            TableName:tableName,
            Key:{
                "email":email
            }
        }
        dynamoClient.get(paramsGet,async (err,data)=>{
            if(err) return res.json({ok:false});
            const {Item} = data;
            if(Item) return res.json({ok:false,message:'email has been registered'}); //wrong email
        });
        //-------------/verify if email is already in database


        //saving in dynamodb
        const tableName = 'users';
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
            if(err)return res.json({ok:false,message:"user can't be loggin with that google account"});
    
            res.json({ok:true,message:'user saved successfully!!!',user});
        });

    })
    .catch(e=>{
        res.json({ok:false});
        console.log(e)
    });    
});

//Create new user by autentication of google (Auth0)
router.post('/users-google',()=>{

});

router.put('/users',(req,res)=>{

});

router.delete('/users',(req,res)=>{

});

module.exports = router;
