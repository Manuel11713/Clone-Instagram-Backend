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
        try{
            const data = await dynamoClient.put(paramsPut).promise();
            console.log('data',data)
            if(data)return id;
        }catch(e){
            console.log('error en post model',e);
        }
    }
    static async getPosts(postsID){
        const Keys = postsID.map(id=>{
            return{
                id
            }
        });
        var params = {
            RequestItems: {
                'posts': {
                Keys
                }
            }
        };
        const data = await dynamoClient.batchGet(params).promise();
        return data.Responses.posts;
    }
}
module.exports = PostModel;