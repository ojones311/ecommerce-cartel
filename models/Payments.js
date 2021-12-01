const stripe = require('stripe')('pk_test_51JxK9rKDldnMqvtC3fppWJVFnrr5ZLWwI6nXo7ZqPjX75L4YsqUVF5okVY7JKrbA3yx7zYXOuUm5fTRQ9HkPSXl500ztwLonBp')

const postCharge = async (req, res) => {
    try{
        const {amount, source, receipt_email} = req.body

        const charge = await stripe.charges.create({
            amount,
            currency: 'usd',
            source,
            receipt_email
        })
        if(!charge) throw new Error('charge unsuccessful')

        res.json(200).json({
            charge,
            message: 'charge successful'
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
        console.log('error', error)
    }
    console.log('Do some')
}

module.exports = {
    postCharge
}