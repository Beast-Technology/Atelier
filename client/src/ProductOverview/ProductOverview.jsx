import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

function ProductOverview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.request({
      url: '/reviews',
      method: 'get',
      params: {
        product_id: 40344,
        count: 100,
      }
    })
      .then(response => {
        console.log(response.data);
        setReviews(response.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      Product Overview
      <StarRating reviews={reviews}/>
    </div>
  )
}

export default ProductOverview;