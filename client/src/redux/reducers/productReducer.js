import * as actionTypes from '../constants/productConstants'

const PRODUCT_INITIAL_STATE = {

}

export const getProductsReducer = (state = PRODUCT_INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state 
    }
}

export const getProductDetails = (state)