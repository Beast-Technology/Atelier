import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import Sorter from './Sorter.jsx';

function ReviewsList({ reviews, meta, onClick }) {
  const [totalReviews, setTotalReviews] = useState(0);
  const [addReview, setAddReview] = useState(false);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true));
    }
  }, [meta]);

  if (addReview === false) {
    return (
      <div>
        <h3>
          <div className="totalReviews">
            <span>{`${totalReviews} reviews, sorted by`}</span>
            <Sorter />
          </div>
        </h3>
        <table className="reviewsList">
          <tbody>
            {
              (reviews || []).map((review, index) => (
                <tr>
                  <ReviewTile review={review} key={index} />
                </tr>
              ))
            }
          </tbody>
        </table>
        {/* should be a button eslint */}
        <a className="btn btn-outline moreReviews" onClick={onClick}>More Reviews</a>
        <a className="btn btn-primary addReviews" onClick={() => setAddReview(!addReview)}>Add A Review +</a>
      </div>
    );
  }
  return <AddReview />;
}

export default ReviewsList;
