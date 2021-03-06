import React from 'react';

export default function QuantitySelector({ sku, setQty }) {
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
        {sku
          ? [...Array(sku.quantity)].map((e, i) => (
            (i === 0 || i > 15) ? '' : (<option key={i}>{i}</option>)
          ))
          : (<option>OUT OF STOCK</option>)}
      </select>
      <span className="btn btn-primary btn-addtocart">Add To Cart</span>
    </div>
  );

  return (
    <span>
      {sku ? skuSelected : skuNotSelected}
    </span>
  );
}
