import {INCERMENT_ITEM_CART,DECREMENT_ITEM_CART} from './actionType'

export const incrementItemCart = (product) => async dispatch => {

    return dispatch({
      type: INCREMENT_OPTIONS_TOBASKET,
      value: {
        product: product
      },
    });
  }
  
  export const decrementItemCart = (product) => async dispatch => {
    return dispatch({
      type: decrementItemCart,
      value: {
        product: product
      },
    });
  }
  