/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

const thumbnailLength = 50;

const thumbnailOuter = {
  position: 'relative',
  width: '55px',
  height: (thumbnailLength + 5) * 7,
  top: '14%', // 100 divided by 7
};

const thumbnailMiddle = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};

const downArrow = {
  position: 'absolute',
  left: '17.5px',
  width: '20px',
};

const upArrow = {
  position: 'absolute',
  left: '17.5px',
  top: '-20px',
  width: '20px',
};

export default function Thumbnails({
  index, photos, setIndex, setXCoord, xCoord,
}) {
  const [count, setCount] = useState(0);
  const [yCoord, setYCoord] = useState(0);

  const thumbnailInner = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    transition: '600ms',
    gap: '5px',
    margin: '5px',
    top: yCoord,
  };

  const DownArrow = count < (photos.length - 7)
    ? (
      <button
        style={downArrow}
        onClick={() => {
          setCount(count + 1);
          setYCoord(yCoord - 57.5);
        }}
        type="button"
      >
        ↓
      </button>
    )
    : (
      <button
        style={downArrow}
        type="button"
      >
        ↓
      </button>
    );

  const UpArrow = count >= 1
    ? (
      <button
        style={upArrow}
        onClick={() => {
          setCount(count - 1);
          setYCoord(yCoord + 57.5);
        }}
        type="button"
      >
        ↑
      </button>
    )
    : (
      <button
        style={upArrow}
        type="button"
      >
        ↑
      </button>
    );

  return (
    <div id="thumbnail-outer" style={thumbnailOuter}>
      {photos.length > 7 ? UpArrow : ''}
      <div id="thumbnail-middle" style={thumbnailMiddle}>
        <div id="thumbnail-inner" style={thumbnailInner}>
          {photos.map((photo, i) => (index === i
            ? (
              <img
                style={{ border: '3px green solid' }}
                key={photo.thumbnail_url}
                src={photo.thumbnail_url}
                width={thumbnailLength}
                height={thumbnailLength}
              />
            )
            : (
              <img
                style={{border: '3px grey solid' }}
                key={photo.thumbnail_url}
                src={photo.thumbnail_url}
                onClick={() => {
                  setIndex(i);
                  setXCoord(xCoord - ((i - index) * 700));
                }}
                width={thumbnailLength}
                height={thumbnailLength}
              />
            )
          ))}
        </div>
      </div>
      {photos.length > 7 ? DownArrow : ''}
    </div>
  );
}
