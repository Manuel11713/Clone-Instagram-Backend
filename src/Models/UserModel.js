const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const PostModel = require('./PostsModel');
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
                posts:[],
                imgProfile:''
            }
            
            const token = await UserModel.tokenization(user);
            cb(null,{user,token});
        });
    }
    static async makePost(file,filename,email,description,callback){
        //--------Upload File to S3----------------------
        const paramsS3 = {
            Bucket:'bucketforclonogram',
            Key:filename,
            Body:file,
            ACL: 'public-read'//make Public
        }
        try{

            const dataS3 = await s3.upload(paramsS3).promise();
            const tablename='users';
            const paramsGet = {
                TableName:tablename,
                Key:{
                    'email':email
                }
            };
            //console.log('dataS3',dataS3);
            //------------Get Uset-------------------
            const dataDy = await dynamoClient.get(paramsGet).promise();
            //console.log('dataDy',dataDy)
            const {Item} = dataDy;
            //------------Make post and update user´s data----------
            const newPost = new PostModel(description,dataS3.Location);
            const id = await newPost.save();
            //console.log('id',id);
            Item.posts.unshift(id);
            const paramsPut = {
                TableName:tablename,
                Item
            }
            //console.log('Item',Item);
            await dynamoClient.put(paramsPut).promise();
            //console.log('return');
            //return Item.posts;
            delete Item.password;
            return Item;
        }catch(e){
            console.log('error in user model',e);
        }
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
            cb(null,Item);
        });
    }
} 

module.exports = UserModel;