const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
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