/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {getRelated} from '../axiosCalls.js';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './useOutsideClick.js';
import CompareModal from './CompareModal.jsx';
import './RelatedItems.css';

function RelatedItems({product, productID, setProductID}) {
  const [showModal, setShow] = useState(false);
  const [yourOutfitItems, setOutfitItem] = useState([]);
  const [clickedItem, setClickedItem] = useState({});

  // Junsu: moved relatedItems state from App to RelatedItems
  const [relatedItems, setRelatedItems] = useState([]);
  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);


  const ref = useRef();

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
    // Junsu: added style for CSS debugging purposes, delete later
    <section style={{border: '2px purple solid'}} id="RelatedItems">
      <div id="unclickArea" ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={product}
          clickedItem={clickedItem}
        />

        <RelatedProductsContainer
          productID={productID} // Junsu: track
          relatedItems={relatedItems} // Junsu: track
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
          setProductID={setProductID} // Junsu: track
        />
      </div>
      <br />

      {/* <YourOutfitContainer
        productID={productID}
        relatedItems={relatedItems} // Junsu: track
        currentProduct={product} // Junsu: track
        yourOutfitItems={yourOutfitItems}
        setOutfitItem={setOutfitItem}
        photoObject={photoObject}
        metaObject={metaObject}
      /> */}
      <div>
        currentProduct:_
        {product.name}
      </div>
    </section>
  );
}




export default RelatedItems;
