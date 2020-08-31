const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamoClient = new AWS.DynamoDB.DocumentClient();

class PostModel{
    constructor(description,fileLink){
        this.description = description;
        this.fileLink = fileLink;
        this.tablename='posts';
    };
    async save(){
        let id = uuidv4();
        const paramsPut = {
            TableName:this.tablename,
            Item:{
                "id":id,
                "fileLink":this.fileLink,
                "description":this.description,
                "comments":[],
                "shared":[],
                "likes":[]
            }
        }
        const data = await dynamoClient.put(paramsPut).promise();
        if(data)return id;
    }
}
module.exports = PostModel;