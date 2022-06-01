import React, { useState, useEffect, useRef } from 'react';
import { getRelated } from '../axiosCalls.js';

import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './helper/useOutsideClick.js';
import CompareModal from './CompareModal.jsx';
import './RelatedItems.css';


function RelatedItems({
  product, productID, setProductID, style,
}) {
  const [showModal, setShow] = useState(false);
  const [clickedItem, setClickedItem] = useState({});
  const [relatedItems, setRelatedItems] = useState([]);


  // const [localRelatedItems, setlocalRelatedItems] = useState({});


  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);

  // --------------------- using localStorage ------------------- //

  useEffect(() => {
    const tempRelateditems = JSON.parse(sessionStorage.getItem('ls_relatedItems')) || {};
    relatedItems.forEach((item) => {
      if (!tempRelateditems[item.id]) {
        tempRelateditems[item.id] = item;
      }
      sessionStorage.setItem('ls_relatedItems', JSON.stringify(tempRelateditems));
    });
  }, [relatedItems]);

  // --------------------- localStorage ------------------- //

  const ref = useRef();

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
  // Junsu: added style for CSS debugging purposes, delete later
    <section style={{ border: '2px purple solid' }} id="RelatedItems">
      <div ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={product}
          clickedItem={clickedItem}
        />
      </div>

      <RelatedProductsContainer
        productID={productID}
        setProductID={setProductID}
        relatedItems={relatedItems}
        setShow={setShow}
        setClickedItem={setClickedItem}
      />
      <br />
      <YourOutfitContainer
        currentProduct={product}
        style={style}
      />
    </section>
  );
}

export default RelatedItems;
