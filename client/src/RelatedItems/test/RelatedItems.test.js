/* eslint-disable */

import { render, unmountComponentAtNode } from 'react-dom';
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

describe('Basic HTML test', () => {
  it('DOES NOT render the RelatedItems since showModal is false:', () => {
    act(() => {
      render(<RelatedItems
        showModal={false}
      />, container);
    });
    expect(container.firstChild).toBe(null);
  });


  it('DOES render the RelatedItems since showModal is true', () => {
    act(() => {
      render(<RelatedItems
        showModal
        currentProduct={productInformationResponse1}
        clickedItem={productInformationResponse2}
      />, container);

      expect(container.firstChild.className).toBe('modalCard');
    });
  });
});
