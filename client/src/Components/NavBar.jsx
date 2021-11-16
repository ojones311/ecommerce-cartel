import '../styles/NavBar.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const NavBar = ({click}) => {
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }
    return (
        <nav className= 'navbar'>
            <div className= 'navbar-logo'>
                <Link to='/'>
                    <h4>Owen's Shopping Cart</h4>
                </Link>
                {/* <h4>Owen's Shopping Cart</h4> */}
            </div>
            <ul className='navbar-links'>
                <li>
                    <Link to ='/cart' className='cart_link'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo-badge'>{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <Link to ='/shop' className='shop_link'>
                        Shop
                    </Link>
                </li>
            </ul>
            <div className='hamburger-menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar