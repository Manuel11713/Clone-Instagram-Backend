const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const dynamoClient = new AWS.DynamoDB.DocumentClient();

class PostModel{
    constructor(description,likes,comments,imgLink){
        this.description = description;
        this.likes = likes;
        this.comments = comments;
        this.imgLink = imgLink;
    };
    save(){

    }
    find(email,callback){
        const tablename = 'users';
        params={
            TableName:tablename,
            Key:{
                "email":email
            }
        }


        

        //if(callback)
    }
}