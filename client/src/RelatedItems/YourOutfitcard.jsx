import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stars } from '../helper/Stars.jsx';
import metaToRating from './helper/metaToRating.js';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit,
}) {
  const priceData = yourOutfitItem.style;
  const photoURL = yourOutfitItem.style.photos[0].thumbnail_url ? yourOutfitItem.style.photos[0].thumbnail_url : 'https://tinyurl.com/2p9xcr3y';
  const [rating, setRating] = useState(0);

  // --------------------- render individual card meta on related item id change ------------------- //

  useEffect(() => {
    axios.get(`${process.env.API_URL}/reviews/meta`, {
      params: {
        product_id: yourOutfitItem.id,
      },
    })
      .then(((response) => {
        setRating(metaToRating(response.data).toFixed(2));
      }));
  }, [yourOutfitItem.id]);

  // --------------------- conditionally render price ------------------- //

  let priceDiv;
  if (priceData.sale_price) {
    priceDiv = (
      <div className="card-text">
        <s>$ {priceData.original_price}</s>
        <span style={{ color: 'red' }}>${parseInt(priceData.sale_price, 10)}</span>
      </div>
    );
  } else {
    priceDiv = (
      <div className="card-text">$ {parseInt(priceData.original_price, 10)}</div>
    );
  }

  return (
    <div
      className="ProductsCard"
    >
      <img className="card-img" src={photoURL} alt={yourOutfitItem.name} />
      <button
        type="button"
        className="card-button"
        onClick={() => handleDeleteToOutfit(yourOutfitItem)}
      > x
      </button>
      <div className="card-text">{yourOutfitItem.category}</div>
      <div className="card-name">{yourOutfitItem.name}</div>
      {priceDiv}
      <Stars rating={rating} />
    </div>
  );
}

export default YourOutfitcard;

