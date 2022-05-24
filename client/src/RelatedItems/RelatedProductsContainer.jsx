import React, { useState, useEffect } from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';




function RelatedProductsContainer({relatedItems}) {


  // TODO: add function to update related items/provide a modal from clicking on specific card

    return (
      <div  id="RelatedProductsContainer" >
      {
        (relatedItems || []).map(relatedItem=> {
          return <RelatedProductsCard relatedItem={relatedItem.data} key={relatedItem.data.id}/>
        })
      }
      </div>
      )
    }

    export default RelatedProductsContainer;