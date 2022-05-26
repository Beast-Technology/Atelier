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

  // const [style, setStyle] = useState({ photos: [], skus: { 0: { quantity: 0, size: '' } } });
  // const [styles, setStyles] = useState([]);

  // const productID = 40346;
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

      setProduct((currentProduct) => ({ ...currentProduct, ...response.data }));
    });
  }, [productID]);


  // --getCurrentProductRelatedItems- //

  useEffect(() => {
    getRelated(productID, (response) => {
      const promiseArray = [];
      for (const product of response.data) {
        promiseArray.push(
          axios.request({
            url: `/products/${product}`,
            method: 'GET',
          }),
          );
        }
        Promise.all(promiseArray)
        .then((responses) => {
          let filteredArray = [];
          let responseArray = []
          for (const reitems of responses) {
            if ((filteredArray.indexOf(reitems.data.id)<0) && (reitems.data.id !==productID)) {
              filteredArray.push(reitems.data.id)
              responseArray.push(reitems)
            }
          }
          setRelatedItem(responseArray);
        });
      });
    }, [productID]);

    // --getCurrentStyles- //

    // useEffect(() => {
    //   getProductStyles(productID, (response) => {
    //     // console.log(response.data);
    //     // console.log(response.data.results);
    //     // console.log(response.data.results[0]);
    //     setStyle(response.data.results.find((style) => style['default?']));
    //     setStyles(response.data.results);
    //   });
    // }, []);


    // --get/Update photos of each related item - //

    // useEffect(() => {
    //   for (const relatedItem of relatedItems) {
    //     console.log('relatedItem', relatedItem);
    //     getProductStyles(relatedItem.data.id, (response) => {
    //       console.log(response.data.results);
    //       // console.log(response.data.results.find((element) => element['default?']));

    //       relatedItem.data = {
    //         photos: response.data.results,
    //       };

    //     //   // console.log(response.data);
    //     //   // console.log(response.data.results);
    //     //   // console.log(response.data.results[0]);
    //     //   setStyle(response.data.results.find((style) => style['default?']));
    //     //   setStyles(response.data.results);
    //     });
    //   }
    // }, [relatedItems]);

    const ref = useRef();

    useOutsideClick(ref, () => {
      // console.log('You clicked outside');
      setShow(false);
    });


    // { console.log(style.photos); }

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
      />
      </div>
      <br />

      <YourOutfitContainer
      // productID={productID}
      // relatedItems={relatedItems}
      currentProduct={currentProduct}
      yourOutfitItems={yourOutfitItems}
      setOutfitItem={setOutfitItem}
      />
      <div>
      currentProduct:_
      {currentProduct.name}
      </div>
      </section>
      );
    }




    export default RelatedItems;




