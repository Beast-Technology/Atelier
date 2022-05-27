/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, {useState, useEffect} from 'react';
import ProductInformation from './ProductInformation/ProductInformation.jsx';
import ProductDescription from './ProductDescription.jsx';
import SocialMedia from './SocialMedia.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

function ProductOverview({ meta, product, style, setStyle, styles }) {


  return (
    <div id="product-overview" style={{ border: '2px green solid' }}>
      <div style={{ display: 'flex' }}>
        <ImageGallery photos={style.photos} />
        <div>
          <ProductInformation
            style={style}
            product={product}
            meta={meta}
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
  );
}

export default ProductOverview;
