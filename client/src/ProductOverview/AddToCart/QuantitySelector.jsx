import React, {useState, useEffect} from 'react';

export default function QuantitySelector({sku, setQty}) {


  const skuNotSelected = (
    <select disabled>
      <option>-</option>
    </select>
  );

  const skuSelected = (
    <div>
      <select
        onChange={(e) => setQty(e.target.value)}
      >
        {sku ? [...Array(sku.quantity)].map((e, i) => {
          return (i === 0 || i > 15) ? '' : (<option key={i}>{i}</option>);
        }) : (<option>OUT OF STOCK</option>)}
      </select>
      <button>Add To Cart</button>
    </div>
  );

  return (
    <span>
      {sku ? skuSelected : skuNotSelected}
    </span>
  )
}

//(<option key={i} selected hidden disabled>SELECT QUANTITY</option>)