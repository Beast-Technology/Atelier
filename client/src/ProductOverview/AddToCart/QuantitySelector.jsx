import React, {useState, useEffect} from 'react';

export default function QuantitySelector({sku, setQty}) {

  return (
    <select
      onChange={(e) => setQty(e.target.value)}
    >
      {sku.quantity ? [...Array(sku.quantity)].map((e, i) => {
        return i ? (<option key={i}>{i}</option>)
          : (<option key={i} selected hidden disabled>SELECT SIZE</option>);
      }) : (<option>OUT OF STOCK</option>)}
    </select>
  )
}