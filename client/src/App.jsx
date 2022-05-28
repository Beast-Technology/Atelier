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
    getStyles(productID, setStyle, setStyles);
  }, [productID]);

  // Set Meta State and UseEffect
  const [meta, setMeta] = useState(0);
  useEffect(() => {
    getMeta(productID, setMeta);
  }, [productID]);

<<<<<<< HEAD
  // By default, modal is an empty object {}
  // When using setModal, the syntax is setModal({ modalName, modalData })
    // modalName: Required; a string, decides which modal content to render
    // modalData: Optional; an object, should contain some data you need for the modal
  // Example 1 - setModal: line 14 @ './QuestionsAndAnswers/QAListEntry.jsx'
  // Example 2 - redernModal: line 8 @ './helper/Modals/Modals.jsx'
  const [modal, setModal] = useState({});
=======
  // Set Modal State
  const [modal, setModal] = useState('');
>>>>>>> main

  return (
    <div style={{border: '2px solid red'}}>
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
          productID={productID}
          setModal={setModal}
        />
        <RelatedItems
          productID={productID}
          setProductID={setProductID}
          product={product}
          style={style}
        />
      </MetaContext.Provider>
      <Modal productID={productID} productName={product.name} modal={modal} />
    </div>
  );
}
export default App;
