const express = require('express');
const router = express.Router();

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

        res.json({ok:true,Item});
    });
});




module.exports = router;