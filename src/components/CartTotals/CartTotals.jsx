import React from 'react';
import { Link } from 'react-router-dom';

import { useCartContext } from '../../contexts/cart_context';
import { formatPrice } from '../../utils/helpers';

import { Wrapper } from './CartTotalsStyles';

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />

          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>

        <Link to='/checkout' className='btn'>
          proceed to checkout
        </Link>
      </div>
    </Wrapper>
  );
};

export default CartTotals;
