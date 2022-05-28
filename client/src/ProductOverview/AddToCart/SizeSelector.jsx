import React from 'react';
import _ from 'underscore';

export default function SizeSelector({skus, setSku}) {
  return (
    <select onChange={(e) => setSku(skus[e.target.value])}>
      <option defaultValue hidden disabled>SELECT SIZE</option>
      {_.map(skus, ({quantity, size}, sku) => {
        return quantity > 0 ? (
          <option key={sku} value={sku}>{size}</option>
        ) : ''
      })}
      {_.every(skus, sku => sku.quantity === 0) ?
        (<option defaultValue disabled>OUT OF STOCK</option>) : ''}
    </select>
  )
}