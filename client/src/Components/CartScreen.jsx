import '../styles/CartScreen.css'
import CartItem from '../Components/CartItem'
// import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {addToCart, removeFromCart} from '../redux/actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id,qty))
    }

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty,0)  
    }

    const getCartSum = () => {
        return cartItems.reduce((price,item) => item.price * item.qty + price,0)
    }
    return (
        <div className='cartscreen'>
            <div className='cartscreen_left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                       Your cart is empty <Link to='/'>Go Back</Link> 
                    </div>
                ): (
                    cartItems.map((item) => <CartItem key={item.product}cartItem={item} qtyChangeHandler={qtyChangeHandler} removeFromCartHandler={removeFromCartHandler}/>)
                )}
            </div>
            <div className='cartscreen_right'>
                <div className='cartscreen_info'>
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSum().toFixed(2)}</p>
                </div>
                <div>
                    <Link to= '/checkout'>
                        <button>Proceed To Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartScreen