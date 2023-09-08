import * as types from "./actionTypes"
const initialState = {
    cart: [],
}

export const cartReducer = (state = initialState, { type, payload }) => {
    // console.log("cart_reducer",payload,type);
    switch (type) {
        case types.ADD_TO_CART: {
            return {
                ...state, cart: [...state.cart, payload]
            }
        }
        default: return state
    }
}