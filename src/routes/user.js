const express = require('express');
const router = express.Router();
const multer = require('multer');
const PostModel = require('../Models/PostsModel');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const UserModel = require('../Models/UserModel');

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

router.put('/upload-post',upload.single('newPost'),async(req,res)=>{
    const {email,description} = req.body;
    let posts = await UserModel.makePost(req.file.buffer,req.file.originalname,email,description);
    console.log(posts);
    res.json({ok:true,posts});
    
});
router.post('/posts',async(req,res)=>{
    const {postsID} = req.body;
    console.log(req.body);
    const posts = await PostModel.getPosts(postsID);
    res.json({ok:true,posts})
});

router.delete('/users',(req,res)=>{

});

module.exports = router;
