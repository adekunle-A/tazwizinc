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
        address:  req.body.price,
        approve:  req.body.status,
    })

    //save the product to the database
    newCustomer.save()
              .then(customer => res.json(customer)) 
});
//PATCH
router.patch('/:id', (req, res, next) => { 


});
module.exports = router;