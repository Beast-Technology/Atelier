import React from 'react';
import './modal-addq-styles.css';

export default function AddQuestionModal() {
  function handleClick(e) {
    const modalMask = document.getElementById('modal');
    if (e.target === modalMask) {
      modalMask.style.display = 'none';
    }
  }

  return (
    <div id="modal" className="modal" onClick={handleClick} >
      <div className="modal-box modal-addq">
        <header>
          <h3 className="heading heading-tertiary">Ask Your Questions</h3>
          <span className="subheading">About the [Product name]</span>
        </header>

        <main>
          <form className="modal-form" method="POST">
            <label>Your Question *
              <textarea name="question_body" maxlength="1000" placeholder="Write your question here..." required></textarea>
            </label>

            <label>Nickname *
              <input name="asker_name" type="text" placeholder="Example: jackson11!" maxlength="60" required />
              <span className="input-description">For privacy reasons, do not use your full name or email address</span>
            </label>

            <label>Email *
              <input type="email" maxlength="60" placeholder="Why did you like the product or not?" required />
              <span className="input-description">For authentication reasons, you will not be emailed</span>
            </label>

            <input className="btn btn-primary" type="submit" value="Submit Your Question" />
          </form>
        </main>
      </div>
    </div>
  )
}