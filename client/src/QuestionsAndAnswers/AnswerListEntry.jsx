import React from 'react';

export default function AnswerListEntry({a}) {
  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      <div className="answer-info">
        <span>by {a.answerer_name}, {a.date}</span>
        |
        <span className="helpful">Helpful? Yes ({a.helpfulness})</span>
        |
        <span>Report</span>
      </div>
    </li>
  )
}