import React, { useEffect, useContext, createContext, useReducer } from 'react';

import CartReducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');

  return cart ? JSON.parse(localStorage.getItem('cart')) : [];
};

const initialState = {
  cart: getLocalStorage(),
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
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // Toggle the product amount
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  // Clear the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Add the cart item to localStorage API & count the items in the cart
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

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
