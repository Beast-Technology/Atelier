import React from 'react';


function YourOutfitcard({ yourOutfitItem, handleDeleteToOutfit }) {
  return (
    <div className="OutfitProductsCard">
      <img className="card-img" src="" alt="" />
      <button
        type="button"
        className="card-removeButton"
        onClick={(e)=>handleDeleteToOutfit(e, yourOutfitItem)}
      > x
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

