const axios = require('axios');
import React from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from './Helpful.jsx';

export default function QAListEntry({ q, setModal, setphotoModalURL }) {
  function markQuestionHelpful() {
    axios.put(`/qa/questions/${q.question_id}/helpful`)
      .then(() => {console.log('success')})
      .catch((err) => {alert(err)});
  }

  function handleAddAnswer() {
    setModal('adda');
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <li>
      <div className="question">
        <p>Q:</p>

        <div className="question-container">
          <p className="question-title">{q.question_body}</p>

          <div className="question-actions">
            <Helpful count={q.question_helpfulness} onMarkHelpful={markQuestionHelpful} />
            |
            <span onClick={handleAddAnswer} className="underline">Add Answers</span>
          </div>
        </div>
      </div>

      <AnswerList answers={q.answers} setphotoModalURL={setphotoModalURL} />
    </li>
  )
}