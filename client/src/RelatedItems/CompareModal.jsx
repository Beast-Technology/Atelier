/* eslint-disable no-restricted-syntax */
/* eslint-disable no-lone-blocks */
import React from 'react';


function CompareModal({ showModal, currentProduct, clickedItem }) {
  if (!showModal) {
    return null;
  }
  let tableVals = [];
  const compareObj = {};
  const currProductFeatures = currentProduct.features;
  const clickedFeatures = clickedItem.features;

  for (const cpFeature of currProductFeatures) {
    const featureString = cpFeature.value ? `${cpFeature.value} ${cpFeature.feature}` : `${cpFeature.feature}`;
    compareObj[featureString] = 'left';
  }
  for (const cifeature of clickedFeatures) {
    const featureString = cifeature.value ? `${cifeature.value} ${cifeature.feature}` : `${cifeature.feature}`;
    if (compareObj[featureString]) {
      compareObj[featureString] = 'both';
    } else {
      compareObj[featureString] = 'right';
    }
  }

  tableVals = Object.keys(compareObj).map((key) => {
    let leftCheckmark = '';
    let rightCheckmark = '';

    if (compareObj[key] === 'left') {
      leftCheckmark = '✓';
    } else if (compareObj[key] === 'right') {
      rightCheckmark = '✓';
    } else {
      leftCheckmark = '✓';
      rightCheckmark = '✓';
    }
    return (
      <tr key={key}>
        <td>{leftCheckmark}</td>
        <td>{key}</td>
        <td>{rightCheckmark}</td>
      </tr>
    );
  });

  return (
    <div className="modalCard">
      <div className="fixTableHead">
        <table cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>{currentProduct.name}</th>
              <th> </th>
              <th>{clickedItem.name}</th>
            </tr>
            {tableVals}
          </thead>
        </table>
      </div>
    </div>

  );
}

export default CompareModal;




