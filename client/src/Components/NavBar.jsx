import '../styles/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className= 'navbar'>
            <div className= 'navbar-logo'>
                <h4>Owen's Shopping Cart</h4>
            </div>
            <ul className='navbar-links'>
                <li>
                    <Link to ='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo-badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to ='/shop'>
                        Shop
                    </Link>
                </li>
            </ul>
            <div className='hamburger-menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar