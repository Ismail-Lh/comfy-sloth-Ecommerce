import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import { useProductsContext } from '../../contexts/products_context';
import { useUserContext } from '../../contexts/user_context';

import logo from '../../assets/logo.svg';
import { SidebarContainer } from './SidebarStyles';

import { links } from '../../utils/constants';
import { CartButtons } from '..';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
          <img src={logo} alt='Comfy Sloth Logo' className='logo' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>

        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
}

export default Sidebar;
