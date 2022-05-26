/* eslint-disable */


import React from 'react';
import { render, unmountComponentAtNode, reactDOM } from 'react-dom';
import renderer from 'react-test-renderer';
import {act} from 'react-dom/test-utils';

import ReviewTile from '../ReviewTile.jsx';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/projectCatwalk/i);
  expect(linkElement).toBeInTheDocument();
});