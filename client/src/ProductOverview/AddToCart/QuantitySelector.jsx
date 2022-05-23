import React, {useState, useEffect} from 'react';

export default function QuantitySelector({sku, setQty}) {
  return (
    <select onChange={(e) => setQty(e.target.value)}>
      {[...Array(sku.quantity)].map((e, i) => (
        <option key={i}>{i}</option>
      ))}
    </select>
  )
}