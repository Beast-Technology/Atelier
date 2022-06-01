// /* eslint-disable */

// import { render, unmountComponentAtNode } from 'react-dom';
// import {act} from 'react-dom/test-utils';
// import {createRoot} from 'react-dom/client';
// import CompareModal from './../CompareModal.jsx';
// import RelatedProductsCard from './../RelatedProductsCard.jsx';

// let container = null;
// const product1 = {
//   features: [
//     {feature: 'Sole', value: 'Rubber'},
//     {feature: 'Material', value: 'FullControlSkin'},
//     {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
//     {feature: 'Stitching', value: 'Double Stitch'}
//   ],
//   name: "Heir Force Ones"
// }
// const product2 = {
//   features: [
//     {feature: 'Sole', value: 'Rubber'},
//     {feature: 'Material', value: 'FullControlSkin'},
//     {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
//     {feature: 'Stitching', value: 'Double Stitch'}
//   ],
//   name: "Morning Joggers"
// }
// const product3 = {
//   features: [
//     {feature: 'Sole', value: 'Grey'},
//     {feature: 'Material', value: 'Cotton'},
//     {feature: 'Mid-Sole', value: 'ControlSupport Arch Bridge'},
//     {feature: 'Stitching', value: 'Single Stitch'}
//   ],
//   name: "Chinos"
// }
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);

// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// describe("Basic HTML test", () => {
//   it("DOES NOT render the CompareModal since showModal is false:", () => {
//     act(() => {
//       render(<CompareModal
//         showModal={false}
//         />, container);
//       });
//       expect(container.firstChild).toBe(null);
//     });


//     it("DOES render the CompareModal since showModal is true", () => {
//       act(() => {

//         render(<CompareModal
//           showModal={true}
//           currentProduct={product1}
//           clickedItem={product2}
//           />, container);

//           expect(container.firstChild.className).toBe("modalCard");

//         });
//       });
//     });
//     describe("Table Render Test", () => {
//       it("Confirm Title and Checkmarks show up on both features when products are the same", () => {
//         act(() => {

//           render(<CompareModal
//             showModal={true}
//             currentProduct={product1}
//             clickedItem={product2}
//             />, container);

//             let test1 = document.getElementsByTagName("th")[0].textContent;
//             let test2 = document.getElementsByTagName("th")[2].textContent;

//             let test3 = document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].textContent
//             let test4 = document.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].textContent

//             expect(test1).toBe("Heir Force Ones");
//             expect(test2).toBe("Morning Joggers");

//             expect(test3).toBe("✓");
//             expect(test4).toBe("✓");
//           });
//         });

//         it("Confirm Title and Checkmarks show up on both features when products are the same", () => {
//           act(() => {

//             render(<CompareModal
//               showModal={true}
//               currentProduct={product1}
//               clickedItem={product3}
//               />, container);

//               let test1 = document.getElementsByTagName("th")[0].textContent;
//               let test2 = document.getElementsByTagName("th")[2].textContent;

//               let test3 = document.getElementsByTagName("tr")[1].getElementsByTagName("td")[0].textContent
//               let test4 = document.getElementsByTagName("tr")[1].getElementsByTagName("td")[2].textContent

//               expect(test1).toBe("Heir Force Ones");
//               expect(test2).toBe("Chinos");

//               expect(test3).toBe("✓");
//               expect(test4).toBe("");
//             });
//           });
//       });
