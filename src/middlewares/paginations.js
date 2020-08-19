const booksModel = require('../models/books')
module.exports = {
    books:async(req, res, next)=>{
        parseInt
        const page = parseInt(req.query.page) || 1;
        const limit = req.query.limit || 9;
        const search = req.query.search;
        const resultData = await booksModel.countbook()
        const totalData = resultData[0].totalData
        const totalPage = Math.ceil(totalData/limit)
        const paginations = {
            totalData,
            totalPage,
            curentPage : page,
            perPage: limit,
            prevPage: page > 1 ?`http://localhost:${process.env.PORT}/api/v1/books?page=${page-1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null,
            nextPage:  page <  totalPage ?`http://localhost:${process.env.PORT}/api/v1/books?page=${page+1}${req.query.limit?'&limit='+limit:''}${search?'search='+search:''}`:null
        }
        req.paginations = paginations
        next();
    }
}