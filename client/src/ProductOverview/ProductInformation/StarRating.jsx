import React, { useContext } from 'react';
import { MetaContext } from '../../context.js';

function StarRating() {
  const ratings = useContext(MetaContext);

  return (
    <div>
      <p>Star Average: {ratings}</p>
      <a href="">Read All Reviews</a>
    </div>
  )
}

export default StarRating;
