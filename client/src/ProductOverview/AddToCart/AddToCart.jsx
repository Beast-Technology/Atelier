import React, {useState, useEffect} from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({skus}) {
  const [sku, setSku] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setSku(null);
  }, [skus])

  return(
    <div>
      <SizeSelector skus={skus} setSku={setSku}/>
      <QuantitySelector sku={sku} setQty={setQty}/>
    </div>
  )
}