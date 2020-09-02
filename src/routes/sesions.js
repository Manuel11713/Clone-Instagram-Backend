const express = require('express');
const router = express.Router();
const UserModel = require('../Models/UserModel');
const axios = require('axios');

const {verifyToken} = require('../helpers/verfifyToken');

//Get one user by email and password
router.post('/loggin',(req,res)=>{
    const {email,password} = req.body;
    UserModel.findByEmail(email,async(err,Item)=>{
        if(err)return res.json({ok:false,message:'Error 404'});
        if(!Item) return res.json({ok:false,message:'wrong data'}); //wrong email
        if(Item.authentication==='google')return res.json({ok:false,message:'This account is logged via google'});
        
        const match = await UserModel.compare(password,Item.password);
        delete Item.password;//delete password after using

        if(!match) return res.json({ok:false,message:'wrong data'}); //wrong password 
        
        const user = Item;
        const token = UserModel.tokenization(Item); 

        res.json({ok:true,user,token});
    });
});

//Create new user by google autentication
router.post('/loggin-google',(req,res)=>{
    const {idtoken} = req.headers;
    console.log(idtoken)
    let verifyToken = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idtoken}`;
    axios.get(verifyToken)
    .then(async data=>{
        const {email,name,picture} = data.data;
                
        UserModel.findByEmail(email,async (err,Item)=>{
            const user = Item;
            delete user.password;
            const token = await UserModel.tokenization(user);        
            res.json({ok:true,user,token});
            
            if(err) return console.log(err);
            if(Item) return console.log('user already in db'); 

            const newUser = new UserModel(email,name,name,'','google');
            newUser.save((err,data)=>{
                if(err)console.log(err);
            });
        });
    })
    .catch(e=>{
        res.json({ok:false});
        //console.log(e);
    });    
});



router.get('/verify-token',(req,res)=>{
    const {authorization} = req.headers;
    let valid = verifyToken(authorization);
    if(!valid) return res.json({ok:false,message:'invalid token please signup'});
    delete valid.exp;
    delete valid.iat;
    let user = valid;

    res.json({ok:true,user})    
});


module.exports = router;