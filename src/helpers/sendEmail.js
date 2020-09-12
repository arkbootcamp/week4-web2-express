require('dotenv').config()
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

module.exports = {
    send:(data)=>{
        return new Promise((resolve, reject)=>{
            const mailOptions = {
                from: process.env.EMAIL,
                to: data.to,
                subject: data.subject,
                html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>coba saja</title>
                    <style>
                        .container{
                            height: 200px;
                            width: 400px;
                            margin-right: auto;
                            margin-left: auto;
                            background-color: rebeccapurple;
                            box-shadow: 4px 4px 4px rgba(0, 0, 0, .5);
                        }
                        .container h1{
                            color: red;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>${data.content}</h1>
                    </div>
                </body>
                </html>`
            }
            transporter.sendMail(mailOptions, (err, info) =>{
                if(err){
                    reject(err)
                    throw err;
                }else{
                    response.error = false
                    response.status = 200
                    response.message = "Successfully send email nodemailer"
                    resolve(response)
                }
            })
        })
    }
}