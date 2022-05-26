/* eslint-disable */

import { render, unmountComponentAtNode } from 'react-dom';
import {act} from 'react-dom/test-utils';
import {createRoot} from 'react-dom/client';
import CompareModal from './../CompareModal.jsx';

let container = null;
const product1 = {
  features: [
    {feature: 'Sole', value: 'Rubber'},
    {feature: 'Material', value: 'FullControlSkin'},
    {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
    {feature: 'Stitching', value: 'Double Stitch'}
  ],
  name: "Heir Force Ones"
}
const product2 = {
  features: [
    {feature: 'Sole', value: 'Rubber'},
    {feature: 'Material', value: 'FullControlSkin'},
    {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
    {feature: 'Stitching', value: 'Double Stitch'}
  ],
  name: "Heir Force Ones"
}
const product3 = {
  features: [
    {feature: 'Sole', value: 'Rubber'},
    {feature: 'Material', value: 'FullControlSkin'},
    {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
    {feature: 'Stitching', value: 'Double Stitch'}
  ],
  name: "Heir Force Ones"
}
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);

});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("does not render the CompareModal since showModal is false:", () => {
  act(() => {
    render(<CompareModal
      showModal={false}
      />, container);
  });
  expect(container.firstChild).toBe(null);
});


it("renders Compare Modal without crashing", () => {
  act(() => {

    render(<CompareModal
      showModal={true}
      currentProduct={product1}
      clickedItem={product2}
      />, container);

      console.log(container);
      expect(container.firstChild.className).toBe("modalCard");

    });
  });
