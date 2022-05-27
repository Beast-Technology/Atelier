import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

function App() {
  // Junsu: added this style globally
  const style = {
    border: '2px solid red',
    width: '1200px',
    margin: '48px auto',
    padding: '32px',
  };

  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState({});
  const productID = 40346;

  useEffect(() => {
    axios.request({
      url: '/reviews',
      method: 'get',
      params: {
        product_id: productID,
        count: 100,
      },
    })
      .then((response) => {
        // console.log(response.data);
        setReviews(response.data.results);
      });
  }, []);

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



  return (
    <div style={style}>
      <ProductOverview
        reviews={reviews}
        product={product}
      />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      <RelatedItems />
    </div>
  );
}
export default App;
