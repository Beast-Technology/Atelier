import React, {useState, useEffect} from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({skus}) {
  const [sku, setSku] = useState(skus[0]);

  return(
    <div>
      <SizeSelector skus={skus} setSize={setSku}/>
      <QuantitySelector sku={sku}/>
      <div>Add to Cart</div>
    </div>
  )
}