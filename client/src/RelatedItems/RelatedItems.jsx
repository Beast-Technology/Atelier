/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect, useRef } from 'react';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './useOutsideClick.js';
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


function RelatedItems() {
  const [relatedItems, setRelatedItem] = useState([]);
  const [currentProduct, setProduct] = useState({});
  const [showModal, setShow] = useState(false);

  const productID = 40344;


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

  useEffect(() => {
    getRelated(productID, (response) => {
      // console.log('done w data:', response.data)
      const promiseArray = [];
      for (const product of response.data) {
        // console.log(product);
        promiseArray.push(
          axios.request({
            url: `/products/${product}`,
            method: 'GET',
          }),
        );

        Promise.all(promiseArray)
          .then((responses) => {
            // console.log('relatedItems', relatedItems)
            // console.log('responses', responses)
            setRelatedItem(responses);
          });
      }
    });
  }, []);

  const ref = useRef();

  useOutsideClick(ref, () => {
    console.log('You clicked outside');
    setShow(false);
  });




  return (
    <section id="RelatedItems">
      <div ref={ref}>
        <RelatedProductsContainer
          productID={productID}
          relatedItems={relatedItems}
          showModal={showModal}
          setShow={setShow}
        />
        <br />

        <YourOutfitContainer
          productID={productID}
          relatedItems={relatedItems}
          currentProduct={currentProduct}
        />
      </div>
    </section>
  );
}




export default RelatedItems;




