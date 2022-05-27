import React, { useEffect, useState } from 'react';
import ObjToRating from './Helper/ObjToRating.js';
import { Stars } from '../helper/Stars.jsx';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID, photoObject, metaObject,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [rating, setRating] = useState(0);

  // console.log(photoObject);
  // console.log(metaObject);

  // ---set PhotoObject for single Card --- //
  useEffect(() => {
    if ((Object.keys(photoObject).length !== 0) && (photoObject[relatedItem.id] !== undefined)) {
      const photoURL = photoObject[relatedItem.id][0].thumbnail_url;
      if (photoURL !== null) {
        setPhotoSrc(() => photoURL);
      } else {
        setPhotoSrc(() => 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png');
      }
    }
  }, [photoObject, relatedItem]);

  // ---set metaObject for single Card --- //

  useEffect(() => {
    if ((Object.keys(metaObject).length !== 0) && (metaObject[relatedItem.id] !== undefined)) {
      setRating(ObjToRating(metaObject[relatedItem.id]));
    }
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
        $
        {parseInt(relatedItem.default_price, 10)}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default RelatedProductsCard;



