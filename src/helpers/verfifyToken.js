const jwt = require('jsonwebtoken');


const verifyToken = (Authorization)=>{
    try{
        return jwt.verify(Authorization,process.env.JWTSECRET)
    }catch(e){
        return null;
    }
}

module.exports = {verifyToken};