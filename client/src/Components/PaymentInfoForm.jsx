import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
} from 'react-stripe-elements'
import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PaymentInfoForm = ({cartItems}) => {
    if(!cartItems.length) {
        return (
            <div>
                
            </div>
        )
    }

    return (

        <div>
            {cartItems[0].product}
        </div>
    )
}

export default PaymentInfoForm