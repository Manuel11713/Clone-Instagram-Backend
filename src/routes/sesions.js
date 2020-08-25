const express = require('express');

const router = express.Router();

router.post('/signup',(req,res)=>{
    const {body} = req;
    console.log(body);
    res.status(200).json({ok:true,message:'user saved'});
})




module.exports = router;