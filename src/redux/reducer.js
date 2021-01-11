import { INCERMENT_ITEM_CART, DECREMENT_ITEM_CART, GET_ALL_ITEMS } from './actionType'

const initialState = {
    cart: [],
    cartCount: 0,
    totolaPrice:0

}

export default (state = initialState, action) => {
    switch (action.type) {

        case INCERMENT_ITEM_CART:
           
            let count = 0;
            let totolaPrice = 0;
            const product = action.value;
            let newCart = state.cart.map(pro => {
                count += 1;
                return pro
            })
            count += 1;
            newCart.push(product)
            return { ...state, cartCount: count, cart: newCart }

        case DECREMENT_ITEM_CART:
            let count2 = 0;
            const product2 = action.value;
            let newCart2 = state.cart.filter(pro => {
                if (pro.id !== product2.id) {
                    count2 += 1;
                    return pro
                } 
            })
            return { ...state, cartCount: count2, cart: newCart2 }

        case GET_ALL_ITEMS:
            return {
                ...state,
                [action.result]: action.value
            };

        default:
            return state;
    }
}