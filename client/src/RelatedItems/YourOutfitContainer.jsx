
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitcard.jsx';




function YourOutfitContainer({
  currentProduct, yourOutfitItems, setOutfitItem, photoObject,
}) {
  const [addButton, setAddButton] = useState(true);
  const [numArray, setOutfitNumArray] = useState([]);

  let errorDiv;

  useEffect(() => {
    if ((yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  }, [yourOutfitItems, currentProduct.id]);


  function handleAddToOutfit() {
    if (!(yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setOutfitNumArray(() => [...numArray, currentProduct.id]);
      setOutfitItem(() => [...yourOutfitItems, currentProduct]);
      // setTimeout(() => setAddButton(false), 1000);
      setAddButton(false);
    }
  }

  function handleDeleteToOutfit(e, clickedDeleteItem) {
    e.stopPropagation();

    // console.log('clickedDeleteItem', clickedDeleteItem.id);
    // console.log('numArray', numArray);
    // console.log(numArray.indexOf(clickedDeleteItem.id));
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

  let isAre;


  let addButtonDiv;
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
          Add <br />
          {currentProduct.name}
          <br />
          to the Outfit
        </button>
      </div>
    );
  } else {
    addButtonDiv = (
      <div id="alreadyInOutfitCard">
        <div>
          {currentProduct.name}
          are in your Outfit Collection
        </div>
      </div>
    );
  }
  // console.log(yourOutfitItems);

  return (
    <div id="YourOutfitContainer">
      {
          (yourOutfitItems || []).map((yourOutfitItem) => (
            <YourOutfitCard
              yourOutfitItem={yourOutfitItem}
              key={yourOutfitItem.id}
              handleDeleteToOutfit={handleDeleteToOutfit}
              photoObject={photoObject}
            />
          ))
          }
      {addButtonDiv}

      {errorDiv}
    </div>
  );
}


export default YourOutfitContainer;


