import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ProductsProvider } from './contexts/products_context';
import { FilterProvider } from './contexts/filter_context';
import { CartProvider } from './contexts/cart_context';

import App from './App';

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById('root')
);
