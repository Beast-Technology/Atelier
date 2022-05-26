import React, { useState, useEffect } from 'react';
import { StarRating } from '../helper/Stars.jsx';

function RatingBreakdown({ meta }) {
  const [totalStars, setTotalStars] = useState(0);
  const [divideTotalStars, setDivideTotalStars] = useState(0);

  const totalStarsFunction = (obj) => {
    const array = Object.values(obj);
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      result += Number(array[i]) * (i + 1);
    }
    return result;
  };

  const divideTotalStarsFunction = (obj) => {
    const array = Object.values(obj);
    let result = 0;
    for (let i = 0; i < array.length; i += 1) {
      result += Number(array[i]) * 5;
    }
    return result;
  };

  const starDecimal = (((totalStars / divideTotalStars)) * 5).toString().slice(0, 4)

  useEffect(() => {
    if (meta.ratings) {
      setTotalStars(totalStarsFunction(meta.ratings));
    }
  }, [meta]);

  useEffect(() => {
    if (meta.ratings) {
      setDivideTotalStars(divideTotalStarsFunction(meta.ratings));
    }
  }, [meta]);

  return (
    <div>
      <span>
        {starDecimal}
        <StarRating totalStars={5} stars={Math.round((totalStars / divideTotalStars) * 5)} />
      </span>
      {console.log('RatingBreakdown:', meta)}
      {console.log('totalStars:', divideTotalStars)}
      RatingBreakdown
    </div>
  );
}

export default RatingBreakdown;
