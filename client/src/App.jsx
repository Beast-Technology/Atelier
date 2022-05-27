import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

function App() {
  // Junsu: added this style globally
  const container = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px',
  };

  // Junsu: moved states to App

  const [product, setProduct] = useState({});
  const [style, setStyle] = useState({photos: [], skus: {0: {quantity: 0, size: ''}}});
  const [styles, setStyles] = useState([]);
  const [productID, setProductID] = useState(40346);
  const [meta, setMeta] = useState({ ratings: { 1: '0' } });

  useEffect(() => {
    axios.get('/reviews/meta', {
      params: {
        product_id: productID,
      },
    })
      .then((res) => {
        console.log(res.data);
        setMeta(res.data);
      });
  }, [productID]);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}`,
      method: 'get',
    })
      .then((response) => {
        setProduct(response.data);
      });
  }, [productID]);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}/styles`,
      method: 'get',
    })
      .then((response) => {
        setStyle(response.data.results.find((styleId) => styleId['default?']));
        setStyles(response.data.results);
      });
  }, [productID]);


  // Junsu: this is how I'd do related products
  // Alex: relatedItems info should prob live in RelatedItems module

  const [relatedItemIds, setRelatedItemIds] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  /* Junsu: there's two ways of doing this, the one below combines it, but I'm
   keeping these two useEffects because it might help when changing products */

  // useEffect(() => {
  //   axios.request({
  //     url: `/products/${productID}/related`,
  //     method: 'get',
  //   })
  //     .then((response) => {
  //       setRelatedItemIds(response.data);
  //     });
  // }, []);

  // useEffect(() => {
  //   const array = relatedItemIds.map((relatedItemId) => axios.request({
  //     url: `/products/${relatedItemId}`,
  //     method: 'get',
  //   })
  //     .then((response) => response));
  //   Promise.all(array)
  //     .then((values) => {
  //       console.log(values);
  //       setRelatedItems(values);
  //     });
  // }, [relatedItemIds]);

  useEffect(() => {
    axios.request({
      url: `/products/${productID}/related`,
      method: 'get',
    })
      .then((response) => {
        const array = response.data.map((relatedItemId) => axios.request({
          url: `/products/${relatedItemId}`,
          method: 'get',
        })
          .then((result) => result.data));
        Promise.all(array)
          .then((values) => {
            setRelatedItems(values);
          });
      });
  }, [productID]);


  return (
    <div style={container}>
      <ProductOverview
        meta={meta} // Junsu: to pass down ratings to Star Ratings
        productID={productID}
        product={product}
        style={style}
        styles={styles}
        setStyle={setStyle}
      />
      {/* <RatingsAndReviews
        meta={meta}
      /> */}
      {/* <QuestionsAndAnswers /> */}
      <RelatedItems
        productID={productID}
        setProductID={setProductID}
        product={product}
        relatedItems={relatedItems}
      />
    </div>
  );
}
export default App;
