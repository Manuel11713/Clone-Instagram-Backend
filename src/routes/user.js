const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const UserModel = require('../Models/UserModel');
const multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

//Create new user by email and password manually
router.post('/signup-users',async (req,res)=>{
    const {email,name,username,password} = req.body;
    //-------------verify if email is already in database
    UserModel.findByEmail(email,(err,Item)=>{
        if(err)return res.json({ok:false,message:'Error 500'});
        if(Item)return res.json({ok:false,message:'email is already in db'});

        //-------------------if email not in db--------------
        const user = new UserModel(email,username,name,password);

        user.save((err,data)=>{
            if(err)return res.json({ok:false,message:"user can't be saved"});
            res.json({ok:true,user:data.user,token:data.token});
        })
    }); 
});       

// router.post('/upload-post',upload.single('newPost'),(req,res)=>{
//     console.log(req.file);
//     const email = req.body.email;
//     const params = {
//         Bucket:'bucketforclonogram',
//         Key:req.file.originalname,
//         Body:req.file.buffer,
//         ACL: 'public-read'//hacer publico
//     }
//     s3.upload(params,(err,dataS3)=>{
//         if(err){console.log(err);return res.json({ok:false,message:'klsdf'})}
//         Location

//         const tableName = 'users';
//         console.log(email)
//         const params = {
//             TableName:tableName,
//             Key:{
//                 'email':email
//             }
//         };

//         dynamoClient.get(params,(err,dataDy)=>{

//             if(err)return console.log(err);
//             res.json({ok:true,dataS3,dataDy});
//         });
//     });
// });



router.put('/users',(req,res)=>{

});

router.delete('/users',(req,res)=>{

});

module.exports = router;
