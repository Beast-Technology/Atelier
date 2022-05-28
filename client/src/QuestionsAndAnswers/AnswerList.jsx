import React, { useState } from 'react';
import AnswerListEntry from './AnswerListEntry.jsx';

export default function AnswerList({ answers, setphotoModalURL }) {
  const [answersData, setAnswersData] = useState(Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness));
  const [displayAnswers, setDisplayAnswers] = useState(answersData.slice(0, 2));
  const [notExpanded, setExpanded] = useState(true);

  function handleLoad() {
    setDisplayAnswers(answersData);
    setExpanded(false);
  }

  function handleFold() {
    setDisplayAnswers(answersData.slice(0, 2));
    setExpanded(true);
  }

  return (
    <div className="answer">
      <p>A:</p>

      <div className="answers-container">
        <ul className="answer-list">
          {displayAnswers.map((answer, index) => <AnswerListEntry key={index} a={answer} setphotoModalURL={setphotoModalURL} />)}
        </ul>

        {answersData.length > 2 && notExpanded && <span onClick={handleLoad} className="answer-load">LOAD MORE ANSWERS</span>}

        {notExpanded || <span onClick={handleFold} class="answer-load">Collapse answers</span>}

      </div>
    </div>
  )
}