import '../styles/ProductScreen.css'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react'
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
       
    },[dispatch,product, match])

    return (
        <div className='productscreen'>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :(
                <>
                    <div className='productscreen_left'>
                <div className='left_image'>
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt='product name'/>
                </div>
                <div className='left_info'>
                    <p className='left_name'>Product 1</p>
                    <p>Price 499.99</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptates officiis dicta nihil architecto consequuntur nisi natus esse ad inventore labore tempore reprehenderit eius debitis, numquam incidunt, beatae sunt alias!</p>
                </div>
            </div>
            <div className='productscreen_right'>
                <div className='right_image'>
                    <div className='right_info'>
                        <p>
                            Price <span>$499.99</span>
                        </p>
                        <p>
                            Status: <span>In Stock</span>
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