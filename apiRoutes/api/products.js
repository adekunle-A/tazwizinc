const express = require("express");
const router = express.Router();
const Product = require('../../DB/Product');
const auth = require('../../authentication')

// GET api/products
//@desc  Get All products
//@acesss public

router.get('/', (req, res, next) => { 
    Product.find()
           .sort({ProductCreatedDate: -1})
           .then(products => res.json(products));
});
//get by id
//get Product
router.get('/:id', (req, res, next) => { 
    console.log(req.body)
    console.log(req.params)
    Product.findById(req.params.id)
           .sort({ProductCreatedDate: -1})
           .then(products => res.json(products));
})
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
    Product.findById(req.params.id)
           .then(product => product.remove()
                .then(() => res.json({sucess:true})
            )).catch(err => res.status(404).json({sucess:false}));
})

//UPDATE product
router.patch('/:id',async (req, res) => {
    try {
      const updateData = req.body;
      const options = { new: true }; // return updated document
      const resultResponse = await Product.findByIdAndUpdate(req.params.id, updateData, options);
      
      if (!resultResponse) {
        res.status(404).json({status: "Product does not exist"})
      }else{
        res.status(200).json(resultResponse)
      }
    } catch (error) {
        res.status(500).json({error: "Product Id is not Valid"})
    }
})
module.exports = router;
