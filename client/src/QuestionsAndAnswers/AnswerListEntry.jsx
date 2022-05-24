const axios = require('axios');
import React from 'react';
import Helpful from './Helpful.jsx';

export default function AnswerListEntry({a}) {
  function markAnswerHelpful() {
    axios.put(`/qa/answers/${a.id}/helpful`)
      .then(() => {console.log('success')})
      .catch((err) => {alert(err)});
  }

  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      <div className="answer-info">
        <span>by {a.answerer_name}, {a.date}</span>
        |
        <Helpful count={a.helpfulness} onMarkHelpful={markAnswerHelpful} />
        |
        <span>Report</span>
      </div>
    </li>
  )
}