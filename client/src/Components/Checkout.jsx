import {Link} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {StripeProvider, Elements} from 'react-stripe-elements'
import PaymentInfoForm from '../Components/PaymentInfoForm'

const Checkout = () => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart 

    const getCartSum = () => {
        return cartItems.reduce((price,item) => item.price * item.qty + price,0)
    }
    return (
        <div>
            <div className='checkout-heading'>
                <h2>Checkout</h2> 
            </div>
            <div className='order-summary'>
                <StripeProvider apiKey='pk_test_51JxK9rKDldnMqvtC3fppWJVFnrr5ZLWwI6nXo7ZqPjX75L4YsqUVF5okVY7JKrbA3yx7zYXOuUm5fTRQ9HkPSXl500ztwLonBp'>
                    <Elements>
                        <PaymentInfoForm cartItems= {cartItems}/>
                    </Elements>
                </StripeProvider>
                {/* <h4>$ {getCartSum()}</h4>    */}
            </div>
            {/* <div className='payment-info'>
                <h4>Enter payment info:</h4>
                <PaymentInfoForm cartItems= {cartItems}/>
            </div> */}
        </div>
    )
}

export default Checkout