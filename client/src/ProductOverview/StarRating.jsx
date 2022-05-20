import React, {useState, useEffect} from 'react';
// import Star from './star.svg';

function StarRating({reviews}) {

  const starAvg = reviews.reduce((prev, curr) => {
    const prevRate = prev.rating ? prev.rating : prev;
    return prevRate + curr.rating;
  }, 0)/reviews.length;

  return (
    <div>
      <h1>Star Rating</h1>
      <span>Star Average: {starAvg} Number of Reviews: {reviews.length}</span>
    </div>
  )
}

export default StarRating;