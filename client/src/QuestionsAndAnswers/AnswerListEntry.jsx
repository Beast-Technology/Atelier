/* eslint-disable no-alert */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Helpful from './Helpful.jsx';
import ReportButton from './ReportButton.jsx';
import AnswerPhotoGallery from './AnswerPhotoGallery.jsx';
import { DatePosted } from '../helper/Date.jsx';

const axios = require('axios');

export default function AnswerListEntry({ a, setphotoModalURL }) {
  function markAnswerHelpful() {
    axios.put(`${process.env.API_URL}/qa/answers/${a.id}/helpful`)
      .catch((err) => { alert(err); });

    const aStatus = JSON.parse(localStorage.getItem('aStatus'));
    aStatus[a.id].helpful = true;
    localStorage.setItem('aStatus', JSON.stringify(aStatus));
  }

  function markReported() {
    const aStatus = JSON.parse(localStorage.getItem('aStatus'));
    aStatus[a.id].reported = true;
    localStorage.setItem('aStatus', JSON.stringify(aStatus));
  }

  return (
    <li className="answer-content">
      <p className="answer-text">{a.body}</p>

      {!!a.photos.length && <AnswerPhotoGallery urls={a.photos} setphotoModalURL={setphotoModalURL} />}

      <div className="answer-info">
        <span>by {a.answerer_name}, {DatePosted(a.date)}</span>
        |
        <Helpful target="answer" id={a.id} count={a.helpfulness} onMarkHelpful={markAnswerHelpful} />
        |
        <ReportButton id={a.id} onMarkReported={markReported} />
      </div>
    </li>
  );
}
