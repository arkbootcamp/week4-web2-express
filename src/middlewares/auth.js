const jwt = require('jsonwebtoken')
const helpers = require('../helpers/helpers')
module.exports = {
    verifyAccess: (req, res, next)=>{
      console.log(req.headers.authorization)
      if(!req.headers.authorization){
        return helpers.renponse(res, {message: 'server, need token'}, 401)
      }
     let token = req.headers.authorization
      token = token.split(" ")[1]
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if(err){
          if(err.name ==="JsonWebTokenError"){
            return helpers.renponse(res, {message: 'invalid token'}, 401)
          }else if(err.name === "TokenExpiredError"){
            return helpers.renponse(res, {message: 'token expired'}, 401)
          }
        }
        next()
      });
     
    }
}