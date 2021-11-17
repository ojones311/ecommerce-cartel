import {Link} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
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
                <h4>$ {getCartSum()}</h4>
            </div>
            <div className='payment-info'>
                <h4>Enter payment info:</h4>
                <PaymentInfoForm />
            </div>
        </div>
    )
}

export default Checkout