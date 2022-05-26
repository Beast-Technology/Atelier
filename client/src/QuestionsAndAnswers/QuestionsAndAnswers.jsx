import React, { useState, useEffect } from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
import './qa-styles.css';

const axios = require('axios');

const chosenId = 40362;

function QuestionsAndAnswers() {
  const [qs, setQs] = useState([]);
  const [displayQs, setDisplayQs] = useState([]);
  const [qsLeft, setQsLeft] = useState(0);

  function handleLoad() {
    setDisplayQs([...displayQs, ...qs.slice(displayQs.length, displayQs.length + 2)]);
  }

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: chosenId, count: 100 } })
      .then((res) => {
        setQs(res.data.results);
        setDisplayQs(res.data.results.slice(0, 2));
      })
      .catch((err) => { alert(err); });
  }, []);

  useEffect(() => {
    setQsLeft(qs.length - displayQs.length);
  }, [displayQs, qs.length]);

  return (
    <section className="section-qanda">
      <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList qs={displayQs} qsLeft={qsLeft} onHandleLoad={handleLoad} />
    </section>
  );
}

export default QuestionsAndAnswers;
