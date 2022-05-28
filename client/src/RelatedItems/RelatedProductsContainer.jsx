
import React, { useEffect, useState } from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsContainer({
  relatedItems, showModal, setShow, setClickedItem, setProductID,
}) {
  const [currentCard, setCurrentCard] = useState(0);
  const { length } = relatedItems;

  useEffect(() => {
    console.log(relatedItems);
  }, [relatedItems]);



  const nextSlide = () => {
    console.log('clickedItem');
    // setCurrentCard(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    console.log('clickedItem');
    // setCurrentCard(current === 0 ? length - 1 : current - 1);
  };

  let RightArrow;
  let LeftArrow;
  // const cardsSHown = 4;
  if (length) {
    LeftArrow = (
      <button
        className="material-symbols-outlined"
        id="product-left-arrow"
        onClick={() => prevSlide()}
        type="button"
      >
        arrow_back_ios
      </button>
    );
  }
  if (length) {
    RightArrow = (
      <button
        className="material-symbols-outlined"
        id="product-right-arrow"
        onClick={() => nextSlide()}
        type="button"
      >
        arrow_forward_ios
      </button>
    );
  }

  return (
    <div id="CardContainer">
      {LeftArrow}
      {
      (relatedItems || []).map((relatedItem) => (
        <RelatedProductsCard
          relatedItem={relatedItem}
          key={relatedItem.id}
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
          setProductID={setProductID}
        />
      ))
      }
      {RightArrow}
    </div>

  );
}

export default RelatedProductsContainer;




