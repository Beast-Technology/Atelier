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

  // --------------------- get/set relatedItems from API on change of productID ------------------- //

  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);

  // ---------------------  set relatedItems into sessionStorage ------------------- //

  useEffect(() => {
    const tempRelateditems = JSON.parse(sessionStorage.getItem('ls_relatedItems')) || {};
    let count = 0;
    relatedItems.forEach((item) => {
      if (!tempRelateditems[item.id]) {
        tempRelateditems[item.id] = item;
        count += 1;
      }
    });
    if (count) {
      sessionStorage.setItem('ls_relatedItems', JSON.stringify(tempRelateditems));
    }
  }, [relatedItems]);

  // --------------------- onClick on any div other than referenced, setShow modal to false ------------------- //

  const ref = useRef();
  useOutsideClick(ref, () => {
    setShow(false);
  });


  return (
    <section id="RelatedItems">
      <div className="section-container">
        <h2 className="heading heading-secondary">RELATED ITEMS</h2>
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
      </div>
    </section>
  );
}

export default RelatedItems;

