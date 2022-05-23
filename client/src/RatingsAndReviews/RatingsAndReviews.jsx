import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewButtons from './ReviewButtons.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews() {
  const [reviews, useReviews] = useState([]);
  const [meta, useMeta] = useState([]);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        page: 1,
        count: 5
      }
    })
      .then((res) => {
        useReviews(res.data)
      })
      .catch((err) => {console.log(err)})
  },[])

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 40344,
      }
    })
      .then((res) => {
        useMeta(res.data)
      })
      .catch((err) => {console.log(err)})
  },[])

  return (
    <section>
    {console.log("RatingsAndReviews:", reviews.results)}
    {console.log("ProductBreakdown:", meta)}
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <h3>--ReviewsList--</h3>
      <ReviewsList reviews={reviews} />
      <h3>--ProductBreakdown--</h3>
      <ProductBreakdown meta={meta}/>
      <h3>--RatingBreakdown--</h3>
      <RatingBreakdown />
      <h3>--ReviewButtons--</h3>
      <ReviewButtons />
      {/* Keyword search low priority */}
    </section>
  );
}

export default RatingsAndReviews;
