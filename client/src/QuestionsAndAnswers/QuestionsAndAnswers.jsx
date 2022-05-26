import React, { useState, useEffect } from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
import './qa-styles.css';

const axios = require('axios');

const chosen_id = 40355;

function QuestionsAndAnswers() {
  const [qs, setQs] = useState([]);
  const [displayQs, setDisplayQs] = useState([]);
  const [nextPage, setNextPage] = useState(3);
  const [nextCount, setNextCount] = useState(0);

  function getTwoMoreFromData() {
    axios.get('/qa/questions', { params: { product_id: chosen_id, page: nextPage} })
      .then(res => { setQs([...qs, ...res.data.results]) })
      .then(() => { setNextPage(nextPage + 1) })
      .catch(err => { alert(err) });
  }

  function addTwoMoreToDisplay() {
    setDisplayQs([...displayQs, ...qs.slice(displayQs.length)]);
  }

  function handleLoad() {
    addTwoMoreToDisplay();
    getTwoMoreFromData();
  }

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: chosen_id, count: 5} })
      .then(res => {
        setQs(res.data.results);
        setDisplayQs(res.data.results.slice(0, 2));
      })
      .catch(err => { alert(err) })
  }, [])

  useEffect(() => {
    console.log('qs:', qs.length);
    console.log('displayQs:', displayQs.length);
    setNextCount(qs.length - displayQs.length);
  }, [qs, displayQs])

  return (
    <section data-testid="sec-qna" className="section-qanda">
      <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList qs={displayQs} next={nextCount} onHandleLoad={handleLoad} />
    </section>
  );
}

export default QuestionsAndAnswers;