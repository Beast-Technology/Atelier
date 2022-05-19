import React from 'react';

import ProductBreakdown from './ProductBreakdown.jsx';
import ReviewsList from './ReviewsList.jsx';
import WriteReview from './WriteReview.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingsAndReviews() {
  return (
    <section>
      <h2>Ratings and Reviews</h2>
      {/* Create sorting option for display of reviews list */}
      <ReviewsList />
      <ProductBreakdown />
      <RatingBreakdown />
      <WriteReview />
      {/* Keyword search low priority */}
    </section>
  );
}

export default RatingsAndReviews;
