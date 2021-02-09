import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { AmountButtons } from '..';
import { useCartContext } from '../../contexts/cart_context';
import { formatPrice } from '../../utils/helpers';

import { Wrapper } from './CartItemStyles';

const CartItem = ({ id, name, image, price, color, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const incr = () => {};
  const decr = () => {};

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>{formatPrice(price)}</h5>
        </div>
      </div>

      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButtons
        amount={amount}
        increaseAmount={incr}
        decreaseAmount={decr}
      />
      <h5 className='subtotal'>{formatPrice(price * amount)}</h5>
      <button className='remove-btn' onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </Wrapper>
  );
};

export default CartItem;
