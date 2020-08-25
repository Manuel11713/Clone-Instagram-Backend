const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserSModel = require('../Models/UsersModel');
const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();


//Get one user by id
router.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    UserSModel.findById(id,(err,userSaved)=>{
        if(err){
            return res.json({ok:false,message:'wrong id'});
        }
        res.json({ok:true,userSaved});
    });
});

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
        if(err) return res.json({ok:false});
        const {Item} = data;

        if(!Item) return res.json({ok:false,message:'wrong data'}); //wrong email
        
        const match = await bcrypt.compare(password,Item.password);
        
        if(!match) return res.json({ok:false,message:'wrong data'}); //wrong password 

        delete Item.password;

        res.json({ok:true,Item})
    });
});

//Get one user by autentication of google (Auth0)
router.get('/loggin',(req,res)=>{
    res.json({ok:true})
});


//Create new user by email and password manually
router.post('/users',async (req,res)=>{
    const {email,name,username,password} = req.body;

    const tableName = 'users';

    const encoded = await bcrypt.hash(password,Number(process.env.SALTROUNDS));

    var params ={
        TableName:tableName,
        Item:{
            "email":email, //Primary partition key (id)
            "username":username, //Primary sort key
            "name":name,
            "password":encoded,
            "imgProfile":'',
            "phoneNumber":''
        }
    }
    dynamoClient.put(params,(err,data)=>{
        if(err)return res.json({ok:false,message:"user can't be saved"});

        res.json({ok:true,message:'user saved successfully!!!'});
    })
});

//Create new user by autentication of google (Auth0)
router.post('/users-google',()=>{

});

router.put('/users',(req,res)=>{

});

router.delete('/users',(req,res)=>{

});

module.exports = router;
//5f4075cd81474a2528192d61