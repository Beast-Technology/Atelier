import React from 'react';


function RelatedProductsCard({relatedItem}) {

  return (
    <div className="RelatedProductsCard">
    <img className="card-img" src={""} />
    <button className="card-starButton">☆</button>
    <div className="card-category">{relatedItem.category}</div>
    <div className="card-name">{relatedItem.name}</div>
    <div className="card-price">${parseInt(relatedItem.default_price)}</div>
    <div className="card-stars">★★★★★</div>
    </div>
    );
  }

  export default RelatedProductsCard;

