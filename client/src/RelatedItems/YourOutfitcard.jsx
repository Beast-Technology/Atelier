import React, { useContext, useState } from 'react';
import { MetaContext } from '../context.js';
import ObjToRating from './Helper/ObjToRating.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit, style,
}) {
  // Junsu: extract url from style and set it as state so it's unlinked from style state in App - ie pic won't change when changing style
  const [photoSrcOutfit, setphotoSrcOutfit] = useState(style.photos[0].thumbnail_url);
  const rating = useContext(MetaContext);


  return (
    <div className="OutfitProductsCard">
      <img className="card-img" src={photoSrcOutfit} alt={yourOutfitItem.name} />
      <button
        type="button"
        className="card-removeButton"
        onClick={(e) => handleDeleteToOutfit(e, yourOutfitItem)}
      >
        {' '}
        x
      </button>
      <div className="card-category">{yourOutfitItem.category}</div>
      <div className="card-name">{yourOutfitItem.name}</div>
      <div className="card-price">
        $
        {parseInt(yourOutfitItem.default_price, 10)}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default YourOutfitcard;

