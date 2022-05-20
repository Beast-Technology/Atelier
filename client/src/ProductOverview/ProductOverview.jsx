import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews';
const AUTHORIZATION = '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';

function ProductOverview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.request({
      url: API_URL,
      method: 'get',
      headers: {
        Authorization: AUTHORIZATION
      },
      params: {
        product_id: 40344
      }
    })
      .then(response => {
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