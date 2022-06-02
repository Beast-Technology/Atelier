/* eslint-disable no-restricted-syntax */
/* eslint-disable no-lone-blocks */
import React from 'react';


function CompareModal({ showModal, currentProduct, clickedItem }) {
  // --------------------- return null if showModal is falsy ------------------- //
  if (!showModal) {
    return null;
  }

  // --------------------- compare and set features of current/clicked products ------------------- //

  const compareObj = {};

  for (const featureOfCurrent of currentProduct.features) {
    const featureString = featureOfCurrent.value ? `${featureOfCurrent.value} ${featureOfCurrent.feature}` : `${featureOfCurrent.feature}`;
    compareObj[featureString] = 'left';
  }
  for (const featureOfClicked of clickedItem.features) {
    const featureString = featureOfClicked.value ? `${featureOfClicked.value} ${featureOfClicked.feature}` : `${featureOfClicked.feature}`;

    if (compareObj[featureString]) {
      compareObj[featureString] = 'both';
    } else {
      compareObj[featureString] = 'right';
    }
  }
  // --------------------- mapping of checkmarks based on comparison object ------------------- //

  const tableVals = Object.keys(compareObj).map((key) => {
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




