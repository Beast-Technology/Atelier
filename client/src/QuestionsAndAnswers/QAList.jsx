import React from 'react';
import QAListEntry from './QAListEntry.jsx';

export default function QAList({qs, qsLeft, onHandleLoad}) {
  function handleClick() {
    document.getElementById('modal').style.display = 'block';
  }

  return (
    <div>
      <ul className="qa-list">
        {qs.map((q, index) => <QAListEntry key={index} q={q} />)}
      </ul>

      <div className="qa-actions">
        {qsLeft !== 0 && <a onClick={onHandleLoad} className="btn btn-outline">MORE ANSWERED QUESTIONS</a>}
        <a onClick={handleClick} className="btn btn-primary">ADD A QUESTION +</a>
      </div>
    </div>
  )
}