import React, { useState, useEffect } from 'react';

function ProductBreakdown({ meta }) {
  const [comfort, setComfort] = useState(0);
  const [size, setSize] = useState(0);
  const [fit, setFit] = useState(0);
  const [length, setLength] = useState(0);
  const [quality, setQuality] = useState(0);

  useEffect(() => {
    // setComfort(meta.characteristics.comfort.value);
    // setSize(meta.characteristics.size.value);
    // setFit(meta.characteristics.fit.value);
    // setLength(meta.characteristics.length.value);
    // setQuality(meta.characteristics.quality.value);
  }, [meta]);


  return (
    <div className="productBreakdown">
      {console.log(meta.characteristics)}
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
        </div>
      </div>
      <div className="prodChar">
        <span>Size</span>
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
          <div>too small</div>
          <div>perfect</div>
          <div>too big</div>
        </div>
      </div>
      <div className="prodChar">
        <span>Quality</span>
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
        </div>
      </div>
      <div className="prodChar">
        <span>Length</span>
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
          <div>too small</div>
          <div>perfect</div>
          <div>too big</div>
        </div>
      </div>
      <div className="prodChar">
        <span>Fit</span>
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
          <div>too small</div>
          <div>perfect</div>
          <div>too big</div>
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
