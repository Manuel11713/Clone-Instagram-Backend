const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserModel{
    constructor(email,username,name,password,authentication='normal'){
        this.email = email;
        this.username = username;
        this.name = name;
        this.password = password;
        this.tablename = 'users';
        this.authentication = authentication;
    }
    async save(cb){
        const encoded = await bcrypt.hash(this.password,Number(process.env.SALTROUNDS));
        var paramsPut ={
            TableName:this.tablename,
            Item:{
                "email":this.email, //Primary partition key (id)
                "username":this.username,
                "name":this.name,
                "password":encoded,
                "imgProfile":'',
                "authentication":this.authentication,
                "phoneNumber":'',
                "posts":[]
            }
        }
        dynamoClient.put(paramsPut,async(err,data)=>{
            if(!cb)return;
            if(err)return cb(err);
            let user = {
                name:this.name,
                email:this.email,
                username:this.username,
                imgProfile:''
            }
            
            const token = this.tokenization(user);
            cb(null,{user,token});
        });
    }
    static async tokenization(user){
        const token = await jwt.sign(user,process.env.JWTSECRET,{expiresIn:'3d'});
        return token;
    }
    static async compare(password,coded){
        return await bcrypt.compare(password,coded);
    }
    static findByEmail(email,cb){
        const tablename = 'users';
        const params = {
            TableName:tablename,
            Key:{
                "email":email
            }
        }  
        dynamoClient.get(params,(err,data)=>{
            if(!cb)return;
            if(err)return cb(err);
            const {Item} = data;
            if(!Item)return cb(null,null);
            delete Item.password;
            cb(null,Item);
        });
    }
} 

module.exports = UserModel;