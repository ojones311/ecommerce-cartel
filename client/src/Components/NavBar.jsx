import '../styles/NavBar.css'

const NavBar = () => {

    return (
        <nav className= 'navbar'>
            <div className= 'navbar-logo'>
                <h2>Owen's Shopping Cart</h2>
            </div>
            <ul className='navbar-links'>
                <li>
                    <Link>
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar