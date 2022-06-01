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
  const [pageUp, setPageUp] = useState(1);
  // update page and concat instead of incrementing count
  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: 40344,
        page: pageUp,
        count: 2,
      },
    })
      .then((res) => {
        console.log(res.data.results);
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
    <section>
      {console.log(reviews)}
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <div className="mainPage">
        <div>
          <RatingBreakdown meta={meta} />
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
