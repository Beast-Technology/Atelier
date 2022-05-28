import React, { useState, useEffect } from 'react';

import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import Modal from './helper/Modals/Modal.jsx';

import { getMeta, getProduct, getStyles } from './axiosCalls.js';
import { MetaContext } from './context.js';


function App() {
  // Temporary Container to show borders
  const container = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px',
  };
  // Set ProductID/Product State and UseEffect
  const [productID, setProductID] = useState(40346);
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProduct(productID, setProduct);
  }, [productID]);

  // Set Style/Styles State and UseEffect
  const [style, setStyle] = useState({ photos: [], skus: { 0: { quantity: 0, size: '' } } });
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    console.log(productID);
    getStyles(productID, setStyle, setStyles);
  }, [productID]);

  // Set Meta State and UseEffect
  const [meta, setMeta] = useState(0);
  useEffect(() => {
    getMeta(productID, setMeta);
  }, [productID]);

  // Set Modal State
  const [modal, setModal] = useState('');

  return (
    <div style={container}>
      <MetaContext.Provider value={meta}>
        <ProductOverview
          product={product}
          style={style}
          styles={styles}
          setStyle={setStyle}
        />
        <RatingsAndReviews
          meta={meta}
        />
        <QuestionsAndAnswers
          setModal={setModal}
        />
        <RelatedItems
          productID={productID}
          setProductID={setProductID}
          product={product}
          style={style}
        />
      </MetaContext.Provider>
      <Modal modal={modal} />
    </div>
  );
}
export default App;
