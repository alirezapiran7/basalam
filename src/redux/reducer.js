import { INCERMENT_ITEM_CART, DECREMENT_ITEM_CART } from './actionType'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCERMENT_ITEM_CART:
            return { ...state, }

        case DECREMENT_ITEM_CART:
            return { ...state, }

        default:
            return state;
    }
}