import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

export default function AddToCart() {
  return(
    <div>
      <SizeSelector />
      <QuantitySelector />
      <div>Add to Cart</div>
    </div>
  )
}