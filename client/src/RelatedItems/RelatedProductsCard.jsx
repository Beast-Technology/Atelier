import React, { useEffect, useState } from 'react';
import { setPhotoObjectCard, setMetaObjectCard } from './Helper/setCardObjects.js';
import { Stars } from '../helper/Stars.jsx';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID, photoObject, metaObject,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setPhotoObjectCard(photoObject, relatedItem, setPhotoSrc);
  }, [photoObject, relatedItem]);

  // ---set metaObject for single Card --- //

  useEffect(() => {
    setMetaObjectCard(metaObject, relatedItem, setRating);
  }, [metaObject, relatedItem]);

  function handleModal() {
    setShow(true);
  }
  function handleClickedItem(e, item) {
    e.stopPropagation();
    setClickedItem(item);
  }
  function handleClickedCard(item) {
    setProductID(item.id);
  }

  // required accessibility feature (possible)
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setProductID(relatedItem);
    }
  }

  return (
    <div
      onClick={() => { handleClickedCard(relatedItem); }}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
      className="RelatedProductsCard"
    >
      <div className="card-img-container">
        <img className="card-img" src={photoSrc} alt={relatedItem.name} />
      </div>
      <button
        className="card-starButton"
        onClick={(e) => {
          handleModal();
          handleClickedItem(e, relatedItem);
        }}
        type="button"
      >
        ☆
      </button>
      <div className="card-category">{relatedItem.category}</div>
      <div className="card-name">{relatedItem.name}</div>
      <div className="card-price">
        $ {parseInt(relatedItem.default_price, 10)}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default RelatedProductsCard;



