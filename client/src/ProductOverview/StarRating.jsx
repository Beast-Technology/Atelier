import React, {useState, useEffect} from 'react';

function StarRating({reviews}) {

  console.log(reviews);

  return (
    <div>
      <h1>Star Rating</h1>
      {/* <div>{reviews}</div> */}
      {/* {reviews.map(review => (
        <div>
          <h4>{review.review_id}</h4>
          <p>{review.reviewer_name}</p>
          <p>{review.rating}</p>
          <p>{review.body}</p>
          <p>{review.summary}</p>
        </div>
      ))} */}
    </div>
  )
}

export default StarRating;