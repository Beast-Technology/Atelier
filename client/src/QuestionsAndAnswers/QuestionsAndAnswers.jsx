import React, { useState, useEffect } from 'react';
import QASearch from './QASearch.jsx';
import QAList from './QAList.jsx';
// import AddQuestionModal from './AddQuestionModal/AddQuestionModal.jsx';
import AnswerPhotoModal from './AnswerPhotoModal.jsx';
import './qa-styles.css';

const axios = require('axios');

// For test purpose
// const chosenId = 40344;

function QuestionsAndAnswers({ productID, setModal }) {
  const [qaData, setQAData] = useState([]);
  const [qs, setQs] = useState([]);
  const [displayQs, setDisplayQs] = useState([]);
  const [qsLeft, setQsLeft] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [photoModalURL, setphotoModalURL] = useState('');

  useEffect(() => {
    if (keyword.length >= 3) {
      const results = qaData
        .filter(
          (q) => q.question_body.toLowerCase().includes(keyword.toLowerCase())
        )
        .map(
          (q) => {
            let newQ = JSON.parse(JSON.stringify(q));
            newQ.question_body = newQ.question_body.replace(
              new RegExp(keyword, 'gi'),
              (match) => `<mark class="search-match">${match}</mark>`
            )
            return newQ;
          }
        )
      setQs(results);
      setDisplayQs(results.slice(0, 2));
    } else {
      setQs(qaData);
      setDisplayQs(qaData.slice(0, 2));
    }
  }, [keyword]);


  function handleLoad() {
    setDisplayQs([...displayQs, ...qs.slice(displayQs.length, displayQs.length + 2)]);
  }

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: productID, count: 100 } })
      .then((res) => res.data.results.sort((a, b) => b.question_helpfulness - a.question_helpfulness))
      .then((sortedResults) => {
        setQAData(sortedResults);
        setQs(sortedResults);
        setDisplayQs(sortedResults.slice(0, 2));

        if (!localStorage.getItem('qStatus')) {
          const qStatus = {};
          sortedResults.forEach((q) => { qStatus[q.question_id] = false; });
          localStorage.setItem('qStatus', JSON.stringify(qStatus));
        }

        if (!localStorage.getItem('aStatus')) {
          const aStatus = {};
          sortedResults.forEach((q) => {
            Object.values(q.answers).forEach(
              (a) => { aStatus[a.id] = { helpful: false, reported: false } }
            )
          });
          localStorage.setItem('aStatus', JSON.stringify(aStatus));
        }
      })
      .catch((err) => { alert(err); });
  }, []);

  useEffect(() => {
    setQsLeft(qs.length - displayQs.length);
  }, [displayQs, qs.length]);

  return (
    <section id="section-qanda">
      <div className="section-container">
        <h2 className="heading heading-secondary">QUESTIONS & ANSWERS</h2>
        <QASearch keyword={keyword} setKeyword={setKeyword} />
        <QAList qs={displayQs} qsLeft={qsLeft} onHandleLoad={handleLoad} setModal={setModal} setphotoModalURL={setphotoModalURL} />
        <AnswerPhotoModal photoURL={photoModalURL} />
      </div>
    </section>
  );
}

export default QuestionsAndAnswers;
