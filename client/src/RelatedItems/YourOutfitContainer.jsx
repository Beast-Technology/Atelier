
import React, { useState, useEffect } from 'react';
import YourOutfitCard from './YourOutfitcard.jsx';




function YourOutfitContainer({
  currentProduct, yourOutfitItems, setOutfitItem,
}) {
  const [addButton, setAddButton] = useState(true);
  const [numArray, setOutfitNumArray] = useState([]);

  let errorDiv;

  useEffect(() => {

    () => {
      let timer1 = setTimeout(() => setShow(true), 2000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []

    if ((yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      // setAddButton(false);
      setTimeout(() => setAddButton(false), 2000);
    } else {
      // setAddButton(true);
      setTimeout(() => setAddButton(true), 2000);

    }

    return () => {
      clearTimeout(timer1);
    };
  }, [yourOutfitItems, currentProduct.id]);

  function buttonShow() {
    if ((yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      setAddButton(false);
    } else {
      setAddButton(true);
    }
  }

  function handleAddToOutfit() {
    if (!(yourOutfitItems.findIndex((element) => (element.id === currentProduct.id))) >= 0) {
      // setOutfitNumArray((numArray)=> numArray.push(currentProduct.id))
      setOutfitNumArray((numArray) => [currentProduct.id, ...numArray]);
      setOutfitItem((yourOutfitItems) => [currentProduct, ...yourOutfitItems]);

    }
  }

  function handleDeleteToOutfit(e, clickedDeleteItem) {
    e.stopPropagation();

    console.log('clickedDeleteItem', clickedDeleteItem.id);
    console.log('numArray', numArray);
    console.log(numArray.indexOf(clickedDeleteItem.id));
    let indexOfClicked = numArray.indexOf(clickedDeleteItem.id)
    if (indexOfClicked !== numArray.length-1) {
      setOutfitItem((yourOutfitItems)=> [...yourOutfitItems.slice(0, indexOfClicked), ...yourOutfitItems.slice(indexOfClicked+1)]);
      setOutfitNumArray((numArray) => [...numArray.slice(0, indexOfClicked), ...numArray.slice(indexOfClicked+1)]);
    } else {
      setOutfitItem((yourOutfitItems)=> [...yourOutfitItems.slice(0, indexOfClicked)]);
      setOutfitNumArray((numArray) => [...numArray.slice(0, indexOfClicked)]);

    }

    //     {people: this.state.people.filter(function(person) {
    //     return person !== e.target.value
    // })});

  }
  let addButtonDiv;
  if (addButton) {
    addButtonDiv = (
      <div id="addButtonCard">
      <div id="addButtonCard-plus">+</div>
      <button type="button" id="addButtonCard-button" onClick={
        (e) => handleAddToOutfit(e)
        // ()=> buttonShow()
        }>Add to Outfit</button>
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
        (yourOutfitItems || []).map((yourOutfitItem) => (
          <YourOutfitCard
          yourOutfitItem={yourOutfitItem}
          key={yourOutfitItem.id}
          handleDeleteToOutfit={handleDeleteToOutfit}
          />
          ))
        }
        {errorDiv}
        </div>
        );
      }


      export default YourOutfitContainer;


