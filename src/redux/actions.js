import axios from 'axios';
import { urls } from '../constants';
import {INCERMENT_ITEM_CART,DECREMENT_ITEM_CART ,GET_ALL_ITEMS} from './actionType'

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

  export const generalGet = ({  id, body, result }) => async dispatch => {

    try {
      let url = urls.baseApi 
      if (id) url += '/'
      if (body) url += '?' + body
      
      const res = await axios({
        method: 'POST',
        url: 'https://api.basalam.com/api/user',
        headers: { 'Accept': 'application/json' },
        data:{query: "{productSearch(size: 20) {products {id name photo(size: LARGE) { url } vendor { name } weight price rating { rating count: signals } } } }"}
      });
  
    
      console.log(JSON.stringify(res.data) );
  
      return dispatch({
        type: GET_ALL_ITEMS,
        value: res.data.data.productSearch.products,
        result: result
      })
    } catch (err) {
      console.log('error inja');
      console.log(err.message);
  
    } finally {
      
    }
  }
  
  