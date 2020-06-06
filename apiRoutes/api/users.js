const Router  = require('express');
const User =  require('../../DB/User');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error('No users exist');
    res.json(users);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});
//POST
router.post('/', (req, res, next) => { 

    const newUser = new User({
        email: req.body.email,
        password:  req.body.password
    })

    //save the user to the database
    newUser.save()
              .then(user => res.json(user)) 
});

module.exports = router;