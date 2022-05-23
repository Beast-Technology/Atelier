import React from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

export default function AnswerList() {
  return (
    <div className="answer-list">
      <ul>
        A: <AnswerListEntry />
        <AnswerListEntry />
      </ul>

      <span className="btn-action">LOAD MORE ANSWERS</span>
    </div>
  )
}