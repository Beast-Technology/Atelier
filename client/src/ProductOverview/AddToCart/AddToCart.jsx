import React, { useState, useEffect } from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({ skus }) {
  const [sku, setSku] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSku(null);
  }, [skus]);

  return (
    <div>
      <span className="selector-label">Size</span>
      <SizeSelector skus={skus} setSku={setSku} />
      <span className="selector-label">Quantity</span>
      <QuantitySelector sku={sku} setQty={setQty} />
    </div>
  );
}
