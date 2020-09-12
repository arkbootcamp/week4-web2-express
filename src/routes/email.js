const express = require('express')
const router = express.Router()
const EmailController = require('../controllers/email')
router.post('/', EmailController.sendEmail)
module.exports = router