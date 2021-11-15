import '../styles/CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = ({cartItem}) => {
    return (
        <div className='cartitem'>
            <div className='cartitem_image'>
            <img src={cartItem.imageUrl} alt={cartItem.name}/>
            </div>
            <Link to={`/product${cartItem.product}`} className='cartitem_name'>
                <p>{cartItem.name}</p>
            </Link>
            <p className='cartitem _price'>{cartItem.price}</p>
            <select className='cartitem_select' value={cartItem.qty} onChange={()=> console.log('selected')}>
                {[...Array(cartItem.countInStock).keys()].map((x) => (
                    <option key={x +1} value={x + 1}>{x + 1}</option>
                ))}
            </select>
            <button className='cartitem_deletebtn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem 