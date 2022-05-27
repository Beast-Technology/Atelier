import React, { useState } from 'react';
import './modal-addq-styles.css';

const axios = require('axios');

export default function AddQuestionModal() {
  const product_id = 40333;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // function handleClick(e) {
  //   const modalMask = document.getElementById('modal');
  //   if (e.target === modalMask) {
  //     modalMask.style.display = 'none';
  //   }
  // }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/qa/questions', {body, name, email, product_id})
      .then(() => { console.log('success!') })
      .then(() => { document.getElementById('modal').style.display = 'none' })
      .catch((err) => { alert(err) });
  }

  function handleQuestionChange(e) {
    setBody(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    // <div id="modal" className="modal" onClick={handleClick} >
      <div className="modal-box modal-addq">
        <header>
          <h3 className="heading heading-tertiary">Ask Your Questions</h3>
          <span className="subheading">About the [Product name]</span>
        </header>

        <main>
          <form className="modal-form" onSubmit={handleSubmit} >
            <label>Your Question *
              <textarea onChange={handleQuestionChange} name="question_body" maxlength="1000" placeholder="Write your question here..." required></textarea>
            </label>

            <label>Nickname *
              <input onChange={handleNameChange} name="asker_name" type="text" placeholder="Example: jackson11!" maxlength="60" required />
              <span className="input-description">For privacy reasons, do not use your full name or email address</span>
            </label>

            <label>Email *
              <input onChange={handleEmailChange} type="email" maxlength="60" placeholder="Why did you like the product or not?" required />
              <span className="input-description">For authentication reasons, you will not be emailed</span>
            </label>

            <input className="btn btn-primary" type="submit" value="Submit Your Question" />
          </form>
        </main>
      </div>
    // </div>
  )
}