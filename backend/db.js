const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Vighnesh2901:Vighnesh2901@cluster0.6zpqiwo.mongodb.net/blogs";

const connectToMongoose = () =>{
    mongoose.connect(mongoURI,()=>
    {
        console.log("connected to Mongo successfully");
    })
}
module.exports = connectToMongoose;