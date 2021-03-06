/* eslint-disable  */
import React, { useState } from 'react';

const StarSelect = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

export const StarRatingSelect = ({ totalStars, starsRating, setStarsRating }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <StarSelect
          key={i}
          selected={i < starsRating}
          onClick={() => setStarsRating(i + 1)}
        />
      ))}
    </div>
  );
};

const Star = ({ fillTo }) => {
  return (
    <svg
      className="starTest"
      width={20}
      height={20}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.3 24.8L7.65 40L15.2 34.1852V16H0L12.3 24.8Z" fill={fillTo >= .25 ? "goldenrod" : "gray"} />
      <path d="M20 0L15.2 16V34.168L20 30.6V0Z" fill={fillTo >= .5 ? "goldenrod" : "gray"} />
      <path d="M20 0L24.8 16V34.168L20 30.6V0Z" fill={fillTo >= .75 ? "goldenrod" : "gray"} />
      <path
        d="M27.7 24.8L32.35 40L24.8 34.1852V16H40L27.7 24.8Z"
        fill={fillTo >= 1 ? "goldenrod" : "gray"}
      />
    </svg>
  )
};

export const Stars = ({ rating }) => {
  return (
    <div style={{display: "flex", flexFlow: "row nowrap", gap: "4px"}}>
      <Star fillTo={Math.min(rating, 1)} />
      <Star fillTo={rating - 1 > 0 ? Math.min(rating - 1, 1) : 0}/>
      <Star fillTo={rating - 2 > 0 ? Math.min(rating - 2, 1) : 0}/>
      <Star fillTo={rating - 3 > 0 ? Math.min(rating - 3, 1) : 0}/>
      <Star fillTo={rating - 4 > 0 ? Math.min(rating - 4, 1) : 0}/>
    </div>
  )
};