import React, { } from 'react';


function RelatedProductsCard({ relatedItem, setShow, setClickedItem }) {
  function handleModal() {
    setShow(true);
  }
  function handleClickedItem(item) {
    console.log(item);
    setClickedItem(item);
  }

  return (

    <div className="RelatedProductsCard">
      <img className="card-img" src="" alt="" />
      <button
        className="card-starButton"
        onClick={() => {
          handleModal();
          handleClickedItem(relatedItem);
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

