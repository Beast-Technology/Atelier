import React from 'react';
import './modal-addq-styles.css';

import AddQuestionModal from './AddQuestionModal.jsx';
import AddAnswerModal from './AddAnswerModal.jsx';

export default function Modal({ modal }) {

  function renderModal(modalName) {
    switch (modalName) {
      case 'addq':
        return <AddQuestionModal />;
      case 'adda':
        return <AddAnswerModal />;
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
