import '../styles/NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className= 'navbar'>
            <div className= 'navbar-logo'>
                <h2>Owen's Shopping Cart</h2>
            </div>
            <ul className='navbar-links'>
                <li>
                    <Link to ='/cart'>
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar