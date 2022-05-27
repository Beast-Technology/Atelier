import React, { useEffect, useState } from 'react';


function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID, photoObject,
}) {
  const [photoSrc, setPhotoSrc] = useState('');

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
      <div className="card-stars">★★★★★</div>
    </div>
  );
}

export default RelatedProductsCard;



