const Product = require('../schemas/productSchema')

const getAllProducts = async () => {
    try{
        const products = await Product.find({})
        return products
    }catch(error){
        console.log('err', error)
    }
}



module.exports = {
    getAllProducts
}
