import React from 'react';


function CompareModal({ showModal }) {
  if (!showModal) {
    return null;
  }
  return (

    <div className="modalCard">
      <div className="card-category">relatedItem.category</div>
      <div className="card-name">relatedItem.name</div>
      <div className="card-price">parseIntrelatedItem.default_price</div>
      <div className="card-stars">★★★★★</div>
    </div>
  );
}

export default CompareModal;

