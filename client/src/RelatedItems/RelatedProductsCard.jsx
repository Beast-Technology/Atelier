import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stars } from '../helper/Stars.jsx';
import metaToRating from './helper/metaToRating.js';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [defaultStyle, setDefaultStyle] = useState({});
  const [rating, setRating] = useState(0);

  // --------------------- render individual card styles on related item id change ------------------- //

  useEffect(() => {
    axios.get(`/products/${relatedItem.id}/styles`)
      .then((response) => {
        let defaultStyleData = response.data.results.find((style) => style['default?']);
        if (defaultStyleData === undefined) {
          [defaultStyleData] = response.data.results;
        }
        const url = defaultStyleData.photos[0].thumbnail_url
          ? defaultStyleData.photos[0].thumbnail_url
          : 'https://tinyurl.com/2p9xcr3y';
        setPhotoSrc(url);
        setDefaultStyle(defaultStyleData);
      });
  }, [relatedItem.id]);

  // --------------------- render individual card meta on related item id change ------------------- //

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

  // --------------------- conditionally render price ------------------- //

  let priceDiv;
  if (defaultStyle.sale_price) {
    priceDiv = (
      <div className="card-text">
        <s>$ {defaultStyle.original_price}</s>
        <span style={{ color: 'red' }}>${parseInt(defaultStyle.sale_price, 10)}</span>
      </div>
    );
  } else {
    priceDiv = (
      <div className="card-text">$ {parseInt(defaultStyle.original_price, 10)}</div>
    );
  }

  // --------------------- accessability addition ------------------- //

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setProductID(relatedItem);
    }
  }

  return (
    <div
      className="ProductsCard"
      onClick={() => { setProductID(relatedItem.id); }}
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPress}
    >
      <img className="card-img" src={photoSrc} alt={relatedItem.name} />
      <div className="card-img-overlay">
        <div className="card-img-overlay-text">
          SELECT
        </div>
      </div>
      <button
        type="button"
        className="card-button"
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
          setClickedItem(relatedItem);
        }}
      >
        ☆
      </button>
      <div className="card-text">{relatedItem.category}</div>
      <div className="card-name">{relatedItem.name}</div>
      {priceDiv}
      <Stars rating={rating} />
    </div>
  );
}

export default RelatedProductsCard;



