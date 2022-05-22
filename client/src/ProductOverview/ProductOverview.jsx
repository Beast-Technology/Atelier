import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';
import ProductCategory from './ProductCategory.jsx';

function ProductOverview() {
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});
  const productID = 40344;

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
        console.log(response.data);
        setReviews(response.data.results);
      })
  }, []);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
  }, []);

  return (
    <div>
      Product Overview
      <ProductCategory category={product.category}/>
      <StarRating reviews={reviews}/>
    </div>
  )
}

export default ProductOverview;