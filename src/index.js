import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ProductsProvider } from './contexts/products_context';
import { FilterProvider } from './contexts/filter_context';
import { CartProvider } from './contexts/cart_context';

import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

// dev-umf9vfah.eu.auth0.com
// lKbHSCxJckyiLij9oTayNbER5WHeajxs

ReactDOM.render(
  <Auth0Provider
    domain='dev-umf9vfah.eu.auth0.com'
    clientId='lKbHSCxJckyiLij9oTayNbER5WHeajxs'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
