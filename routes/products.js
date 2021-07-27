var express = require('express')
var router = express.Router()
const Products = require('../models/Products');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
router.get('/all', async (req,res,next) => {
    try{
        const allProducts = await Products.getAllProducts();
        res.json({
            payload: allProducts,
            msg: 'Success all products retrieved',
            err: false
        })
    }catch(error){
        console.log('error', error)
        res.json({
            msg: 'Req failed. Could not get info',
            err: true
        })
    }
})

router.get('/product/:id', async (req,res,next) => {
    try{
        res.json({
            
        })
    }catch(error){
        console.log('error', error)
    }
})

module.exports = router