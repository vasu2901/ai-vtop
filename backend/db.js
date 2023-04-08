const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.mongo_URI

const connectToMongoose = () =>{
    mongoose.connect(mongoURI,()=>
    {
        console.log("connected to Mongo successfully");
    })
}
module.exports = connectToMongoose;