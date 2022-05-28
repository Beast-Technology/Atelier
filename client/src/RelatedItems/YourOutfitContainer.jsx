
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitcard.jsx';




function YourOutfitContainer({
  currentProduct, yourOutfitItems, setOutfitItem, photoObject, metaObject,
}) {
  const [addButton, setAddButton] = useState(true);
  const [numArray, setOutfitNumArray] = useState([]);

  // ---show/hide AddButton --- //

  useEffect(() => {
    if ((yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  }, [yourOutfitItems, currentProduct.id]);

  // ---add currentProduct to yourOutfitItems and set index of added item in outfitNumArray --- //

  function handleAddToOutfit() {
    if (!(yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setOutfitNumArray(() => [...numArray, currentProduct.id]);
      setOutfitItem(() => [...yourOutfitItems, currentProduct]);
      setAddButton(false);
    }
  }
  // ---delete selected product from yourOutfitItems and remove index of deleted item in outfitNumArray --- //

  function handleDeleteToOutfit(e, clickedDeleteItem) {
    e.stopPropagation();
    const indexOfClicked = numArray.indexOf(clickedDeleteItem.id);
    if (indexOfClicked !== numArray.length - 1) {
      setOutfitItem(() => [...yourOutfitItems.slice(0, indexOfClicked), ...yourOutfitItems.slice(indexOfClicked + 1)]);
      setOutfitNumArray(() => [...numArray.slice(0, indexOfClicked), ...numArray.slice(indexOfClicked + 1)]);
    } else {
      setOutfitItem(() => [...yourOutfitItems.slice(0, indexOfClicked)]);
      setOutfitNumArray(() => [...numArray.slice(0, indexOfClicked)]);
    }
    setAddButton(true);
  }


  // ---condiitonal rendering of the AddButton/isAre string --- //
  let addButtonDiv;
  let isAre;
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
      isAre = 'are';
    } else {
      isAre = 'is';
    }
    addButtonDiv = (
      <div id="alreadyInOutfitCard">
        <div> {currentProduct.name} {isAre} in your Outfit Collection </div>
      </div>
    );
  }

  return (
    <div id="YourOutfitContainer">
      {
          (yourOutfitItems || []).map((yourOutfitItem) => (
            <YourOutfitCard
              yourOutfitItem={yourOutfitItem}
              key={yourOutfitItem.id}
              handleDeleteToOutfit={handleDeleteToOutfit}
              photoObject={photoObject}
              metaObject={metaObject}
            />
          ))
          }
      {addButtonDiv}
    </div>
  );
}


export default YourOutfitContainer;


