import React, { useState } from 'react';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import ProductOverview from './ProductOverview/ProductOverview.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import Modal from './QuestionsAndAnswers/AddQuestionModal/Modal.jsx';

function App() {
  const [modal, setModal] = useState('');

  return (
    <div>
      <ProductOverview />
      <RelatedItems />
      <QuestionsAndAnswers setModal={setModal} />
      <RatingsAndReviews />
      <Modal modal={modal} />
    </div>
  );
}
export default App;
