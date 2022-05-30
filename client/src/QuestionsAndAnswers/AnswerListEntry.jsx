const axios = require('axios');
import React from 'react';
import Helpful from './Helpful.jsx';
import ReportButton from './ReportButton.jsx';
import AnswerPhotoGallery from './AnswerPhotoGallery.jsx';
import { DatePosted } from '../helper/Date.jsx';

export default function AnswerListEntry({ a, setphotoModalURL }) {
  function markAnswerHelpful() {
    axios.put(`/qa/answers/${a.id}/helpful`)
      .then(() => {console.log('success')})
      .catch((err) => {alert(err)});
  }

  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      {a.photos.length && <AnswerPhotoGallery urls={a.photos} setphotoModalURL={setphotoModalURL} />}

      <div className="answer-info">
        <span>by {a.answerer_name}, {DatePosted(a.date)}</span>
        |
        <Helpful count={a.helpfulness} onMarkHelpful={markAnswerHelpful} />
        |
        {/* <span>Report</span> */}
        <ReportButton />
      </div>
    </li>
  )
}