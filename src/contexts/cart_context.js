import React, { useEffect, useContext, createContext, useReducer } from 'react';

import CartReducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Add item to the cart
  const addToCart = (id, color, amount, product) => {
    // console.log(id, color, amount, product);
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // Remove item from the cart
  const removeItem = (id) => {
    console.log('remove Item');
  };

  const toggleAmount = (id, value) => {
    console.log('Toggle amount');
  };

  // Clear the cart
  const clearCart = () => {
    console.log('Clear Cart');
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
