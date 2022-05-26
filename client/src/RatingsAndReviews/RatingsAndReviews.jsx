import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styling/RatingsAndReviews.css';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewButtons from './ReviewButtons.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews() {
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState([]);
  const [countUp, setCountUp] = useState(2);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        page: 1,
        count: countUp,
      },
    })
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => { console.log(err); });
  }, [countUp]);

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: 40344,
      },
    })
      .then((res) => {
        setMeta(res.data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const onClickMoreReviews = () => {
    setCountUp(countUp + 2);
  };

  return (
    <section>
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <div className="mainPage">
        <div>
          <RatingBreakdown meta={meta} />
          <h3>--ProductBreakdown--</h3>
          <ProductBreakdown meta={meta} />
        </div>
        <ReviewsList reviews={reviews} meta={meta} onClick={onClickMoreReviews} />
        {/* <h3>--ReviewButtons--</h3>
        <ReviewButtons />
        Keyword search low priority */}
      </div>
    </section>
  );
}

export default RatingsAndReviews;
