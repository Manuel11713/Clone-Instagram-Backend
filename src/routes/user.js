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
                username,
                imgProfile:''
            }
            const token = await jwt.sign(user,process.env.JWTSECRET,{expiresIn:'3d'});
            
            res.json({ok:true,message:'user saved successfully!!!',user,token});
        });
    });
});


router.put('/users',(req,res)=>{

});

router.delete('/users',(req,res)=>{

});

module.exports = router;
