import React, { useState, useEffect } from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
import './qa-styles.css';

const axios = require('axios');

function QuestionsAndAnswers() {
  const [qs, setQs] = useState([]);
  const [nextPage, setNextPage] = useState(2);

  function getTwoMore() {
    axios.get('/qa/questions', { params: { product_id: 40355, page: nextPage} })
      .then(res => { setQs([...qs, ...res.data.results]) })
      .then(() => { setNextPage(nextPage + 1) })
      .catch(err => { alert(err) });
  }

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: 40355, count: 3} })
      .then(res => {
        setQs(res.data.results);
      })
      .catch(err => { alert(err) })
  }, [])

  return (
    <section className="section-qanda">
      <h2 onClick={getTwoMore} className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList qs={qs}/>
    </section>
  );
}

export default QuestionsAndAnswers;
