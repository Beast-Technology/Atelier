import React, { useState, useEffect } from 'react';

import ReviewTile from './ReviewTile.jsx';
import Sorter from './Sorter.jsx';

function ReviewsList({ someReviews, reviews, meta, onClick, setModal, setSelected, selected }) {
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    if (meta.recommended) {
      setTotalReviews(Number(meta.recommended.false) + Number(meta.recommended.true));
    }
  }, [meta]);

  function handleAddReview() {
    setModal({ modalName: 'review' });
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <div>
      <h3>
        <div className="totalReviews">
          <span>{`${totalReviews} reviews, sorted by`}</span>
          <Sorter setSelected={setSelected} selected={selected} />
        </div>
      </h3>
      <table className="reviewsList">
        <tbody>
          {
            (someReviews || []).map((review) => (
              <tr key={review.review_id}>
                <ReviewTile review={review} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <a className="btn btn-outline moreReviews" onClick={onClick}>More Reviews</a>
      <a className="btn btn-primary addReviews" onClick={handleAddReview}>Add A Review +</a>
    </div>
  );
}

export default ReviewsList;
