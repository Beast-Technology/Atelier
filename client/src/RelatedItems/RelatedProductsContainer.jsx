
import React, { useEffect, useState } from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsContainer({
  relatedItems, setShow, setClickedItem, setProductID,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xCoord, setXCoord] = useState(0);
  const { length } = relatedItems;

  // --------------------- reset current index to 0 on change in relatedItems ------------------- //

  useEffect(() => {
    setCurrentIndex(0);
  }, [relatedItems]);

  // --------------------- handler functions for left/right arrows upon click ------------------- //

  const prevSlide = () => {
    setCurrentIndex(() => currentIndex - 1);
    setXCoord((x) => x + 220);
  };

  const nextSlide = () => {
    setCurrentIndex(() => currentIndex + 1);
    setXCoord((x) => x - 220);
  };

  // --------------------- left/right arrows conditional rendering ------------------- //

  let RightArrow;
  let LeftArrow;
  if (currentIndex >= 1) {
    LeftArrow = (
      <button
        className="arrow left-arrow"
        onClick={() => prevSlide()}
        type="button"
      >
        ‹
      </button>
    );
  } else {
    LeftArrow = (
      <button
        className="arrow left-arrow faded"
        type="button"
      >
        ‹
      </button>
    );
  }
  if ((length - currentIndex) > 5) {
    RightArrow = (
      <button
        className="arrow right-arrow"
        onClick={() => nextSlide()}
        type="button"
      >
        ›
      </button>
    );
  } else {
    RightArrow = (
      <button
        className="arrow right-arrow faded"
        type="button"
      >
        ›
      </button>
    );
  }

  return (
    <div id="CardContainerOutter">
      {LeftArrow}
      <div id="CardContainerMiddle">
        <div style={{ left: xCoord }} id="CardContainerInner">
          {
          (relatedItems || []).map((relatedItem) => (
            <RelatedProductsCard
              key={relatedItem.id}
              relatedItem={relatedItem}
              setShow={setShow}
              setClickedItem={setClickedItem}
              setProductID={setProductID}
            />
          ))
          }
        </div>
      </div>
      {RightArrow}
    </div>
  );
}

export default RelatedProductsContainer;




