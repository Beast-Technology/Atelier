import React, {useState, useEffect} from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({skus}) {
  const [sku, setSku] = useState(skus[0]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    for(let sku_id in skus) {
      setSku(skus[sku_id]);
      return;
    }
  }, [skus])

  return(
    <div>
      <SizeSelector skus={skus} setSku={setSku}/>
      <QuantitySelector sku={sku} setQty={setQty}/>
      <div>Add to Cart</div>
    </div>
  )
}