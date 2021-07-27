const Product = require('../schemas/productSchema')

const getAllProducts = async () => {
    try{
        const products = await Product.find({})
        return products
    }catch(error){
        console.log('err', error)
    }
}

const getProductById = async (id) => {
    try{
        const product = await Product.findById({id})
        return product
    }catch(error){
        console.log('err', error)
    }
}

module.exports = {
    getAllProducts,
    getProductById
}
