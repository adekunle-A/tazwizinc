const Router  = require('express');
const User =  require('../../DB/User');
const jwt = require('jsonwebtoken');
const router = Router();
const auth = require('../../authentication')

//auth/user
//get user data
router.get('/user', auth,(req, res) => {
    try {
        console.log(req.user)
        User.findById(req.user.id).select('--password')
            .select('--password')
            .then(user => res.json(user))
    } catch (e) {
      res.status(400).json({ msg: e.message });s
    }
});

//Post   api/authUsers
router.post('/', (req, res) => { 
    const {email, password} = req.body

    User.findOne({email})
        .then(user => {
        if(!user){
            return res.status(400).json({msg:'User does not exists'})
        }else if(user.password != password){
            return res.status(400).json({msg:'Invalid Information Entered'})
        }else{
        //save the user to the database
            jwt.sign(
                {id: user.id},
                "tazwizinc",
                {expiresIn: 3000},
                (err, token) => {
                    if(err){
                        throw err
                    }
                    return res.status(200).json({
                        token, 
                        users:{
                            status:true,
                            id: user.id,
                            email: user.email,
                            password: user.password
                        }
                    })
                }
            )
        }
    })
        .catch(err => res.status(500).json({error: "Error Occured"}))

 
});

module.exports = router;