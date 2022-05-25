import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarRatingSelect } from '../helper/Stars.jsx';

import ReviewTile from './ReviewTile.jsx';

function ReviewsList({ reviews, meta }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(reviews.count)
  const [addReview, setAddReview] = useState(false);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true))
    }
  },[meta])

  const onClick = () => setIsActive(!isActive);

  const onClickMoreReviews = () => {
    setCount(count + 2)
  };

  const onClickAddReview = () => {
    setAddReview(!addReview)
  };

  if (addReview === false) {
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
        <button onClick={onClickAddReview}>Add A Review</button>
      </div>
    );
  } else {
    return (
      <form>
        <label className="reviewForm">
          Overall Rating: <StarRatingSelect totalStars={5}/>
          Do you recommend this product: <input type="text" />
          Characteristics: <input type="text" />
          Review Summary: <input type="text" />
          Review Body: <input type="text" />
          Upload photos: <input type="text" />
          Username: <input type="text" />
          Email: <input type="text" />
        </label>
        <button>Cancel</button>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ReviewsList;
