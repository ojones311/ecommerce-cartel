//Make http request to our backend to add items and remove them from our cart

import * as actionTypes from '../constants/cartConstants'


export const addToCart = (id, qty) => async (dispatch) => {
    const {data} = await axios.get(`/api/prodcts/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data._name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems) )
} 