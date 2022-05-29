import React from 'react';
import './modal-styles.css';

import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

export default function Modal({ productID, productName, modal }) {

  function renderModal({ modalName, modalData }) {
    switch (modalName) {
      case 'addq':
        return <AddQuestionModal productID={productID} productName={productName} />;
      case 'adda':
        return <AddAnswerModal productName={productName} questionID={modalData.question_id} questionBody={modalData.question_body} />;
      default:
        return <div />;
    }
  }

  function handleClick(e) {
    const modalMask = document.getElementById('modal');
    if (e.target === modalMask) {
      modalMask.style.display = 'none';
    }
  }

  return (
    <div id="modal" className="modal" onClick={handleClick}>
      {renderModal(modal)}
    </div>
  );
}
