import React from 'react';
import StarRating from './StarRating.jsx';

export default function ProductInformation({style, product, reviews}) {
  const {category, name, default_price, slogan} = product;
  const {original_price, sale_price} = style;

  return (
    <div>
      {(!reviews || reviews.length === 0) ? '' : <StarRating reviews={reviews}/>}
      <div>{category}</div>
      <div>{name}</div>
      {sale_price ?
        (<div><s>${original_price}</s> <span style={{color: 'red'}}>${sale_price}</span></div>) :
        (<div>${original_price}</div>)
      }
    </div>
  )
}