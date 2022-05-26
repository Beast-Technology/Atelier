import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';

function ReviewsList({ reviews, meta, onClick }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [addReview, setAddReview] = useState(false);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true))
    }
  }, [meta]);

  if (addReview === false) {
    return (
      <div>
        <h3>
          <div className="totalReviews">
            <span>{`${totalReviews} reviews, sorted by`}</span>
            <span className="sorter" onClick={() => setIsActive(!isActive)}>Relative</span>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </h3>
        <table className="reviewsList">
          <tbody>
            {
              (reviews.results || []).map((review, index) => (
                <tr>
                  <ReviewTile review={review} key={index} />
                </tr>
              ))
            }
          </tbody>
        </table>
        <span className="moreReviews" onClick={onClick}>More Reviews</span>
        <span className="addReviews" onClick={() => setAddReview(!addReview)}>Add A Review +</span>
      </div>
    );
  }
  return <AddReview />;
}

export default ReviewsList;
