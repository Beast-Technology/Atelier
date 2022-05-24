import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewTile from './ReviewTile.jsx';

function ReviewsList({ reviews, meta }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(reviews.count)
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true))
    }
  },[meta])

  const onClickMoreReviews = () => {
    setCount(count + 2)
  }

  return (
    <div>
      <h3>
        {totalReviews} reviews, sorted by
        <button onClick={onClick}>
          <span>Relative</span>
        </button>
      </h3>
      <table>
        <tbody>
          {
            (reviews.results || []).map((review, index) => (
              <tr>
                <ReviewTile review={review} key={index}/>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button onClick={onClickMoreReviews}>More Reviews</button>
      <button>Add A Review</button>
    </div>
  );
}

export default ReviewsList;
