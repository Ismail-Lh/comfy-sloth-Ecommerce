import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const CartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    return { ...state };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default CartReducer;
