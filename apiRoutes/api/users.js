const Router  = require('express');
const User =  require('../../DB/User');
const jwt = require('jsonwebtoken');
const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });s
  }
});

//To STORE New users
router.post('/', (req, res) => { 
  const {email, password} = req.body
  const newUser = new User({
    email: email,
    password: password
})
User.findOne({email})
    .then(user => {
      if(user){
        return res.status(400).json({msg:'User exists'})
      }
      //save the user to the database
      newUser.save()
          .then(user =>{
            jwt.sign(
              {id: user.id},
              "tazwizinc",
              {expiresIn: 3000},
              (err, token) => {
                if(err){
                  throw err
                }
                res.status(200).json({
                  token, 
                  users:{
                     id: user.id,
                     email: user.email,
                     password: user.password
                    }
                  })
              }
            )
        })
    })
    .catch(err => res.status(500).json({error: "Error Occured"}))

 
});

module.exports = router;