import '../styles/Product.css'
import {Link} from 'react-router-dom'

const Product = ({imageUrl, description, price, productId, name}) => {
    return (
        <div className='product'>
            <p>{name}</p>
            <img src={imageUrl} alt={name}/>
            <div className='product_info'>
                <p className='info_name'>{name}</p>
                <p className='info_description'>{description}</p>
                <p className='info_price'>${price}</p>
                <Link to={`/product/${productId}`} className='info_button'>View</Link> 
            </div>
        </div>
    )
}

export default Product