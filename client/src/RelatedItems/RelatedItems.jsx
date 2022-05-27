/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from 'react';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './useOutsideClick.js';
import CompareModal from './CompareModal.jsx';
import './RelatedItems.css';

const axios = require('axios');

function getRelated(itemID, callback) {
  axios.request({
    url: `/products/${itemID}/related`,
    method: 'GET',
  })
    .then((response) => {
    // console.log("data came back for getRelated", response);
      callback(response);
    })
    .catch((err) => {
      console.error('error #%d', err);
    });
}

// function getProductStyles(itemID, callback) {
//   axios.request({
//     url: `/products/${itemID}/styles`,
//     method: 'get',
//   })
//     .then((response) => {
//     // console.log("data came back for getRelated", response);
//       callback(response);
//     })
//     .catch((err) => {
//       console.error('error #%d', err);
//     });
// }

function RelatedItems() {
  const [productID, setProductID] = useState(40346);
  const [currentProduct, setProduct] = useState({});
  const [relatedItems, setRelatedItem] = useState([]);
  const [showModal, setShow] = useState(false);
  const [yourOutfitItems, setOutfitItem] = useState([]);

  const [clickedItem, setClickedItem] = useState({});

  const [photoObject, setPhotos] = useState({ 40344: [{ thumbnail_url: 'https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] });

  // --testConsole.logs-- //

  // const productID = 40346;
  // const productID = 40353;
  // console.log('productID', productID);
  // console.log('currentProduct', currentProduct);
  // console.log('relatedItems', relatedItems);
  // console.log('clickedItem', clickedItem);
  // console.log('yourOutfitItems', yourOutfitItems);


  // --getCurrentProductInfo-- //

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then((response) => {
      // console.log(response.data);

        setProduct(() => ({ ...currentProduct, ...response.data }));
      });
  }, [productID]);


  // --getCurrentProductRelatedItems- //

  useEffect(() => {
    getRelated(productID, (response) => {
      const relatedPromiseArray = [];
      for (const product of response.data) {
        relatedPromiseArray.push(
          axios.request({
            url: `/products/${product}`,
            method: 'GET',
          }),
        );
      }
      Promise.all(relatedPromiseArray)
        .then((responses) => {
          const filteredArray = [];
          const responseArray = [];
          for (const reitems of responses) {
            if ((filteredArray.indexOf(reitems.data.id) < 0) && (reitems.data.id !== productID)) {
              filteredArray.push(reitems.data.id);
              responseArray.push(reitems.data);
            }
          }

          setRelatedItem(responseArray);
        });
    });
  }, [productID]);

  // --getPhotos- //

  useEffect(() => {
    const stylePromiseArray = [];
    const allPhotosArray = yourOutfitItems.concat(relatedItems);
    // console.log('allPhotosArray', allPhotosArray);
    for (const allPhotosProduct of allPhotosArray) {
      // console.log('allPhotosProduct', allPhotosProduct);

      const styleID = allPhotosProduct.id;
      stylePromiseArray.push(
        axios.request({
          url: `/products/${styleID}/styles`,
          method: 'GET',
        }),
      );
    }
    Promise.all(stylePromiseArray)
      .then((responses) => {
        const responseObj = {};
        for (const styleItems of responses) {
          const styleItemResultsArray = styleItems.data.results;
          console.log(styleItemResultsArray.entries());
          for (const [i, styleItemResults] of styleItemResultsArray.entries()) {
            if (i === styleItemResultsArray.length - 1) {
              responseObj[styleItems.data.product_id] = styleItemResults.photos;
            } else if (styleItemResults['default?'] === true) {
              responseObj[styleItems.data.product_id] = styleItemResults.photos;
            }
          }
        }
        // console.log(responseObj);
        setPhotos(responseObj);
      });
  }, [relatedItems, yourOutfitItems]);

  const ref = useRef();

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
    <section id="RelatedItems">
      <div id="unclickArea" ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={currentProduct}
          clickedItem={clickedItem}
        />

        <RelatedProductsContainer
          productID={productID}
          relatedItems={relatedItems}
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
          setProductID={setProductID}
          photoObject={photoObject}
        />
      </div>
      <br />

      <YourOutfitContainer
        currentProduct={currentProduct}
        yourOutfitItems={yourOutfitItems}
        setOutfitItem={setOutfitItem}
        photoObject={photoObject}
      />
      <div>
        currentProduct:_
        {currentProduct.name}
      </div>
    </section>
  );
}




export default RelatedItems;




