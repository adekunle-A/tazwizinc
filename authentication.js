const jwt = require('jsonwebtoken');

function authUser (req, res, next){
    //get token value from front end
   const token = req.header('x-auth-token');
   // if token exists
   if(!token){
       return res.status(401).json({msg:'Unauthorisation denied'})
   }
   try{

   //verify token
   const decodedSecret =jwt.verify(token,"tazwizinc");

   //add user from payload
   req.user = decodedSecret;

   next()

   }catch(e){
    return res.status(400).json({msg:"invalid token"})
   }
}
module.exports = authUser;