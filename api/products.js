const express = require("express");
const router = express.Router();
const Product = require('../DB/Product');

// GET api/products
//@desc  Get All products
//@acesss public

router.get('/', (req, res, next) => { 
    Product.find()
           .sort({ProductCreatedDate: -1})
           .then(products => res.json(products));
});

//POST
router.post('/', (req, res, next) => { 

    const newProduct = new Product({
        productName: req.body.name,
        ProductPrice:  req.body.price,
        ProductDescription:  req.body.description,
    })

    //save the product to the database
    newProduct.save()
              .then(product => res.json(product)) 
});
//DELETE api/product:id
//deletes Product
router.delete('/:id', (req, res, next) => { 
    console.log(req.body)
    console.log(req.params)

    Product.findById(req.params.id)
           .then(product => product.remove()
                .then(() => res.json({sucess:true})
            )).catch(err => res.status(404).json({sucess:false}));
})
//PATCH 
//UPDATE product
router.patch('/:id', (req, res, next) => { 
    Product.findById(req.param.id)
           .then(product => product.update()
                .then(() => res.json({sucess:true})
            )).catch(err => res.status(404).json({sucess:false}));
})
module.exports = router;
