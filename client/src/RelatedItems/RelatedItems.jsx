import React, { useState, useEffect } from 'react';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
const axios = require('axios');
import './RelatedItems.css';

function getRelated(item_id, callback) {
  axios.request({
    url: `/products/${item_id}/related`,
    method: 'GET',
  })
  .then((response)=> {
    // console.log("data came back for getRelated", response);
    callback(response);
  })
  .catch(err => {
    console.error(err);
  })
}

function RelatedItems() {
  const [relatedItems, setRelatedItem] = useState([]);
  const [currentProduct, setProduct] = useState({});

  const productID = 40344;

  // --getCurrentProductInfo-- //

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
    .then(response => {
      // console.log(response.data);
      setProduct(response.data);
    })
  }, []);


  // --getCurrentProductRelatedItems- //

  useEffect(()=> {
    getRelated(productID, (response)=>{
      // console.log('done w data:', response.data)
      let promiseArray = [];
      for (let product of response.data) {
        // console.log(product);
        promiseArray.push(
          axios.request({
            url: `/products/${product}`,
            method: 'GET',
          })
          )

          Promise.all(promiseArray)
          .then((responses)=> {
            // console.log('relatedItems', relatedItems)
            // console.log('responses', responses)
            setRelatedItem(prevState => responses)
          })
        }
      });
    }, [])

    return (
      <section id="RelatedItems">

      <RelatedProductsContainer
      productID={productID}
      relatedItems={relatedItems}
      />
      <br />

      <YourOutfitContainer
      productID={productID}
      relatedItems={relatedItems}
      currentProduct={currentProduct}
      />
      </section>
      );
    }




    export default RelatedItems;


