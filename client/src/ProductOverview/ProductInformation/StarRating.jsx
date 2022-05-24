import React from 'react';

function StarRating({reviews}) {

  const starAvg = reviews.reduce((prev, curr) => {
    const prevRate = prev.rating ? prev.rating : prev;
    return prevRate + curr.rating;
  }, 0)/reviews.length;

  return (
    <div>
      <p>Star Average: {starAvg.toFixed(2)}</p>
      <a href="">Read All Reviews</a>
    </div>
  )
}

export default StarRating;