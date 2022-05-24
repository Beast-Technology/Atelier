import React, { useState, useEffect } from 'react';
import QAListEntry from './QAListEntry.jsx';

const axios = require('axios');

export default function QAList() {
  const [qs, setQs] = useState([]);

  useEffect(() => {
    axios.get('/qa/questions', { params: { product_id: 40345 } })
      .then(res => {
        console.log('qa list:', res.data.results);
        setQs(res.data.results);
        console.log('qs:', qs);
        })
      .catch(err => { alert(err) })
  }, [])

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