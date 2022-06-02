/* eslint-disable */

import {render, unmountComponentAtNode } from 'react-dom';
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


import YourOutfitcard from '../YourOutfitcard.jsx';


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
  it('DOES NOT render the YourOutfitcard since showModal is false:', () => {
    act(() => {
      render(<YourOutfitcard
        yourOutfitItem={productInformationResponse2}
      />, container);
    });


    console.log(container.getElementsByClassName('card-img'))

    // console.log('test2', container.classList.contains('Heir Jordans'))

    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();

    // expect(container.classList.contains(<div class="card-name">Heir Jordans</div>)).toBe(true);

  });


  it('DOES render the YourOutfitcard since showModal is true', () => {
    act(() => {
      render(<YourOutfitcard
        yourOutfitItem={productInformationResponse2}
      />, container);
    });
  });
  // expect(container.firstChild).toBe(null);

});