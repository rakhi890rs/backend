const mongoose = require("mongoose");



function connectToDB(){
    mongoose.connect("mongodb+srv://rakhi:LWTVJVZ5pRmOr6qW@cluster0.8t4qtdl.mongodb.net/learningDB").then(() => {
        console.log("Connected to MongoDB successfully!");
    })


}




module.exports = connectToDB