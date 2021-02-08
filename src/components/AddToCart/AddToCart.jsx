import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { Wrapper } from './AddToCartStyles';
import { AmountButtons } from '../';

import { useCartContext } from '../../contexts/cart_context';

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const { addToCart } = useCartContext();

  const inc = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount + 1;

      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const dec = () => {
    setAmount((oldAmount) => {
      let newAmount = oldAmount - 1;

      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <Wrapper>
      <div className='colors'>
        <span>Colors : </span>
        <div>
          {colors.map((color, idx) => (
            <button
              type='button'
              key={idx}
              className={`${
                mainColor === color ? 'color-btn active' : 'color-btn'
              }`}
              style={{ background: color }}
              onClick={() => setMainColor(color)}>
              {mainColor === color && <FaCheck />}
            </button>
          ))}
        </div>
      </div>

      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increaseAmount={inc}
          decreaseAmount={dec}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => addToCart(id, mainColor, amount, product)}>
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;
