import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';

import { useProductsContext } from "../../contexts/products_context";
import { Wrapper } from './CartButtonsStyles';

export default function CartButtons () {
  const {closeSidebar} = useProductsContext();
   return (
      <Wrapper className="cart-btn-wrapper">
         <Link to='/cart' className="cart-btn" onClick={closeSidebar}>
            Cart
            <span className="cart-container">
               <FaShoppingCart />
               <span className="cart-value">12</span>
            </span>
         </Link>

         <button type="button" className="auth-btn" onClick={closeSidebar}>
            Loggin <FaUserPlus />
         </button>
      </Wrapper>
   );
}
