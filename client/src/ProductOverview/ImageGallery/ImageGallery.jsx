
import React, { useState, useEffect } from 'react';
import DefaultView from './DefaultView.jsx';
import ExpandedView from './ExpandedView.jsx';
import Thumbnails from './Thumbnails.jsx';

export default function ImageGallery({ product, photos }) {
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [showExpanded, setShowExpanded] = useState(false);

  useEffect(() => {
    setIndex(0);
    setCount(0);
  }, [product]);

  useEffect(() => {
    if (index < count) {
      setCount(count - 1);
    } else if (index > (count + 6)) {
      setCount(count + 1);
    }
  }, [index]);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <ExpandedView
          index={index}
          setIndex={setIndex}
          photos={photos}
          setShowExpanded={setShowExpanded}
          showExpanded={showExpanded}
        />
      </div>
      <Thumbnails
        photos={photos}
        count={count}
        setCount={setCount}
        index={index}
        setIndex={setIndex}
      />
      <DefaultView
        photos={photos}
        index={index}
        setIndex={setIndex}
        setShowExpanded={setShowExpanded}
      />
    </div>
  );
}
