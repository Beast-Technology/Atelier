import React from 'react';
import QAListEntry from './QAListEntry.jsx';

export default function QAList() {
  return (
    <div>
      <ul>
        Questions & Answers List
        <QAListEntry />
        <QAListEntry />
      </ul>

      <div>
        <a className="btn">MORE ANSWERED QUESTIONS</a>
        <a className="btn">ADD A QUESTION +</a>
      </div>
    </div>

  )
}