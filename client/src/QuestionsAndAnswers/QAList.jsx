import React from 'react';
import QAListEntry from './QAListEntry.jsx';

export default function QAList() {
  return (
    <div>
      <ul className="qa-list">
        <QAListEntry />
        <QAListEntry />
      </ul>

      <div className="qa-actions">
        <a className="btn btn-outline">MORE ANSWERED QUESTIONS</a>
        <a className="btn btn-primary">ADD A QUESTION +</a>
      </div>
    </div>

  )
}