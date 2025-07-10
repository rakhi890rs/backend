const mongoose = require("mongoose");



function connectToDB(){
    mongoose.connect("mongodb+srv://rakhisingh876com:0pORlJF0QpfEOgJ0@cluster0.8t4qtdl.mongodb.net/notes-app").then(() => {
        console.log("Connected to MongoDB successfully!");
    })


}




module.exports = connectToDB