import React, { useState, useEffect } from 'react';
import { StarRating } from '../helper/Stars.jsx';

function RatingBreakdown({ meta }) {
  const [totalStars, setTotalStars] = useState(0);
  const [divideTotalStars, setDivideTotalStars] = useState(0);
  const [recommended, setRecommended] = useState(0);
  const [starRatings, setStarRatings] = useState([]);

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

  const starDecimal = (((totalStars / divideTotalStars)) * 5).toString().slice(0, 4);

  const getPercentRec = (obj) => {
    const array = Object.values(obj);
    let result = 0;
    result = ((Number(array[1]) / (Number(array[0]) + Number(array[1]))) * 100);
    return result.toString().slice(0, 4);
  };

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

  useEffect(() => {
    if (meta.recommended) {
      setRecommended(getPercentRec(meta.recommended));
    }
  }, [meta]);

  useEffect(() => {
    if (meta.ratings) {
      let values = Object.values(meta.ratings);
      let total = values.reduce((a, b) => {
         a = a + Number(b)
        return a }, 0);
      let result = [];

      for (let value of values) {
        result.push((value / total) * 100)
      };

      setStarRatings(result);
    }
  }, [meta]);

  return (
    <div className="ratingBreakdown">
      {console.log(starRatings)}
      <span className="rbRow1">
        <span className="decimal">{starDecimal}</span>
        <StarRating totalStars={5} stars={Math.round((totalStars / divideTotalStars) * 5)} />
      </span>
      <span className="breakRecommend">
        {`${recommended}% of reviews recommended this product`}
      </span>
      <div>
        <div className="starBar">
          <span>5 stars</span>
          <div className="progress">
            <div className="progress__bar" style={{width: `${starRatings[4]}%`}}></div>
          </div>
        </div>
        <div className="starBar">
          {console.log(starRatings)}
          <span>4 stars</span>
          <div className="progress">
            <div className="progress__bar" style={{width: `${starRatings[3]}%`}}></div>
          </div>
        </div>
        <div className="starBar">
          <span>3 stars</span>
          <div className="progress">
            <div className="progress__bar" style={{width: `${starRatings[2]}%`}}></div>
          </div>
        </div>
        <div className="starBar">
          <span>2 stars</span>
          <div className="progress">
            <div className="progress__bar" style={{width: `${starRatings[1]}%`}}></div>
          </div>
        </div>
        <div className="starBar">
          <span>1 stars</span>
          <div className="progress">
            <div className="progress__bar" style={{width: `${starRatings[0]}%`}}></div>
          </div>
        </div>
      </div>
      {console.log('RatingBreakdown:', meta)}
      {console.log('totalStars:', divideTotalStars)}
    </div>
  );
}

export default RatingBreakdown;
