import '../styles/ProductScreen.css'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProductDetails} from '../redux/actions/productActions'
import {addToCart} from '../redux/actions/cartActions'

const ProductScreen = ({match, history}) => {

    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.getProductDetails)
    const {loading, error, product} = productDetails

    useEffect(()=> {
        if(product && match.params.id !== product._id){
            dispatch(getProductDetails(match.params.id))
        }
       
    },[dispatch, product, match])

    return (
        <div className='productscreen'>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :(
                <>
                    <div className='productscreen_left'>
                <div className='left_image'>
                <img src={product.imageUrl} alt={product.name}/>
                </div>
                <div className='left_info'>
                    <p className='left_name'>{product.name}</p>
                    <p>${product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>
            <div className='productscreen_right'>
                <div className='right_image'>
                    <div className='right_info'>
                        <p>
                            Price <span>${product.price}</span>
                        </p>
                        <p>
                            Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock" }</span>
                        </p>
                        <p>
                            Quantity
                            <select>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                            </select>
                        </p>
                        <p>
                            <button type='button'>Add to Cart</button>
                        </p>
                    </div>
                </div>
            </div>
                </>
            )}
            
        </div>
    )
}

export default ProductScreen

