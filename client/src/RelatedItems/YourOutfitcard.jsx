import React, { useEffect, useState } from 'react';
import ObjToRating from './Helper/ObjToRating.js';
import { Stars } from '../helper/Stars.jsx';


function YourOutfitcard({
  yourOutfitItem, handleDeleteToOutfit, photoObject, metaObject,
}) {
  const [photoSrcOutfit, setphotoSrcOutfit] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if ((Object.keys(photoObject).length !== 0) && (photoObject[yourOutfitItem.id] !== undefined)) {
      const photoURL = photoObject[yourOutfitItem.id][0].thumbnail_url;
      if (photoURL !== null) {
        setphotoSrcOutfit(() => photoURL);
      } else {
        setphotoSrcOutfit(() => 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png');
      }
    }
  }, [photoObject, yourOutfitItem]);

  useEffect(() => {
    if ((Object.keys(metaObject).length !== 0) && (metaObject[yourOutfitItem.id] !== undefined)) {
      setRating(ObjToRating(metaObject[yourOutfitItem.id]));
    }
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

