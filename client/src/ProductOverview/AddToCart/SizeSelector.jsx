import React from 'react';
import _ from 'underscore';

export default function SizeSelector({skus, setSize}) {
  return (
    <select>
      {_.map(skus, ({size}, sku) => (
        <option>{size}</option>
      ))}
    </select>
  )
}