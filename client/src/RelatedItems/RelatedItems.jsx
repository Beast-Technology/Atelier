import React, { useState, useEffect, useRef } from 'react';
import RelatedProductsContainer from './RelatedProductsContainer.jsx';
import YourOutfitContainer from './YourOutfitContainer.jsx';
import useOutsideClick from './useOutsideClick.js';
import CompareModal from './CompareModal.jsx';
import './RelatedItems.css';
import { getPhotosAndMetaForCards } from '../axiosCalls.js';

function RelatedItems({
  product, relatedItems, productID, setProductID,
}) {
  const [showModal, setShow] = useState(false);
  const [yourOutfitItems, setOutfitItem] = useState([]);
  const [clickedItem, setClickedItem] = useState({});
  const [photoObject, setPhotos] = useState({ 40344: [{ thumbnail_url: '' }] });
  const [metaObject, setMeta] = useState({ 40344: [{ meta: '' }] });


  // --testConsole.logs-- //

  // const productID = 40346;
  // const productID = 40353;
  // console.log('product', product);
  // console.log('currentProduct', currentProduct);
  // console.log('relatedItems', relatedItems);
  // console.log('clickedItem', clickedItem);
  // console.log('yourOutfitItems', yourOutfitItems);

  useEffect(() => {
    const allCardsArray = yourOutfitItems.concat(relatedItems);
    getPhotosAndMetaForCards(allCardsArray, setPhotos, setMeta);
  }, [relatedItems, yourOutfitItems]);

  const ref = useRef();

  useOutsideClick(ref, () => {
    setShow(false);
  });

  return (
  // Junsu: added style for CSS debugging purposes, delete later
    <section style={{ border: '2px purple solid' }} id="RelatedItems">
      <div id="unclickArea" ref={ref}>
        <CompareModal
          showModal={showModal}
          currentProduct={product} // Junsu: track
          clickedItem={clickedItem}
        />

        <RelatedProductsContainer
          productID={productID}
          relatedItems={relatedItems} // Junsu: track
          showModal={showModal}
          setShow={setShow}
          setClickedItem={setClickedItem}
          setProductID={setProductID}
          photoObject={photoObject}
          metaObject={metaObject}
        />
      </div>
      <br />

      <YourOutfitContainer
        productID={productID}
        relatedItems={relatedItems} // Junsu: track
        currentProduct={product} // Junsu: track
        yourOutfitItems={yourOutfitItems}
        setOutfitItem={setOutfitItem}
        photoObject={photoObject}
        metaObject={metaObject}
      />
      <div>
        currentProduct:_
        {product.name}
      </div>
    </section>
  );
}




export default RelatedItems;




// for (const allPhotosProduct of allPhotosArray) {
//   // console.log('allPhotosProduct', allPhotosProduct);

//   const styleID = allPhotosProduct.id;
//   stylePromiseArray.push(
//     axios.request({
//       url: `/products/${styleID}/styles`,
//       method: 'GET',
//     }),
//   );
// }
// Promise.all(stylePromiseArray)
//   .then((responses) => {
//     const responseObj = {};
//     for (const styleItems of responses) {
//       const styleItemResultsArray = styleItems.data.results;
//       // console.log(styleItemResultsArray);
//       // console.log(styleItemResultsArray.entries());
//       for (const [i, styleItemResults] of styleItemResultsArray.entries()) {
//         if (i === styleItemResultsArray.length - 1) {
//           responseObj[styleItems.data.product_id] = styleItemResults.photos;
//         } else if (styleItemResults['default?'] === true) {
//           responseObj[styleItems.data.product_id] = styleItemResults.photos;
//         }
//       }
//     }
//     // console.log(responseObj);
//     setPhotos(responseObj);
//   })

