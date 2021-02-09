import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './CartContentStyles';

import { useCartContext } from '../../contexts/cart_context';
import { CartColumns, CartItem, CartTotals } from '../';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <hr />

      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>

        <button className='link-btn clear-btn' onClick={clearCart}>
          clear shopping cart
        </button>
      </div>

      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;
