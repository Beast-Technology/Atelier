import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styling/RatingsAndReviews.css';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews({ setModal }) {
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState([]);
  const [pageUp, setPageUp] = useState(1);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        page: pageUp,
        count: 2,
      },
    })
      .then((res) => {
        setReviews((currState) => { return currState.concat(res.data.results); });
      })
      .catch((err) => { console.log(err); });
  }, [pageUp]);

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
    setPageUp(pageUp + 1);
  };

  return (
    <section id="reviews">
      <div className="section-container">
        <h2>Ratings and Reviews</h2>
        <div className="mainPage">
          <div>
            <RatingBreakdown meta={meta} />
            <ProductBreakdown meta={meta} />
          </div>
          <div className="right">
            <ReviewsList reviews={reviews} meta={meta} setModal={setModal} onClick={onClickMoreReviews} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RatingsAndReviews;
