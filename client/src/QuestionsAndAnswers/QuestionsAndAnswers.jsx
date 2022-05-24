import React from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
import './qa-styles.css';

function QuestionsAndAnswers() {
  return (
    <section>
      <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList />
    </section>
  );
}

export default QuestionsAndAnswers;
