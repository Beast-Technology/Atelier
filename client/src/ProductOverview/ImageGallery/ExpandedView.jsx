/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
// import DefaultViewIcons from './DefaultViewIcons.jsx';

const expanded = {
  border: '2px solid gray',
  position: 'absolute',
  zIndex: 2,
  backgroundColor: 'grey',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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

export default function ExpandedView({
  index, setIndex, photos, showExpanded, setShowExpanded,
}) {
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

  return showExpanded
    ? (
      <div
        style={expanded}
      >
        <div>
          {LeftArrow}
          <img
            className="expanded-photo"
            src={photos[index].url}
            onClick={() => {
              setShowExpanded(false);
            }}
          />
          {RightArrow}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {photos.map((photo, i) => (i === index ? (
            <button
              type="button"
              style={{ backgroundColor: 'green' }}
            >{i + 1}
            </button>
          )
            : (
              <button
                type="button"
                onClick={() => setIndex(i)}
              >
                {i + 1}
              </button>
            )))}
        </div>
        {/* <DefaultViewIcons /> */}
      </div>
    )
    : '';
}
