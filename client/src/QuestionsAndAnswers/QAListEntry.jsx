import React from 'react';
import AnswerList from './AnswerList.jsx';

export default function QAListEntry() {
  return (
    <li>
      <div className="question">
        <p className="question-title">Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="question-actions">
          <span className="helpful">Helpful? Yes (25)</span>
          <span className="underline">Add Answers</span>
        </div>
      </div>

      <AnswerList />
    </li>
  )
}