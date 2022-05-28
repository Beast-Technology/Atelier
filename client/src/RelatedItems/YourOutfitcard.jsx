import React, { useEffect, useState } from 'react';
import { setPhotoObjectCard, setMetaObjectCard } from './Helper/setCardObjects.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit, photoObject, metaObject,
}) {
  const [photoSrcOutfit, setPhotoSrc] = useState('');
  const [rating, setRating] = useState(0);

  // ---set PhotoObject for single Card --- //

  useEffect(() => {
    setPhotoObjectCard(photoObject, yourOutfitItem, setPhotoSrc);
  }, [photoObject, yourOutfitItem]);

  // ---set metaObject for single Card --- //

  useEffect(() => {
    setMetaObjectCard(metaObject, yourOutfitItem, setRating);
  }, [metaObject, yourOutfitItem]);

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

