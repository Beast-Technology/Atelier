import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ObjToRating from './Helper/ObjToRating.js';
import { Stars } from '../helper/Stars.jsx';

function RelatedProductsCard({
  relatedItem, setShow, setClickedItem, setProductID,
}) {
  const [photoSrc, setPhotoSrc] = useState('');
  const [rating, setRating] = useState(0);

  // Junsu: this gets a thumbnail from default style of relatedItem, if no default
  // style, then first style's thumbnail. if no picture, then nothing for now
  useEffect(() => {
    axios.get(`/products/${relatedItem.id}/styles`)
      .then((response) => {
        let defaultStyle = response.data.results.find((style) => style['default?']);
        if (defaultStyle === undefined) {
          [defaultStyle] = response.data.results;
        }
        const url = defaultStyle.photos[0].thumbnail_url ? defaultStyle.photos[0].thumbnail_url : '';
        setPhotoSrc(url);
      });
  }, [relatedItem.id]);

  // Junsu: this gets the average rating for the relatedItem
  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: relatedItem.id,
      },
    })
      .then(((response) => {
        // console.log(response.data.ratings);
        const { ratings } = response.data;
        let sum = 0;
        let total = 0;
        Object.keys(ratings).forEach((score) => {
          sum += (parseInt(score, 10) * parseInt(ratings[score], 10));
          total += parseInt(ratings[score], 10);
        });
        setRating((sum / total).toFixed(2));
      }));
  }, [relatedItem.id]);



  // Junsu: moved these functions inside the onClick call, can be deleted
  // function handleModal() {
  //   setShow(true);
  // }

  // function handleClickedItem(e, item) {
  //   e.stopPropagation();
  //   setClickedItem(item);
  // }

  // required accessibility feature (possible)
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
        $
        {parseInt(relatedItem.default_price, 10)}
      </div>
      <Stars rating={rating} />
    </div>
  );
}

export default RelatedProductsCard;



