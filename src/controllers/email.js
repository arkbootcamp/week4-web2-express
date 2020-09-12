const helpersEamil  = require('../helpers/sendEmail')
module.exports = {
    sendEmail: async(req, res)=>{
        const {to, subject, content} = req.body
        const data =  {
            to,
            subject,
            content
        }
       helpersEamil.send(data)
       .then((result)=>{
           res.send(result)
       })
       .catch((err)=>{
           console.log(err)
       })
    }
}