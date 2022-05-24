import React, {useState, useEffect} from 'react';

export default function QuantitySelector({sku, setQty}) {


  const skuNotSelected = (
    <select disabled>
      <option>-</option>
    </select>
  );

  const skuSelected = (
    <select
      onChange={(e) => setQty(e.target.value)}
    >
      {sku ? [...Array(sku.quantity)].map((e, i) => {
        return i ? (<option key={i}>{i}</option>)
          : '';
      }) : (<option>OUT OF STOCK</option>)}
    </select>
  );

  return (
    <div>
      {sku ? skuSelected : skuNotSelected}
    </div>
  )
}

//(<option key={i} selected hidden disabled>SELECT QUANTITY</option>)