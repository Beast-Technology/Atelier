import React, { useState, useEffect, useRef } from 'react';
import { getRelated } from '../axiosCalls.js';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './useOutsideClick.js';
import CompareModal from './CompareModal.jsx';
import './RelatedItems.css';
import { getPhotosAndMetaForCards } from '../axiosCalls.js';


function RelatedItems({
  product, relatedItems, productID, setProductID, style
}) {
  const [showModal, setShow] = useState(false);
  const [yourOutfitItems, setOutfitItem] = useState([]);
  const [clickedItem, setClickedItem] = useState({});
  const [photoObject, setPhotos] = useState({ 40344: [{ thumbnail_url: '' }] });
  const [metaObject, setMeta] = useState({ 40344: [{ meta: '' }] });

  // Junsu: moved relatedItems state from App to RelatedItems
  const [relatedItems, setRelatedItems] = useState([]);
  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);

  useEffect(() => {
    const allCardsArray = yourOutfitItems.concat(relatedItems);
    getPhotosAndMetaForCards(allCardsArray, setPhotos, setMeta);
  }, [relatedItems, yourOutfitItems]);

  const ref = useRef();

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
  // Junsu: added style for CSS debugging purposes, delete later
    <section style={{ border: '2px purple solid' }} id="RelatedItems">
      <div id="unclickArea" ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={product}
          clickedItem={clickedItem}
        />

        <RelatedProductsContainer
          productID={productID}
          setProductID={setProductID}
          relatedItems={relatedItems}
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
        />
      </div>
      <br />

      <YourOutfitContainer
        currentProduct={product}
        style={style}
        yourOutfitItems={yourOutfitItems}
        setOutfitItem={setOutfitItem}
      />
      <div>
        currentProduct:_
        {product.name}
      </div>
    </section>
  );
}




export default RelatedItems;