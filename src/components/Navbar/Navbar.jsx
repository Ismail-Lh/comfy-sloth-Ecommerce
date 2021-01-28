import React from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';

import { useProductsContext } from "../../contexts/products_context";

import { NavContainer } from './NavbarStyles';
import logo from '../../assets/logo.svg';
import { links } from '../../utils/constants';
import { CartButtons } from '..';

function Navbar () {
  const {openSidebar} = useProductsContext();
   return (
      <NavContainer>
         <div className="nav-center">
            <div className="nav-header">
               <Link to="/">
                  <img src={logo} alt="Comfy Sloth Logo" />
               </Link>
               <button type="button" className="nav-toggle" onClick={openSidebar}>
                  <FaBars />
               </button>
            </div>

            <ul className="nav-links">
               {links.map((link) => {
                  const { id, text, url } = link;
                  return (
                     <li key={id}>
                        <Link to={url}>{text}</Link>
                     </li>
                  );
               })}
            </ul>
            <CartButtons />
         </div>
      </NavContainer>
   );
}

export default Navbar;
