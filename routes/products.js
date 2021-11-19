var express = require('express')
var router = express.Router()

const {
    getAllProducts,
    getProductById,
  } = require("../models/Products");
  
  router.get("/all", getAllProducts);
  router.get("/:id", getProductById);
  
  module.exports = router;