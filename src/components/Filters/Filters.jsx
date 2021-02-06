import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { useFilterContext } from '../../contexts/filter_context';
import { getUniqueValues, formatPrice } from '../../utils/helpers';

import { Wrapper } from './FiltersStyles';

const Filters = () => {
  const {
    filters: {
      text,
      company,
      category,
      color,
      max_price,
      min_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='search'
              className='search-input'
              onChange={updateFilters}
            />
          </div>

          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((ctg, idx) => (
                <button
                  type='button'
                  key={idx}
                  name='category'
                  onClick={updateFilters}
                  className={`${category === ctg.toLowerCase() && 'active'}`}>
                  {ctg}
                </button>
              ))}
            </div>
          </div>

          <div className='form-control'>
            <h5>company</h5>
            <select
              name='company'
              value={company}
              onChange={updateFilters}
              className='company'>
              {companies.map((comp, idx) => (
                <option value={comp} key={idx}>
                  {comp}
                </option>
              ))}
            </select>
          </div>

          <div className='form-control'>
            <h5>colors</h5>

            <div className='colors'>
              {colors.map((clr, idx) => {
                if (clr === 'all') {
                  return (
                    <button
                      type='button'
                      key={idx}
                      name='color'
                      className={`${
                        color === 'all' ? 'all-btn active' : 'all-btn'
                      }`}
                      onClick={updateFilters}
                      data-color='all'>
                      All
                    </button>
                  );
                }

                return (
                  <button
                    type='button'
                    key={idx}
                    name='color'
                    style={{ background: clr }}
                    className={`${
                      color === clr ? 'color-btn active' : 'color-btn'
                    }`}
                    data-color={clr}
                    onClick={updateFilters}>
                    {color === clr && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              value={price}
              min={min_price}
              max={max_price}
              onChange={updateFilters}
            />
          </div>

          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>

        <button className='clear-btn' onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

export default Filters;
