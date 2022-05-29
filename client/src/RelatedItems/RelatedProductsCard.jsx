import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stars } from '../helper/Stars.jsx';
import metaToRating from './Helper/MetaObjToRating.js';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [defaultStyle, setDefaultStyle] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.get(`/products/${relatedItem.id}/styles`)
      .then((response) => {
        let defaultStyleData = response.data.results.find((style) => style['default?']);
        if (defaultStyleData === undefined) {
          [defaultStyleData] = response.data.results;
        }
        const url = defaultStyleData.photos[0].thumbnail_url
          ? defaultStyleData.photos[0].thumbnail_url
          : 'https://upload.wikimedia.org/wikipedia/commons/2/26/512pxIcon-sunset_photo_not_found.png';
        setPhotoSrc(url);
        setDefaultStyle(defaultStyleData);
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

  let priceDiv;
  if (defaultStyle.sale_price) {
    priceDiv = (
      <div>
        <s>$ {defaultStyle.original_price}</s>
        <span style={{ color: 'red' }}>${parseInt(defaultStyle.sale_price, 10)}</span>
      </div>
    );
  } else {
    priceDiv = (
      <div>$ {parseInt(defaultStyle.original_price, 10)}</div>
    );
  }

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
      className="ProductsCard"
      id="RelatedProductsCard"
    >
      <img className="card-img" src={photoSrc} alt={relatedItem.name} />
      <button
        type="button"
        className="card-starButton"
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
          setClickedItem(relatedItem);
        }}
      >
        ☆
      </button>
      <div className="card-category">{relatedItem.category}</div>
      <div className="card-name">{relatedItem.name}</div>
      <div className="card-price">
        {priceDiv}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default RelatedProductsCard;



