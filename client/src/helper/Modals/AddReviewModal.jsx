import React, { useState } from 'react';
import { StarRatingSelect } from '../Stars.jsx';

const axios = require('axios');

export default function AddReviewModal({ productID, productName }) {
  // const product_id = 40333;

  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('/qa/questions', {body, name, email, product_id: productID})
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
    <div className="modal-box modal-review">
      <header>
        <h3 className="heading heading-tertiary">Review</h3>
        <span className="subheading">on the {productName}</span>
      </header>

      <main>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>Overall Rating *
            <StarRatingSelect totalStars={5} />
          </label>

          <label>Do you recommend this product? *
            <label className="container">Yes
              <input type="checkbox" checked="checked" />
              <span className="checkmark"></span>
            </label>
            <label className="container">No
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </label>

          <label>Characteristics *
            <input  name="asker_name" type="text" placeholder="Characteristics" />
          </label>

          <label>Review Summary *
            <input  name="asker_name" type="text" placeholder="Write your summary here" />
          </label>

          <label>Review Body *
            <textarea  name="question_body" maxLength="1000" placeholder="Write your body here..." required></textarea>
          </label>

          <label>Upload Photos *
            <input  name="asker_name" type="text" placeholder="Photo Here" />
          </label>

          <label>Nickname *
            <input onChange={handleNameChange} name="asker_name" type="text" placeholder="Example: jackson11!" maxLength="60" required />
            <span className="input-description">For privacy reasons, do not use your full name or email address</span>
          </label>

          <label>Email *
            <input onChange={handleEmailChange} type="email" maxLength="60" placeholder="Why did you like the product or not?" required />
            <span className="input-description">For authentication reasons, you will not be emailed</span>
          </label>

          <input className="btn btn-primary" type="submit" value="Submit Your Review" />
        </form>
      </main>
    </div>
  )
}