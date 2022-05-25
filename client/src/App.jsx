import React from 'react';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

function App() {
  return (
    <div>
      <ProductOverview />
      {/* <RatingsAndReviews /> */}
      <QuestionsAndAnswers />
      <RelatedItems />
    </div>
  );
}
export default App;
