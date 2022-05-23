import React from 'react';
import AnswerList from './AnswerList.jsx';

export default function QAListEntry() {
  return (
    <li>
      <div className="question">
        <p className="question-title">Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="question-actions">
          <span>Helpful? Yes (25)</span>
          <span>Add Answers</span>
        </div>
      </div>

      <AnswerList />
    </li>
  )
}