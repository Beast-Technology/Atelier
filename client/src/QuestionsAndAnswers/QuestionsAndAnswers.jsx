import React, { useState, useEffect } from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
import './qa-styles.css';

const axios = require('axios');

function QuestionsAndAnswers() {
  const [qs, setQs] = useState([]);
  // const [displayQs, setDisplayQs] = useState([]);

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: 40355, count: 5 } })
      .then(res => {setQs(res.data.results)})
      .catch(err => { alert(err) })
  }, [])

  return (
    <section>
      <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
      <QASearch />
      <QAList qs={qs}/>
    </section>
  );
}

export default QuestionsAndAnswers;
