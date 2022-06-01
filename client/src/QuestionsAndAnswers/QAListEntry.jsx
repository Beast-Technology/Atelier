import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';
import Helpful from './Helpful.jsx';

const axios = require('axios');

export default function QAListEntry({ q, setModal, setphotoModalURL }) {
  // prevent side effect in AddAnswersModal when searching
  const [question_body, setQuestion_body] = useState(q.question_body);

  function markQuestionHelpful() {
    axios.put(`/qa/questions/${q.question_id}/helpful`)
      .then(() => {console.log('success')})
      .catch((err) => {alert(err)});

    const qStatus = JSON.parse(localStorage.getItem('qStatus'));
    qStatus[q.question_id] = true;
    localStorage.setItem('qStatus', JSON.stringify(qStatus));
  }

  function handleAddAnswer() {
    setModal({ modalName: 'adda', modalData: { question_id: q.question_id, question_body } });
    document.getElementById('modal').style.display = 'block';
  }

  function createMarkup(html) {
    return { __html: html };
  }

  return (
    <li>
      <div className="question">
        <p>Q:</p>

        <div className="question-container">
          {/* <p className="question-title">{q.question_body}</p> */}
          <p className="question-title" dangerouslySetInnerHTML={createMarkup(q.question_body)} />

          <div className="question-actions">
            <Helpful target={'question'} id={q.question_id} count={q.question_helpfulness} onMarkHelpful={markQuestionHelpful} />
            |
            <span onClick={handleAddAnswer} className="underline">Add Answers</span>
          </div>
        </div>
      </div>

      <AnswerList answers={q.answers} setphotoModalURL={setphotoModalURL} />
    </li>
  )
}