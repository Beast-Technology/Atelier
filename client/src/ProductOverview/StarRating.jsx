import React, {useState, useEffect} from 'react';

function StarRating({reviews}) {

  return (
    <div>
      <h1>Star Rating</h1>
      {reviews.map(review => (
        <p key={review.review_id}>{review.rating}</p>
      ))}
    </div>
  )
}

export default StarRating;