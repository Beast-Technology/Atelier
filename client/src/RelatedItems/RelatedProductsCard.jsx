import React, { useState } from 'react';
import CompareModal from './CompareModal.jsx';


function RelatedProductsCard({ relatedItem, showModal, setShow }) {
  function showModel() {
    setShow(true);
  }


  return (

    <div className="RelatedProductsCard">
      <CompareModal showModal={showModal} />
      <img className="card-img" src="" alt="" />
      <button
        className="card-starButton"
        onClick={() => {
          showModel(true);
        }}
        type="button"
      >
        ☆
      </button>
      <div className="card-category">{relatedItem.category}</div>
      <div className="card-name">{relatedItem.name}</div>
      <div className="card-price">
        $
        {parseInt(relatedItem.default_price, 10)}
      </div>
      <div className="card-stars">★★★★★</div>
    </div>
  );
}

export default RelatedProductsCard;

