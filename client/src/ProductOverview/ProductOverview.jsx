/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import ProductDescription from './ProductDescription.jsx';
import SocialMedia from './SocialMedia.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import './ProductOverview.css';

function ProductOverview(
  {
    product, setStyle, style, styles,
  },
) {
  return (
    <section
      id="product-overview"
    >
      <div className="section-container">
        <div style={
          {
            display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '20px',
          }
        }
        >
          <ImageGallery
            photos={style.photos}
            product={product}
          />
          <div className="product-info-container">
            <ProductInformation
              style={style}
              product={product}
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
    </section>
  );
}

export default ProductOverview;
