
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsContainer({
  relatedItems, showModal, setShow, setClickedItem, setProductID, photoObject,
}) {
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
          photoObject={photoObject}

        />

      ))
      }
      </div>
    </div>
  );
}

export default RelatedProductsContainer;




