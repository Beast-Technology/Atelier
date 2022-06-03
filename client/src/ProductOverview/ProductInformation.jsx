/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { Stars } from '../helper/Stars.jsx';
import { MetaContext } from '../context.js';

export default function ProductInformation({ style, product }) {
  const { category, name } = product;
  const { original_price, sale_price } = style;

  const ratings = useContext(MetaContext);

  return (
    <div className="product-info">
      <span className="product-category">{category}</span>
      <h1 className="heading heading-primary">{name}</h1>
      {sale_price
        ? (<div><s>${original_price}</s> <span style={{ color: 'red' }}>${sale_price}</span></div>)
        : (<div className="product-price">${original_price}</div>)}
      <div className="product-rr">
        <Stars rating={ratings} />
        <a className="link" href="#reviews">Read All Reviews</a>
      </div>
    </div>
  );
}
