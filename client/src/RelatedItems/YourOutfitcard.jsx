import React, { useContext, useState } from 'react';
import { MetaContext } from '../context.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit, style,
}) {
  const [currentProductStyleData] = useState(style);
  const rating = useContext(MetaContext);

  let priceDiv;
  if (currentProductStyleData.sale_price) {
    priceDiv = (
      <div>
        <s>$ {currentProductStyleData.original_price}</s>
        <span style={{ color: 'red' }}>${parseInt(currentProductStyleData.sale_price, 10)}</span>
      </div>
    );
  } else {
    priceDiv = (
      <div>$ {parseInt(currentProductStyleData.original_price, 10)}</div>
    );
  }



  return (
    <div className="ProductsCard">
      <img className="card-img" src={currentProductStyleData.photos[0].thumbnail_url} alt={yourOutfitItem.name} />
      <button
        type="button"
        className="card-removeButton"
        onClick={(e) => handleDeleteToOutfit(e, yourOutfitItem)}
      >
        x
      </button>
      <div className="card-category">{yourOutfitItem.category}</div>
      <div className="card-name">{yourOutfitItem.name}</div>
      <div className="card-price">
        {priceDiv}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default YourOutfitcard;

