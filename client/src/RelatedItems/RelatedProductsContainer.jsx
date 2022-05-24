
import React from 'react';

import RelatedProductsCard from './RelatedProductsCard.jsx';




function RelatedProductsContainer({ relatedItems, showModal, setShow }) {
  // TODO: add function to update related items/provide a modal from clicking on specific card



  return (
    <div>
      <div id="RelatedProductsContainer">
        {
      (relatedItems || []).map((relatedItem) => (
        <RelatedProductsCard
          relatedItem={relatedItem.data}
          key={relatedItem.data.id}
          showModal={showModal}
          setShow={setShow}
        />
      ))
      }
      </div>
    </div>
  );
}

export default RelatedProductsContainer;




