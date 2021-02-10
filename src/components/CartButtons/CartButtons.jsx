import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

import { useProductsContext } from '../../contexts/products_context';
import { useCartContext } from '../../contexts/cart_context';
import { useUserContext } from '../../contexts/user_context';

import { Wrapper } from './CartButtonsStyles';

export default function CartButtons() {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {!myUser ? (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      ) : (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTo: window.location.origin })}>
          Logout <FaUserMinus />
        </button>
      )}
    </Wrapper>
  );
}
