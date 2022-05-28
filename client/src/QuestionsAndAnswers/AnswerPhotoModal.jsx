import React from 'react';

export default function AnswerPhotoModal({ photoURL }) {
  function handleClose() {
    document.getElementById('answer-modal').style.display = 'none';
  }

  return (
    <div id="answer-modal">
      <span className="close" onClick={handleClose} >
        X
      </span>
      <figure>
        <img
          className="answer-photo-lg"
          src={photoURL}
          alt="user uploaded pic"
        />
      </figure>
    </div>
  );
}
