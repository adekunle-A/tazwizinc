//models for products
const mongoose = require('mongoose')

//create new schma
 const ProductsSchema = new mongoose.Schema({
    productName:{
        type: String,
        require: true
    },
    ProductPrice:{
        type: String,
        require: true
    },
    ProductDescription:{
        type: String,
        require: true
    },
    ProductCreatedDate:{
        type: Date,
        default: Date.now
    }
 });
const  Product = mongoose.model('product', ProductsSchema);
module.exports = Product;