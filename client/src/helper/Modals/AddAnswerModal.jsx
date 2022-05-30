import React, { useState } from 'react';

const axios = require('axios');

export default function AddAnswerModal({ productName, questionID, questionBody}) {
  // const question_id = 641145;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  function handleQuestionChange(e) {
    setBody(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`/qa/questions/${questionID}/answers`, {question_id: questionID, body, name, email, photos})
      .then(() => { console.log('success!') })
      .then(() => { document.getElementById('modal').style.display = 'none' })
      .catch((err) => { alert(err) });
  }

  return (
    <div className="modal-box modal-adda">
        <header>
          <h3 className="heading heading-tertiary">Submit Your Answer</h3>
          <span className="subheading">{productName}</span>
          <span className="subheading">{questionBody}</span>
        </header>

        <main>
          <form className="modal-form" onSubmit={handleSubmit} >
            <label>Your Answer *
              <textarea onChange={handleQuestionChange} name="answer_body" maxLength="1000" placeholder="Write your answer here..." required></textarea>
            </label>

            <label>Nickname *
              <input onChange={handleNameChange} name="answerer_name" type="text" placeholder="Example: jack543!" maxLength="60" required />
              <span className="input-description">For privacy reasons, do not use your full name or email address</span>
            </label>

            <label>Email *
              <input onChange={handleEmailChange} type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
              <span className="input-description">For authentication reasons, you will not be emailed</span>
            </label>

            <input className="btn btn-primary" type="submit" value="Submit Your Answer" />
          </form>
        </main>
      </div>
  );
}
