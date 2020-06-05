const express = require("express");
const router = express.Router();
const Customer = require('../DB/Customer');

// GET api/customer
//@desc  Get All customers
//@acesss public

router.get('/', (req, res, next) => { 
    Customer.find()
           .then(customers => res.json(customers));
});

//POST
router.post('/', (req, res, next) => { 
    
    const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        address:  req.body.address,
        approved:  req.body.approved
    })
    console.log(req.body)
    //save the product to the database
    newCustomer.save()
              .then(customer => res.json(customer)) 
});
//PATCH
//UPDATE product
router.patch('/:id',async (req, res) => {
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