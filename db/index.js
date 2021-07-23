//dotenv wont work for some fucking reason 

require('dotenv').config()
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://user-123:user-123@ecommerce-cartel-oj.rxklv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        console.log('Mongo Db Connection Success')
    }catch(error){
        console.log('error',error)
    }
}
// console.log(mongo)
// console.log(port)
module.exports = connectDB