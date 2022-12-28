const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";

const connectToMongoose = () =>{
    mongoose.connext(mongoURI,()=>
    {
        console.log("connected to Mongo successfully");
    })
}
module.exports = connectToMongoose;