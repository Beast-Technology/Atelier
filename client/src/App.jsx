import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getMeta, getProduct, getStyles, getRelated } from './axiosCalls.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import { MetaContext } from './context.js';


function App() {
  // Junsu: added this style globally
  const container = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px',
  };

  // Junsu: moved certain states to App
  // Junsu: productID and product information
  const [productID, setProductID] = useState(40346);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(productID, setProduct);
  }, [productID]);

  // Junsu: product metadata is provided via MetaContext.Provider
  const [meta, setMeta] = useState({ ratings: { 1: '0' } });
  useEffect(() => {
    getMeta(productID, setMeta);
  }, [productID]);

  const [style, setStyle] = useState({photos: [], skus: {0: {quantity: 0, size: ''}}});
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    getStyles(productID, setStyle, setStyles);
  }, [productID]);


  // Junsu: this is how I'd do related products
  // Alex: relatedItems info should prob live in RelatedItems module
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);


  return (
    <div style={container}>
      <MetaContext.Provider value={meta}>
        <ProductOverview
          meta={meta}
          productID={productID}
          product={product}
          style={style}
          styles={styles}
          setStyle={setStyle}
        />
        <RatingsAndReviews
          meta={meta}
        />
      </MetaContext.Provider>
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
