import React from 'react';
import Helpful from './Helpful.jsx';

export default function AnswerListEntry({a}) {
  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      <div className="answer-info">
        <span>by {a.answerer_name}, {a.date}</span>
        |
        <Helpful count={a.helpfulness} />
        |
        <span>Report</span>
      </div>
    </li>
  )
}