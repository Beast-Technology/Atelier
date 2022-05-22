import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews() {
  const [reviews, useReviews] = useState([]);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        page: 1,
        count: 10
      }
    })
      .then((res) => {
        useReviews(res.data)
      })
      .catch((err) => {console.log(err)})
  },[])

  return (
    <section>
    {console.log("RatingsAndReviews:", reviews.results)}
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <h3>ReviewsList</h3>
      <ReviewsList reviews={reviews}/>
      <ProductBreakdown />
      <RatingBreakdown />
      <WriteReview />
      {/* Keyword search low priority */}
    </section>
  );
}

export default RatingsAndReviews;
