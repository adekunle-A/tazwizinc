//models
const mongoose = require('mongoose')

//create new schma
 const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
 })

const User = mongoose.model('user', userSchema); //get user instance
module.exports =  User;