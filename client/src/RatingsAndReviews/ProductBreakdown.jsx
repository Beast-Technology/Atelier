import React, { useState, useEffect } from 'react';

function ProductBreakdown() {
  return (
    <div className="productBreakdown">
      <div className="prodChar">
        <span>Comfort</span>
        <div className="prodBars">
          <div className="progress">
            <div className="progress__bar"></div>
          </div>
          <div className="progress">
            <div className="progress__bar"></div>
          </div>
          <div className="progress">
            <div className="progress__bar"></div>
          </div>
        </div>
        <div className="prodRating">
          <div>poor</div>
          <div>great</div>
          <img src={arrowDown} alt="arrowDown" />
        </div>
      </div>
    </div>
  );
}

export default ProductBreakdown;

// Conditionally render
// Comfort: poor to great 1-5
// Size: too small-perfect-too big 1-5
// Quality: poor to great 1-5
// Length: too small-perfect-too big 1-5
// Fit: too small-perfect-too big 1-5

// Size, Width, Comfort, Quality, Length, and Fit.
// Feedback for characteristics will be on a 5 point scale.
// The range of this scale will depend on the characteristic
// in question. For example, Size can range from (1) “too small”
// to (5) “too big”, with the middle option (3) being “perfect”.
// Using the same 5 point scale for Quality, however, the scale
// would range from (1) “poor” to (5) “great”.
