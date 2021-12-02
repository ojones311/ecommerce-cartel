var express = require('express')
var router = express.Router()

const {
    postCharge
} = require('../models/Payments')


router.post('/post/charge', postCharge)

module.exports = router 