
import React, { useState, useEffect, useCallback } from 'react';
import YourOutfitCard from './YourOutfitcard.jsx';

function YourOutfitContainer({
  currentProduct, style,
}) {
  const [yourOutfitItems, setOutfitItems] = useState([]);

  const [addButton, setAddButton] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xCoord, setXCoord] = useState(0);
  const { length } = yourOutfitItems;

  // ---------------------  get yourOutfit items from sessionStorage and set on load ------------------- //

  useEffect(() => {
    const localOutfitItems = JSON.parse(sessionStorage.getItem('ls_outfitItems')) || [];
    if (localOutfitItems) {
      setOutfitItems(localOutfitItems);
    }
  }, []);

  // --------------------- set yourOutfit items to sessionStorage on change of productID ------------------- //

  useEffect(() => {
    sessionStorage.setItem('ls_outfitItems', JSON.stringify(yourOutfitItems));
  }, [yourOutfitItems]);


  // --------------------- show/hide AddButton logic ------------------- //

  useEffect(() => {
    if ((yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  }, [yourOutfitItems, currentProduct.id]);


  // --------------------- add currentProduct to yourOutfitItems ------------------- //

  function handleAddToOutfit() {
    if (!(yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      const currentProductCopy = JSON.parse(JSON.stringify(currentProduct));
      currentProductCopy.style = style;
      setOutfitItems(() => [currentProductCopy, ...yourOutfitItems]);
    }
  }
  // --------------------- delete selected product from yourOutfitItems ------------------- //


  const handleDeleteToOutfit = useCallback((clickedDeleteItem) => {
    const indexOfClicked = yourOutfitItems.findIndex((item) => item.id === clickedDeleteItem.id);

    if (indexOfClicked === length - 1) {
      setOutfitItems(() => [...yourOutfitItems.slice(0, indexOfClicked)]);
    } else {
      setOutfitItems(() => [...yourOutfitItems.slice(0, indexOfClicked), ...yourOutfitItems.slice(indexOfClicked + 1)]);
    }
    if (((length - currentIndex) <= 5) && (xCoord)) {
      setXCoord((x) => x + 220);
    }
    if (currentIndex > 0) {
      setCurrentIndex(() => currentIndex - 1);
    }
  });


  // --------------------- condiitonal rendering of the AddButton/isAre string ------------------- //

  let addButtonDiv;
  let isAreSpan;
  if (addButton) {
    addButtonDiv = (
      <div id="addButtonCard" className="fadeIn">
        <div id="addButtonCard-plus">+</div>
        <button
          type="button"
          id="addButtonCard-button"
          onClick={
        (e) => handleAddToOutfit(e)
      }
        >
          Add <br /> {currentProduct.name} <br /> to the Outfit
        </button>
      </div>
    );
  } else {
    if (currentProduct.name[currentProduct.name.length - 1] === 's') {
      isAreSpan = 'are';
    } else {
      isAreSpan = 'is';
    }
    addButtonDiv = (
      <div id="alreadyInOutfitCard">
        <div> {currentProduct.name} {isAreSpan} in your Outfit Collection </div>
      </div>
    );
  }

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
  if ((length - currentIndex) > 4) {
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
          {addButtonDiv}
          {
          yourOutfitItems.map((yourOutfitItem) => (
            <YourOutfitCard
              yourOutfitItem={yourOutfitItem}
              key={yourOutfitItem.id}
              handleDeleteToOutfit={handleDeleteToOutfit}
            />
          ))
          }
        </div>
      </div>
      {RightArrow}
    </div>
  );
}


export default YourOutfitContainer;


