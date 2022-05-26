
import React from 'react';

import RelatedProductsCard from './RelatedProductsCard.jsx';




function RelatedProductsContainer({
  relatedItems, showModal, setShow, setClickedItem, setProductID,
}) {
  // TODO: add function to update related items/provide a modal from clicking on specific card


  {
    for (const reitems of relatedItems) {

      // console.log("reitems", reitems.data.id)
    }

  }
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




