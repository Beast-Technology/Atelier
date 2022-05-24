import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

export default function AnswerList() {
  return (
    <div className="answer">
      <p>A:</p>

      <div className="answers-container">
        <ul className="answer-list">
          <AnswerListEntry />
          <AnswerListEntry />
        </ul>

        <span className="answer-load">LOAD MORE ANSWERS</span>
      </div>
    </div>
  )
}