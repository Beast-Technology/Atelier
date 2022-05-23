import React from 'react';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';



function RelatedItemsContainer() {
  // const [count, setCount] = useState(0);


  return (
    <section id="RelatedItemsContainer">

      <RelatedProductsContainer />
      <br />
      <YourOutfitContainer />
    </section>
  );
}




export default RelatedItemsContainer;


