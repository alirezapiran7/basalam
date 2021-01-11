import { INCERMENT_ITEM_CART, DECREMENT_ITEM_CART, GET_ALL_ITEMS } from './actionType'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCERMENT_ITEM_CART:
            return { ...state, }

        case DECREMENT_ITEM_CART:
            return { ...state, }

        case GET_ALL_ITEMS:
            return {
                ...state,
                [action.result]: action.value
            };

        default:
            return state;
    }
}