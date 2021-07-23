require('dotenv').config()

const connectDB = require('../db/index')
const productsData = require('../data/product') 
const Product = require('../models/Product')

connectDB();

const importData = async () => {
    try{
        await Product.deleteMany({})
        await Product.insertMany(productsData)

        console.log('Success. Data imported')
        process.exit()
    }catch(error){
        console.log('error', error)
        process.exit(1)
    }
}

importData();


