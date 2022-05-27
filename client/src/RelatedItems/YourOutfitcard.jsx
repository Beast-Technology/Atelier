import React, { useEffect, useState } from 'react';


function YourOutfitcard({ yourOutfitItem, handleDeleteToOutfit, photoObject }) {
  const [photoSrcOutfit, setphotoSrcOutfit] = useState('');

  useEffect(() => {
    if ((Object.keys(photoObject).length !== 0) && (photoObject[yourOutfitItem.id] !== undefined)) {
      const photoURL = photoObject[yourOutfitItem.id][0].thumbnail_url;
      if (photoURL !== null) {
        setphotoSrcOutfit(() => photoURL);
      } else {
        setphotoSrcOutfit(() => 'https://i.pinimg.com/474x/65/0b/a7/650ba7347e2d8751c157b70d791123b8--geek-humour-friday-humor.jpg');
      }
    }
  }, [photoObject, yourOutfitItem]);

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
      <div className="card-stars">★★★★★</div>
    </div>
  );
}

export default YourOutfitcard;

