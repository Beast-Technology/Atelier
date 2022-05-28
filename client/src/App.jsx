import React, { useState, useEffect } from 'react';
import { getMeta, getProduct, getStyles, getRelated } from './axiosCalls.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import Modal from './helper/Modals/Modal.jsx';

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

  // Junsu: Alex, feel free to move this into your module RelatedItems. I think
  // you're right that it doesn't need to be in the App
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    getRelated(productID, setRelatedItems);
  }, [productID]);

  const [modal, setModal] = useState('');


  return (
    <div style={container}>
      <MetaContext.Provider value={meta}>
        {/* <ProductOverview
          productID={productID}
          product={product}
        /> */}
        <RatingsAndReviews
          meta={meta}
        />
      </MetaContext.Provider>
      <QuestionsAndAnswers setModal={setModal} />
      <RelatedItems
        productID={productID}
        setProductID={setProductID}
        product={product}
        relatedItems={relatedItems}
      />
      <Modal modal={modal} />
    </div>
  );
}
export default App;
