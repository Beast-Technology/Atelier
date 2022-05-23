import React, { useState, useEffect } from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';
// import axios from 'axios';
const axios = require('axios');

// TODO: refactor once getProduct becomes a global function as this request should be system-wide
// function getProduct(item_id, callback) {
//   axios.get('/products/', {
//     params: {
//       product_id: item_id
//     }
//   })
//   .then((response)=> {
//     // console.log("data came back for getProduct", response);
//     return response})
//     .catch(err => {
//       console.error(err);
//     })
//   }


function getRelated(item_id, callback) {
  axios.get('/products/related', {
    params: {
      product_id: item_id
    }
  })
  .then((response)=> {
    // console.log("data came back for getRelated", response);
    callback(response);
  })
  .catch(err => {
    console.error(err);
  })
}


function RelatedProductsContainer() {

  const [relatedItems, setState] = useState([]);

  // TODO: add function to update related items/provide a modal from clicking on specific card

  useEffect(()=> {

    getRelated(40344, (response)=>{
      // console.log('done w data:', response.data)
      let promiseArray = [];
      for (let product of response.data) {
        // console.log(product);
        promiseArray.push(axios.get('/products/', {
          params: {
            product_id: product
          }
        }))

        Promise.all(promiseArray)
        .then((responses)=> {
          // console.log('relatedItems', relatedItems)
          // console.log('responses', responses)
          setState(prevState => responses)
        })
      }
    });
  }, [])





  return (
    <div  id="RelatedProductsContainer" style={{
      display: "flex",

      // TODO: Use CSS to clear the content :after
      // content: "",
      // display: "table",
      // clear: "both"
      }}>

    {
      (relatedItems || []).map(relatedItem=> {
        // console.log(relatedItem.data)
        return <RelatedProductsCard relatedItem={relatedItem.data} key={relatedItem.data.id}/>
      })
    }
    </div>
    )
  }


  // RelatedProductsContainer.propTypes = propTypes;
  // RelatedProductsContainer.defaultProps = defaultProps;

  export default RelatedProductsContainer;