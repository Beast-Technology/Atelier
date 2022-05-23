import React from 'react';
import _ from 'underscore';

export default function SizeSelector({skus, setSku}) {
  return (
    <select onChange={(e) => setSku(skus[e.target.value])}>
      {_.map(skus, ({size}, sku) => (
        <option key={sku} value={sku}>{size}</option>
      ))}
    </select>
  )
}