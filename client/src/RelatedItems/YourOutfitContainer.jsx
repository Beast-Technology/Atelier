import React, { useState } from 'react';
import YourOutfitCard from './YourOutfitcard.jsx';




function YourOutfitContainer({ productID, relatedItems, currentProduct }) {
  const [yourOutfitItems, setOutfitItem] = useState([]);
  const [addButton, setAddButton] = useState(true);

  function handleAddToOutfit() {
    if ((yourOutfitItems.findIndex((element) => element.id === currentProduct.id)) >= 0) {
      if (yourOutfitItems.length >= 1) {
        setOutfitItem((prevState) => [...prevState, currentProduct]);
        // console.log("setOutfitItem(prevState => [...prevState, currentProduct]")
        setAddButton(false);
      } else {
        setOutfitItem([currentProduct]);
        // console.log("setOutfitItem([currentProduct])]")
        setAddButton(false);
      }
    } else {
      // TODO: add conditional rendering for the addButton when we change pages to new outfit
      setOutfitItem([currentProduct]);
      setAddButton(false);
    }
  }

  let addButtonDiv;
  if (addButton) {
    addButtonDiv = (
      <div id="addButtonCard">
        <div id="addButtonCard-plus">+</div>
        <button type="button" id="addButtonCard-button" onClick={(e) => handleAddToOutfit(e)}>Add to Outfit</button>
      </div>
    );
  } else {
    addButtonDiv = (<div />);
  }
  // console.log(yourOutfitItems);

  return (
    <div id="YourOutfitContainer">
      {addButtonDiv}
      {
      (yourOutfitItems || []).map((yourOutfitItem) => <YourOutfitCard yourOutfitItem={yourOutfitItem} key={yourOutfitItem.id} />)
    }
    </div>
  );
}


export default YourOutfitContainer;

