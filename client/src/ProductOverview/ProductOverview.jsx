import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation/ProductInformation.jsx';
import ProductDescription from './ProductDescription.jsx';
import SocialMedia from './SocialMedia.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';

function ProductOverview() {
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({photos: [], skus: {0: {quantity: 0, size: ''}}});
  const [styles, setStyles] = useState([]);
  const productID = 40346;

  useEffect(() => {
    axios.request({
      url: '/reviews',
      method: 'get',
      params: {
        product_id: productID,
        count: 100,
      }
    })
      .then(response => {
        // console.log(response.data);
        setReviews(response.data.results);
      })
  }, []);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then(response => {
        // console.log(response.data);
        setProduct(response.data);
      })
  }, []);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}/styles`,
      method: 'get',
    })
      .then(response => {
        // console.log(response.data.results[0]);
        setStyle(response.data.results.find(style => style['default?']));
        setStyles(response.data.results);
      })
  }, [])

  const containers = {
    display: 'flex',
  }

  const section = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px'
  }

  return (
    <div style={section}>
      <div style={containers}>
        <ImageGallery photos={style.photos}/>
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
          <AddToCart skus={style.skus}/>
        </div>
      </div>
      <ProductDescription product={product}/>
    </div>

  )
}

export default ProductOverview;