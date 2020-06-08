//database models for customer
const mongoose = require('mongoose')
//create new schema
 const CustomersSchemas = new mongoose.Schema({
    UID:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    approved:{
        type: Boolean,
        require: true
    }
 })
 const Customers = mongoose.model('customer',CustomersSchemas)
 module.exports =   Customers;