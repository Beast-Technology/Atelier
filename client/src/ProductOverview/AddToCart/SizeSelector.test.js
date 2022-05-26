/* eslint-disable */


import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
// import renderer from 'react-test-renderer';
import {act} from 'react-dom/test-utils';

import SizeSelector from './SizeSelector.jsx';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it("Junsu's first test example", () => {
  act(() => {
    render(<SizeSelector />, container);
  });
  expect(document.getElementsByTagName('select')).toBe(null);
})