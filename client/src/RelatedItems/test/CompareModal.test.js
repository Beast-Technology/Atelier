/* eslint-disable */

import { render, unmountComponentAtNode } from 'react-dom';
import {fireEvent, screen} from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import './../RelatedItems.css';
import {
  listProductsResponse1,
  productInformationResponse1,
  productInformationResponse2,
  productStyleResponse1,
  relatedProductsAPI,
  listReviewsResponce1,
  getReviewMetadataResponse1,
} from '../../test_data/data.js';


import CompareModal from '../CompareModal.jsx';


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
  it('DOES NOT render the CompareModal since showModal is false:', () => {
    act(() => {
      render(<CompareModal
        showModal={false}
      />, container);
    });
    expect(container.firstChild).toBe(null);
  });


  it('DOES render the CompareModal since showModal is true', () => {
    act(() => {
      render(<CompareModal
        showModal={true}
        currentProduct={productInformationResponse1}
        clickedItem={productInformationResponse2}
      />, container);

      expect(container.firstChild.className).toBe('modalCard');
    });
  });
});
describe('Table Render Test', () => {
  it('Confirm Title and Checkmarks show up on both features when products are the SAME', () => {
    act(() => {
      render(<CompareModal
        showModal
        currentProduct={productInformationResponse1}
        clickedItem={productInformationResponse1}
      />, container);

      const test1 = document.getElementsByTagName('th')[0].textContent;
      const test2 = document.getElementsByTagName('th')[2].textContent;
      expect(test1).toBe('Camo Onesie');
      expect(test2).toBe('Camo Onesie');

      const test3 = document.getElementsByTagName('tr')[1].getElementsByTagName('td')[0].textContent;
      const test4 = document.getElementsByTagName('tr')[1].getElementsByTagName('td')[2].textContent;
      expect(test3).toBe('✓');
      expect(test4).toBe('✓');
    });
  });

  it('Confirm Title and Checkmarks show up on both features when products are NOT SAME', () => {
    act(() => {
      render(<CompareModal
        showModal
        currentProduct={productInformationResponse1}
        clickedItem={productInformationResponse2}
      />, container);

      const test1 = document.getElementsByTagName('th')[0].textContent;
      const test2 = document.getElementsByTagName('th')[2].textContent;
      expect(test1).toBe('Camo Onesie');
      expect(test2).toBe('Heir Jordans');

      const test3 = document.getElementsByTagName('tr')[1].getElementsByTagName('td')[0].textContent;
      const test4 = document.getElementsByTagName('tr')[1].getElementsByTagName('td')[2].textContent;
      expect(test3).toBe('✓');
      expect(test4).toBe('');

      const test5 = document.getElementsByTagName('tr')[3].getElementsByTagName('td')[1].textContent;
      const test6 = document.getElementsByTagName('tr')[4].getElementsByTagName('td')[1].textContent;
      expect(test5).toBe('ControlSupport Arch Bridge Mid-Sole');
      expect(test6).toBe('Double Stitch Stitching');
    });
  });
});
