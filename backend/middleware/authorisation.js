
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    
      try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const verify = jwt.verify(token, process.env.KEY);
        req.userid = verify.userId;
        req.role = verify.role
        next();
      }
      catch(error){
       return res.status(401).json({
        msg: 'invalid token'
       })
      }
}