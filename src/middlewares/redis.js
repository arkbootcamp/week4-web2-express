const redis = require('redis')
const client = redis.createClient(6379)
const helper = require('../helpers/helpers')
module.exports = {
    cacheGetAllBook: (req, res, next) =>{
        client.get('getallproduct', (err, data)=>{
            console.log(data)
            if(err) console.log('errornya adalah', err)
            if(data !== null){
                helper.renponse(res, JSON.parse(data), 200)
            }else{
                next()
            }
        })
    },
    clearGetAllbooks: (req, res, next) =>{
        client.del('getallproduct')
        next()
        console.log('htes')
    }
}