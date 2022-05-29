import React, {useContext} from 'react';
import { Stars } from '../helper/Stars.jsx';
import { MetaContext } from '../context.js';

export default function ProductInformation({style, product}) {
  const {category, name, default_price, slogan} = product;
  const {original_price, sale_price} = style;

  const ratings = useContext(MetaContext);

  return (
    <div>
      <Stars rating={ratings}/>
      <a href="" onClick={(e) => e.preventDefault()}>Read All Reviews</a>
      <div>{category}</div>
      <div>{name}</div>
      {sale_price ?
        (<div><s>${original_price}</s> <span style={{color: 'red'}}>${sale_price}</span></div>) :
        (<div>${original_price}</div>)
      }
    </div>
  )
}