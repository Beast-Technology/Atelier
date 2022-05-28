
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsContainer({
  relatedItems, showModal, setShow, setClickedItem, setProductID,
}) {
  // console.log(relatedItems);
  return (

    <div>
      <div id="RelatedProductsContainer">
        {
      (relatedItems || []).map((relatedItem) => (
        <RelatedProductsCard
          relatedItem={relatedItem}
          key={relatedItem.id}
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
          setProductID={setProductID}

        />

      ))
      }
      </div>
    </div>
  );
}

export default RelatedProductsContainer;




