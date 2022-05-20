import React from 'react';
import RelatedItemsContainer from './RelatedItems/RelatedItemsContainer.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';

function App() {
  return (
    <div>
      <ProductOverview />
      <RatingsAndReviews />
      <RelatedItemsContainer />
    </div>
  );
}
export default App;