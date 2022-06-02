import React, { useState, useEffect } from 'react';

function ProductBreakdown({ meta }) {
  const [comfort, setComfort] = useState('');
  const [fit, setFit] = useState('');
  const [size, setSize] = useState('');
  const [length, setLength] = useState('');
  const [quality, setQuality] = useState('');

  useEffect(() => {
    if (meta.characteristics) {
      if (meta.characteristics.Comfort) {
        setComfort(meta.characteristics.Comfort.value);
      }
      if (meta.characteristics.Size) {
        setSize(meta.characteristics.Size.value);
      }
      if (meta.characteristics.Fit) {
        setFit(meta.characteristics.Fit.value);
      }
      if (meta.characteristics.Length) {
        setLength(meta.characteristics.Length.value);
      }
      if (meta.characteristics.Quality) {
        setQuality(meta.characteristics.Quality.value);
      }
    }
  }, [meta]);

  return (
    <div className="productBreakdown">
      {comfort.length > 0 ? <div className="prodChar">
        <span>Comfort</span>
        <div className="prodBars">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrowDown" viewBox="20 18 35 35" style={{ width: `${(comfort / 5) * 180}%` }}><path d="M24 30 14 20.05H34Z" /></svg>
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
      </div>: <div></div>}
      {quality.length > 0 ? <div className="prodChar">
        <span>Quality</span>
        <div className="prodBars">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrowDown" viewBox="20 18 35 35" style={{ width: `${(quality / 5) * 180}%` }}><path d="M24 30 14 20.05H34Z" /></svg>
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
      </div> : <div></div>}
      {size.length > 0 ? <div className="prodChar">
        <span>Size</span>
        <div className="prodBars">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrowDown" viewBox="20 18 35 35" style={{ width: `${(size / 5) * 180}%` }}><path d="M24 30 14 20.05H34Z" /></svg>
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
      </div> : <div></div>}
      {length.length > 0 ? <div className="prodChar">
        <span>Length</span>
        <div className="prodBars">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrowDown" viewBox="20 18 35 35" style={{ width: `${(length / 5) * 180}%` }}><path d="M24 30 14 20.05H34Z" /></svg>
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
      </div> : <div></div>}
      {fit.length > 0 ? <div className="prodChar">
        <span>Fit</span>
        <div className="prodBars">
          <svg xmlns="http://www.w3.org/2000/svg" className="arrowDown" viewBox="20 18 35 35" style={{ width: `${(fit / 5) * 180}%` }}><path d="M24 30 14 20.05H34Z" /></svg>
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
      </div> : <div></div>}
    </div>
  );
}

export default ProductBreakdown;

