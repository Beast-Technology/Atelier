import React from 'react';


function YourOutfitcard() {

  return (
    <div className="OutfitProductsCard">
    <img className="card-img" src={""} />
    <button className="card-removeButton"> x </button>
    <div className="card-category">{"relatedItem.category"}</div>
    <div className="card-name">{"relatedItem.name"}</div>
    <div className="card-price">${parseInt(100)}</div>
    <div className="card-stars">★★★★★</div>
    </div>
    );
  }

  export default YourOutfitcard;

