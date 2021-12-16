import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
} from 'react-stripe-elements'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PaymentInfoForm = ({selectedProduct, stripe, cartItems}) => {

    const [receiptUrl, setReceiptUrl] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        const {token} = await stripe.createToken()

        const order = await axios.post('http://localhost:7000/api/stripe/charge',{
            amount: selectedProduct
        })
    }

    return (

        <div>
            {cartItems[0].product}
        </div>
    )
}

export default PaymentInfoForm