import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stars } from '../helper/Stars.jsx';
import metaToRating from './Helper/MetaObjToRating.js';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.get(`/products/${relatedItem.id}/styles`)
      .then((response) => {
        let defaultStyle = response.data.results.find((style) => style['default?']);
        if (defaultStyle === undefined) {
          [defaultStyle] = response.data.results;
        }
        const url = defaultStyle.photos[0].thumbnail_url
          ? defaultStyle.photos[0].thumbnail_url
          : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png';
        setPhotoSrc(url);
      });
  }, [relatedItem.id]);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: relatedItem.id,
      },
    })
      .then(((response) => {
        setRating(metaToRating(response.data).toFixed(2));
      }));
  }, [relatedItem.id]);

  // required for accessibility
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setProductID(relatedItem);
    }
  }

  return (
    <div
      onClick={() => { setProductID(relatedItem.id); }}
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
          e.stopPropagation();
          setShow(true);
          setClickedItem(relatedItem);
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



