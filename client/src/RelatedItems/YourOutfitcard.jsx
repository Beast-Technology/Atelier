import React, { useContext } from 'react';
import { MetaContext } from '../context.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit,
}) {
  const priceData = yourOutfitItem.style;
  const photoURL = yourOutfitItem.style.photos[0].thumbnail_url ? yourOutfitItem.style.photos[0].thumbnail_url : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png';
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
      <img className="card-img" src={photoURL} alt={yourOutfitItem.name} />
      <button
        type="button"
        className="card-removeButton"
        onClick={() => handleDeleteToOutfit(yourOutfitItem)}
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

