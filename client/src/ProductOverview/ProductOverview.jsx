import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation/ProductInformation.jsx';
import ProductDescription from './ProductDescription.jsx';
import SocialMedia from './SocialMedia.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

function ProductOverview({ reviews, product }) {

  const [style, setStyle] = useState({photos: [], skus: {0: {quantity: 0, size: ''}}});
  const [styles, setStyles] = useState([]);

  const productID = 40346;


  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then((response) => {
        // console.log(response.data);
        setProduct(response.data);
      });
  }, []);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}/styles`,
      method: 'get',
    })
      .then((response) => {
        // console.log(response.data.results[0]);
        setStyle(response.data.results.find((styleId) => styleId['default?']));
        setStyles(response.data.results);
      });
  }, []);

  return (
    <div id="product-overview" style={{ border: '2px green solid' }}>
      <div style={{ display: 'flex' }}>
        <ImageGallery photos={style.photos} />
        <div>
          <ProductInformation
            style={style}
            product={product}
            reviews={reviews}
          />
          <SocialMedia />
          <StyleSelector
            selectedStyle={style}
            styles={styles}
            setStyle={setStyle}
          />
          <AddToCart skus={style.skus} />
        </div>
      </div>
      <ProductDescription product={product} />
    </div>

  )
}

export default ProductOverview;
