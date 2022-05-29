import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styling/RatingsAndReviews.css';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewButtons from './ReviewButtons.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews({meta}) {
  const [reviews, setReviews] = useState([]);
<<<<<<< HEAD
  const [meta, setMeta] = useState([]);
  const [pageUp, setPageUp] = useState(1);
=======
  const [countUp, setCountUp] = useState(2);
>>>>>>> main
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
        // console.log(res.data);
        setReviews(res.data);
      })
      .catch((err) => { console.log(err); });
  }, [pageUp]);

  const onClickMoreReviews = () => {
    setPageUp(pageUp + 1);
  };

  return (
<<<<<<< HEAD
    <section>
      {console.log(reviews)}
=======
    <section style={{border: '2px blue solid'}}>
>>>>>>> main
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <div className="mainPage">
        <div>
          <RatingBreakdown meta={meta} />
          {/* <ProductBreakdown meta={meta} /> */}
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
