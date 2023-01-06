const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/Student";

const connectToMongoose = () =>{
    mongoose.connect(mongoURI,()=>
    {
        console.log("connected to Mongo successfully");
    })
}
module.exports = connectToMongoose;