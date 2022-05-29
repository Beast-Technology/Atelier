import React, { useContext, useRef, useState } from 'react';
import { MetaContext } from '../context.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit, style,
}) {
  // Junsu: extract url from style and set it as state so it's unlinked from style state in App - ie pic won't change when changing style
  const photoSrcOutfit = useRef(style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png');
  const [priceData] = useState(style);
  const rating = useContext(MetaContext);

  let priceDiv;
  if (priceData.sale_price) {
    priceDiv = (
      <div>
        <s>$ {priceData.original_price}</s>
        <span style={{ color: 'red' }}>${parseInt(priceData.sale_price, 10)}</span>
      </div>
    );
  } else {
    priceDiv = (
      <div>$ {parseInt(priceData.original_price, 10)}</div>
    );
  }



  return (
    <div className="ProductsCard">
      <img className="card-img" src={photoSrcOutfit.current} alt={yourOutfitItem.name} />
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

