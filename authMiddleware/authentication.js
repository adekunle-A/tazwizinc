const jwt = require('jsonwebtoken');

function authUser (req, res, next){
    //get token value from front end
   const token = req.header('authToken');
   // if token exists
   if(!token){
       console.log(token)
       return res.status(401).json({msg:'Authorisation denied'})
   }
   try{

   //verify token
   const verifyToken =jwt.verify(token,"tazwizinc");

   //add user from payload
   req.user = verifyToken;

   next()

   }catch(e){
    return res.status(400).json({msg:"invalid token"})
   }
}
module.exports = authUser;