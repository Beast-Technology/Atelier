import React, {useState, useEffect} from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart({skus}) {
  const [sku, setSku] = useState(null);
  const [qty, setQty] = useState(1);

  console.log(skus);

  useEffect(() => {
    for(let sku_id in skus) {
      setSku(skus[sku_id]);
      return;
    }
  }, [skus])

  return(
    <div>
      <SizeSelector skus={skus} setSku={setSku}/>
      {/* <QuantitySelector sku={sku} setQty={setQty}/> */}
      <button>Add To Cart</button>
    </div>
  )
}