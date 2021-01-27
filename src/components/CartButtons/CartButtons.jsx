import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Wrapper } from './CartButtonsStyles';

export default function CartButtons () {
   return (
      <Wrapper className="cart-btn-wrapper">
         <Link to='/cart' className="cart-btn">
            Cart
            <span className="cart-container">
               <FaShoppingCart />
               <span className="cart-value">12</span>
            </span>
         </Link>

         <button type="button" className="auth-btn">
            Loggin <FaUserPlus />
         </button>
      </Wrapper>
   );
}
