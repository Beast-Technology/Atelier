import React from 'react';
import RelatedItemsContainer from './RelatedItems/RelatedItemsContainer.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

function App() {
  return (
    <div>
      {/* <ProductOverview /> */}
      <RatingsAndReviews />
      <QuestionsAndAnswers />
      {/* <RelatedItemsContainer /> */}
    </div>
  );
}
export default App;