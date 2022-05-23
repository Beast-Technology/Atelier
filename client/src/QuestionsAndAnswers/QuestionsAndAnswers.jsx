import React from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';

function QuestionsAndAnswers() {
  return (
    <section>
      <h2>QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList />
    </section>
  );
}

export default QuestionsAndAnswers;
