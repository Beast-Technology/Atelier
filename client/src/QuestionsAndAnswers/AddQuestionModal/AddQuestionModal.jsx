import React from 'react';

export default function AddQuestionModal() {
  return (
    <div className="modal">
      <div className="modal-content modal-addq">
        <header>
          <h3 className="heading heading-tertiary">Add Your Questions</h3>
          <span className="subheading">About the [Product name]</span>
        </header>

        <main>
          <form method="POST">
            <label>Your Question *
              <textarea name="question_body" maxlength="1000" required>Write your question here...</textarea>
            </label>

            <label>Nickname *
              <input name="asker_name" type="text" placeholder="Example: jackson11!" maxlength="60" required />
              <span className="">For privacy reasons, do not use your full name or email address</span>
            </label>

            <label>Email *
              <input type="email" maxlength="60" placeholder="Why did you like the product or not?" required />
              <span className="">For authentication reasons, you will not be emailed</span>
            </label>

            <input type="submit" value="Submit Your Question" />
          </form>
        </main>
      </div>
    </div>
  )
}