import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_CART_QUANTITY,
    TOGGLE_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
  } from '../utils/actions';
  
  const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      // Add your cases here
      default:
        return state;
    }
  }