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

function RelatedItems({product, relatedItems}) {
  // const [relatedItems, setRelatedItem] = useState([]); // Junsu: rep
  // const [currentProduct, setProduct] = useState({});
  const [showModal, setShow] = useState(false);
  const [clickedItem, setClickedItem] = useState({});
  // const [style, setStyle] = useState({ photos: [], skus: { 0: { quantity: 0, size: '' } } });
  // const [styles, setStyles] = useState([]);

  const productID = 40346;


  // --getCurrentProductInfo-- //

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then((response) => {
      // console.log(response.data);
        setProduct(response.data);
      });
  }, []);


  // --getCurrentProductRelatedItems- //

  // useEffect(() => {
  //   getRelated(productID, (response) => {
  //     // console.log('done w data:', response.data)
  //     const promiseArray = [];
  //     for (const product of response.data) {
  //       // console.log(product);
  //       promiseArray.push(
  //         axios.request({
  //           url: `/products/${product}`,
  //           method: 'GET',
  //         }),
  //       );

  //       Promise.all(promiseArray)
  //         .then((responses) => {
  //           // console.log('relatedItems', relatedItems)
  //           console.log('responses', responses)
  //           setRelatedItem(responses);
  //         });
  //     }
  //   });
  // }, []);

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
    // Junsu: added style for CSS debugging purposes, delete later
    <section style={{border: '2px purple solid'}} id="RelatedItems">
      <div id="unclickArea" ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={product}
          clickedItem={clickedItem}
        />

        <RelatedProductsContainer
          productID={productID}
          relatedItems={relatedItems}
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
        />
      </div>
      <br />

      <YourOutfitContainer
        productID={productID}
        relatedItems={relatedItems}
        currentProduct={product}
      />
    </section>
  );
}




export default RelatedItems;




