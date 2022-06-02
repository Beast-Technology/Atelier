/* eslint-disable */

import { render, unmountComponentAtNode } from 'react-dom';
import {fireEvent, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import {
  listProductsResponse1,
  productInformationResponse1,
  productInformationResponse2,
  productStyleResponse1,
  relatedProductsAPI,
  listReviewsResponce1,
  getReviewMetadataResponse1,
} from '../../test_data/data.js';


import RelatedItems from '../RelatedItems.jsx';
import MockedRelatedProductsContainer from "./../RelatedProductsContainer";
import MockedYourOutfitContainer from "./../YourOutfitContainer";


// jest.mock("./../RelatedProductsContainer", () => {
//   return function RelatedProductsContainer(props) {
//     return (
//       <div data-testid="RelatedProductsContainer">
//         productID={productID}
//         relatedItems={relatedItems}
//       </div>
//     );
//   };
// });

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});



afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// describe('Basic HTML test', () => {
//   it('DOES NOT render the RelatedItems without a productID:', () => {
//     act(() => {
//       render(<RelatedItems
//         productID={40344}
//         product={productInformationResponse1}
//         style={productStyleResponse1}
//         />, container);
//       });

//       const test1 = container

//       // const test1 = container.querySelector("#CardContainerOutter") ;

//       expect(test1).toBe(null);
//     });


//     it('DOES render the RelatedItems since showModal is true', () => {
//       act(() => {
//         render(<RelatedItems
//           productID={40344}
//           product={productInformationResponse1}
//           style={productStyleResponse1}
//           />, container);

//           expect(container.firstChild.className).toBe('modalCard');
//         });
//       });
    // });
