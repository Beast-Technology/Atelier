
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

function RelatedProductsContainer({
  relatedItems, showModal, setShow, setClickedItem, setProductID, photoObject, metaObject,
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
          metaObject={metaObject}
        />

      ))
      }
      </div>
    </div>
  );
}

export default RelatedProductsContainer;




