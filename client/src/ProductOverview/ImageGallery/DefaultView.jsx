/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const outer = {
  position: 'relative',
  width: '700px',
  height: '600px',
};

const middle = {
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
};

const rightArrow = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  right: '0',
  zIndex: '1',
};
const leftArrow = {
  position: 'absolute',
  fontSize: '30px',
  top: '50%',
  zIndex: '1',
};


export default function DefaultView({
  photos, index, setIndex, setShowExpanded,
}) {
  const inner = {
    display: 'flex',
    position: 'absolute',
    transition: '600ms',
    left: 0 - (index * 700),
    cursor: 'zoom-in',
  };

  const RightArrow = (
    <button
      style={rightArrow}
      onClick={() => {
        setIndex(index + 1);
      }}
      type="button"
    >
      ›
    </button>
  );

  const LeftArrow = (
    <button
      style={leftArrow}
      onClick={() => {
        setIndex(index - 1);
      }}
      type="button"
    >
      ‹
    </button>
  );

  return (
    <div id="gallery-outer" style={outer}>
      {index > 0 ? LeftArrow : ''}
      <div id="gallery-middle" style={middle}>
        <div id="gallery-inner" style={inner}>
          {photos.map((photo) => (
            <img
              fetchpriority="high"
              alt="current style of product"
              width="700"
              height="600"
              key={photo.url}
              src={photo.url}
              onClick={() => setShowExpanded(true)}
            />
          ))}
        </div>
      </div>
      {index < (photos.length - 1) ? RightArrow : ''}
    </div>
  );
}
