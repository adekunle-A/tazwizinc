/**
 * Handles the api routes for customers 
 **/
const express = require("express");
const router = express.Router();
const Customer = require('../../DB/Customer');
const auth = require('../../authMiddleware/authentication')

// GET api/customer
//@desc  Get All customers
//@acesss public

router.get('/', auth, (req, res) => { 
    Customer.find()
           .then(customers => res.json(customers));
});
//get customer by id
router.get('/:id', (req, res) => { 
  Customer.findById(req.params.id)
         .sort({ProductCreatedDate: -1})
         .then(customers => res.json(customers));
})
//POST
router.post('/', (req, res) => { 
    
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        address:  req.body.address,
        approved:  req.body.approved
    })
    //save the product to the database
    newCustomer.save().then(customer => res.json(customer)) 
});

//PATCH
//UPDATE product
router.patch('/:id',async (req, res) => {
  console.log(req.body)
    try {
      const updateData = req.body;
      const options = { new: true }; // return updated document
      const resultResponse = await Customer.findByIdAndUpdate(req.params.id, updateData, options);
      
      if (!resultResponse) {
        res.status(404).json({status: "Customer does not exist"})
      }else{
        res.status(200).json(resultResponse)
      }
    } catch (error) {
        res.status(500).json({error: "Customer Id is not Valid"})
    }
})
module.exports = router;