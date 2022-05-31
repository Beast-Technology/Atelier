/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const thumbnails = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  margin: '5px',
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

const outer = {
  position: 'relative',
  width: '600px',
  height: '600px',
};

const middle = {
  position: 'relative',
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
};

export default function ImageGallery({ photos }) {
  // Alex's carousel
  const [index, setIndex] = useState(0);
  const [xCoord, setXCoord] = useState(0);

  const RightArrow = index < (photos.length - 1)
    ? (
      <button
        style={rightArrow}
        onClick={() => {
          setIndex(index + 1);
          setXCoord(xCoord - 600);
        }}
        type="button"
      >
        ›
      </button>
    )
    : (
      <button
        style={rightArrow}
        type="button"
        onClick={() => console.log('disabled right arrow')}
      >
        ›
      </button>
    );

  const LeftArrow = index >= 1
    ? (
      <button
        style={leftArrow}
        onClick={() => {
          setIndex(index - 1);
          setXCoord(xCoord + 600);
        }}
        type="button"
      >
        ‹
      </button>
    )
    : (
      <button
        style={leftArrow}
        type="button"
        onClick={() => console.log('disabled left arrow')}
      >
        ‹
      </button>
    );

  const inner = {
    display: 'flex',
    position: 'absolute',
    transition: '600ms',
    left: xCoord,
  };

  // end of Alex's Carousel

  return (
    <>
      <div id="gallery-outer" style={outer}>
        {LeftArrow}
        <div id="gallery-middle" style={middle}>
          <div id="gallery-inner" style={inner}>
            {photos.map((photo) => (
              <img
                alt="current style of product"
                width="600"
                key={photo.url}
                src={photo.url}
              />
            ))}
          </div>
        </div>
        {RightArrow}
      </div>
      <div style={thumbnails}>
        {photos.map((photo, i) => (index === i
          ? (
            <img
              style={{ border: '4px green solid' }}
              key={photo.thumbnail_url}
              src={photo.thumbnail_url}
              onClick={() => {
                setIndex(i);
              }}
              width="50"
              height="50"
            />
          )
          : (
            <img
              style={{border: '2px white solid'}}
              key={photo.thumbnail_url}
              src={photo.thumbnail_url}
              onClick={() => {
                setIndex(i);
              }}
              width="50"
              height="50"
            />
          )
        ))}
      </div>
    </>
  );
}
