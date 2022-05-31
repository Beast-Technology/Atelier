
import React, { useState, useEffect, useRef } from 'react';
import DefaultView from './DefaultView.jsx';
import Thumbnails from './Thumbnails.jsx';

export default function ImageGallery({ photos }) {
  const [index, setIndex] = useState(0);
  const [xCoord, setXCoord] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <Thumbnails
        photos={photos}
        index={index}
        xCoord={xCoord}
        setIndex={setIndex}
        setXCoord={setXCoord}
      />
      <DefaultView
        photos={photos}
        index={index}
        xCoord={xCoord}
        setIndex={setIndex}
        setXCoord={setXCoord}
      />
    </div>
  );
}
