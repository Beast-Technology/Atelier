import React, { useContext } from 'react';
import { MetaContext } from '../../context.js';

function StarRating() {
  const { ratings } = useContext(MetaContext);

  function average() {
    console.log('average invoked');
    let sum = 0;
    let total = 0;
    Object.keys(ratings).forEach((rating) => {
      sum += (parseInt(rating, 10) * parseInt(ratings[rating], 10));
      total += parseInt(ratings[rating], 10);
    });
    return (sum / total).toFixed(2);
  }

  return (
    <div>
      <p>Star Average: {average()}</p>
      <a href="">Read All Reviews</a>
    </div>
  )
}

export default StarRating;